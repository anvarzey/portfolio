import FiverrIcon from "./icons/FiverrIcon"
import GitHubIcon from "./icons/GitHubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import TwitterIcon from './icons/TwitterIcon'

interface OptionContent {
  containerClasses: string
  nameClasses: string
  icon: string
  link: string
}

interface Options {
  GitHub: OptionContent
  X: OptionContent
  Linkedin: OptionContent
  Fiverr: OptionContent
}

type KeywordProp = keyof Options

export default function SocialButton({ keyword }: { keyword: KeywordProp }) {
  let containerDefaultClasses = 'flex items-center gap-2 px-4 py-2 transition duration-100 ease-in sm:text-xl sm:gap-4 sm:py-3 sm:px-6 md:text-2xl md:gap-5 md:py-4 md:px-8 md:hover:scale-105 rounded-md'
  const options: Options = {
    GitHub: {
      containerClasses: 'bg-slate-100',
      nameClasses: 'font-medium',
      icon: '/icons/github.svg',
      link: 'https://github.com/anvarzey'
    },
    X: {
      containerClasses: 'bg-black',
      nameClasses: 'font-medium text-zinc-100',
      icon: '/icons/twitter.svg',
      link: 'https://twitter.com/anvarzey'
    },
    Linkedin: {
      containerClasses: 'bg-[#007FB5]',
      nameClasses: 'font-medium text-zinc-100',
      icon: '/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/juli%C3%A1n-varo-134759234/'
    },
    Fiverr: {
      containerClasses: 'bg-slate-100',
      nameClasses: 'font-medium',
      icon: '/icons/linkedin.svg',
      link: 'https://www.fiverr.com/anvarzey23'
    }
  }
  return (
    <a className={`${containerDefaultClasses} ${options[keyword].containerClasses}`} href={options[keyword].link} target='_blank' rel='noreferrer noopener'>
      <span className='w-8 h-8 overflow-hidden flex items-center md:w-12 md:h-12'>
        {
          keyword === 'GitHub'
            ? <GitHubIcon color='black' />
            : keyword === 'X'
              ? <TwitterIcon color='white' />
              : keyword === 'Linkedin'
                ? <LinkedinIcon color='blue' />
                : <FiverrIcon />
        }
      </span>
      <span className={options[keyword].nameClasses}>{keyword}</span>
    </a>
  )
}