import emailjs from '@emailjs/browser'
import type { SyntheticEvent } from 'react'
import { useState } from 'react'
import '../styles/Form.css'

interface Props {
  nameTitle: string
  namePlaceholder: string
  emailTitle: string
  emailPlaceholder: string
  messageTitle: string
  messagePlaceholder: string
  button: string
}

export default function Form ({ nameTitle, namePlaceholder, emailTitle, emailPlaceholder, messageTitle, messagePlaceholder, button }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    const data = {
      name,
      email,
      message
    }
    if (name !== undefined && email !== undefined && message !== undefined) {
      emailjs.send('service_s768wth', 'template_dlc9irx', data, '4V_v3REMhscB-ql01')
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 mt-4 shadow-lg bg-cyan-700 flex flex-col gap-2 w-full sm:p-8 lg:w-3/4'>
      <label className='form-subtitle text-slate-100' htmlFor='nameInput'>{nameTitle}</label>
      <input onChange={(e) => setName(e.target.value)} required name='from_name' className='rounded-md text-slate-900 bg-neutral-200 sm:px-4 p-2 sm:text-xl md:text-2xl' type='text' id='nameInput' placeholder={namePlaceholder} />
      <label className='form-subtitle text-slate-100' htmlFor='emailInput'>{emailTitle}</label>
      <input onChange={(e) => setEmail(e.target.value)} required name='email' className='rounded-md text-slate-900 bg-neutral-200 sm:px-4 p-2 sm:text-xl md:text-2xl' type='email' pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' id='emailInput' placeholder={emailPlaceholder} />
      <label className='form-subtitle sm:mt-4 text-slate-100' htmlFor=''>{messageTitle}</label>
      <textarea onChange={(e) => setMessage(e.target.value)} required name='message' className='p-2 rounded-md text-slate-900 bg-neutral-200 resize-none sm:px-4 sm:text-xl md:text-2xl' id='' cols={30} rows={5} placeholder={messagePlaceholder} />
      <button className='form-btn py-2 px-4 w-fit mx-auto rounded-lg text-slate-900 bg-gradient-to-b from-[#FFC60A] to-[#FFC60A] sm:mt-4 sm:px-8 sm:py-3 hover:from-[#FED049] hover:to-[#FED049]'>{button}</button>
    </form>
  )
}