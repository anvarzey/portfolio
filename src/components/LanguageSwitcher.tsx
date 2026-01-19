import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ui } from "@/i18n/ui"

interface Props {
	locale: keyof typeof ui
}

export default function LanguageSwitcher({ locale }: Props) {

	const handleLangSwitch = (newLocale: keyof typeof ui) => {
		let newUrl = window.location.origin
		if (newLocale === 'en') {
			newUrl += `/${window.location.hash}`
		} else {
			newUrl += `/${newLocale}/${window.location.hash}`
		}

		window.location.replace(newUrl)
	}
	return (
		<>
			<Button
				variant="ghost"
				disabled={locale === 'en'}
				className={cn(
					"px-3 py-1 text-sm font-medium rounded transition-all disabled:opacity-100",
					locale === "en"
						? "bg-accent-blue text-white"
						: "text-muted-foreground hover:text-foreground",
				)}
				onClick={() => handleLangSwitch('en')}
			>
				🇬🇧 en
			</Button>
			<Button
				variant="ghost"
				disabled={locale === 'es'}
				className={cn(
					"px-3 py-1 text-sm font-medium rounded transition-all disabled:opacity-100",
					locale === "es"
						? "bg-accent-blue text-white"
						: "text-muted-foreground hover:text-foreground",
				)}
				onClick={() => handleLangSwitch('es')}
			>
				🇪🇸 es
			</Button>
		</>
	)
}
