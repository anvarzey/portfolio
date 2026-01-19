import emailjs from '@emailjs/browser'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LuSend as SendIcon, LuLoaderCircle as SpinnerIcon } from "react-icons/lu"
import { ui } from "@/i18n/ui"
import { useTranslations } from "@/i18n/utils"
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactForm } from '@/schemas/contactFormSchema'

interface Props {
    locale: keyof typeof ui
}

export default function ContactForm({ locale }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useTranslations(locale)
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    })

    const onSubmit = (data: ContactForm) => {
        setIsSubmitting(true)
/*
        try {
            emailjs.send('service_s768wth', 'template_dlc9irx', data, '4V_v3REMhscB-ql01')
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    throw new Error('An error has been occurred: ', error.text)
                })
        } catch (error) {
            alert('An error has been occurred')
        } finally {
            setIsSubmitting(false)
            }
            */
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
                <Controller
                    name='name'
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="name">
                                {t('form.name.label')}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("form.name.placeholder")}
                                required
                                className="bg-card border-border focus:border-accent-blue"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>
            <div className="space-y-2">
                <Controller
                    name='email'
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="email">
                                {t('form.email.label')}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("form.email.placeholder")}
                                required
                                className="bg-card border-border focus:border-accent-blue"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                {/* <Label htmlFor="email" className="text-foreground block">
                    {t('form.email.label')}
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("form.email.placeholder")}
                    required
                    className="bg-card border-border focus:border-accent-blue"
                /> */}
            </div>
            <div className="space-y-2">
                <Controller
                    name='message'
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="message">
                                {t('form.message.label')}
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="message"
                                aria-invalid={fieldState.invalid}
                                placeholder={t("form.message.placeholder")}
                                rows={5}
                                required
                                className="bg-card border-border focus:border-accent-blue resize-none"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
                {/* <Label htmlFor="message" className="text-foreground block">
                    {t('form.message.label')}
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder={t("form.message.placeholder")}
                    rows={5}
                    required
                    className="bg-card border-border focus:border-accent-blue resize-none"
                /> */}
            </div>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-blue flex items-center gap-2 hover:bg-accent-blue/90 text-white font-semibold"
            >
                {isSubmitting ? (
                    <>
                        <span>{t('form.btn.sending')}</span>
                        <SpinnerIcon className='size-4 animate-spin' />
                    </>
                ) : (
                    <>
                        <span>{t('form.btn')}</span>
                        <SendIcon className="size-4" />
                    </>
                )}
            </Button>
        </form>
    )
}
