import emailjs from '@emailjs/browser'
import '../styles/Form.css'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  nameTitle: string
  namePlaceholder: string
  nameMissing: string
  emailTitle: string
  emailPlaceholder: string
  emailMissing: string
  emailInvalid: string
  messageTitle: string
  messagePlaceholder: string
  messageMissing: string
  messageLength: string
  button: string
}

export default function Form ({
  nameTitle,
  namePlaceholder,
  nameMissing,
  emailTitle,
  emailPlaceholder,
  emailMissing,
  emailInvalid,
  messageTitle,
  messagePlaceholder,
  messageMissing,
  messageLength,
  button }: Props) {
  const { register, handleSubmit, formState: { errors, isValid, isLoading, isSubmitting, isSubmitSuccessful }, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      from_name: '',
      email: '',
      message: ''
    }
  })

  const validateEmail = (value: string) => {
    const validationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    return validationRegex.test(value) || emailInvalid
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      emailjs.send('service_s768wth', 'template_dlc9irx', data, '4V_v3REMhscB-ql01')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          throw new Error('An error has been occurred: ', error.text)
        })
    } catch (error) {
      alert('An error has been occurred')
    }
  }

  return (
    <div className='flex items-center justify-center w-full lg:w-3/4  mt-4'>
      {
        !isSubmitSuccessful
          ? (<form onSubmit={handleSubmit(onSubmit)} className='p-4 shadow-lg bg-zinc-800 rounded-lg flex flex-col gap-2 w-full sm:p-8'>
            <label className='form-subtitle text-zinc-50' htmlFor='nameInput'>{nameTitle}</label>
            <input {...register('from_name', { required: nameMissing })} className='rounded-md text-zinc-900 bg-neutral-200 sm:px-4 p-2 sm:text-xl md:text-2xl outline-none' type='text' id='nameInput' placeholder={namePlaceholder} />
            {
              errors.from_name?.message !== undefined &&
              (<p className='text-red-100'>{errors.from_name?.message}</p>)
            }
            <label className='form-subtitle sm:mt-4 text-zinc-50' htmlFor='emailInput'>{emailTitle}</label>
            <input {...register('email', { required: emailMissing, validate: validateEmail })} className='rounded-md text-zinc-900 bg-neutral-200 sm:px-4 p-2 sm:text-xl md:text-2xl outline-none' id='emailInput' placeholder={emailPlaceholder} />
            {
              errors.email?.message !== undefined &&
              (<p className='text-red-100'>{errors.email?.message}</p>)
            }
            <label className='form-subtitle sm:mt-4 text-zinc-50' htmlFor=''>{messageTitle}</label>
            <textarea {...register('message', { required: messageMissing, minLength: { value: 15, message: messageLength } })} className='p-2 rounded-md text-zinc-900 bg-neutral-200 resize-none sm:px-4 sm:text-xl md:text-2xl outline-none' id='' cols={30} rows={5} placeholder={messagePlaceholder} />
            {
              errors.message?.message !== undefined &&
              (<p className='text-red-100'>{errors.message?.message}</p>)
            }
            <button disabled={!isValid || isLoading || isSubmitting} className='form-btn py-2 px-4 w-fit mx-auto rounded-lg bg-[#CC9C00] border border-[#FFD449] text-gray-800 sm:mt-4 sm:px-8 sm:py-3 hover:bg-[#FFD449] disabled:opacity-50 disabled:hover:bg-[#CC9C00]'>{button}</button>
          </form>)
          : (<div className='flex flex-col items-center justify-center gap-6 w-full h-48 border-2 border-green-700 bg-green-100 rounded-xl text-center'>
            <div className='text-xl'>Your message has been sent successfully !</div>
            <button className='hover:border hover:border-green-600 hover:text-green-500 py-2 px-4 text-green-600 border border-green-800 rounded-lg h-fit' onClick={() => reset()}>Send another message</button>
          </div>)
      }
    </div>
  )
}