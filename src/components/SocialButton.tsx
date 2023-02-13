import GitHubIcon from "./icons/GitHubIcon"
import TwitterIcon from './icons/TwitterIcon'

interface Options {
  GitHub: {
    containerClasses: string
    nameClasses: string
    icon: string
    link: string
  }
  Twitter: {
    containerClasses: string
    nameClasses: string
    icon: string
    link: string
  }
}

type KeywordProp = keyof Options

export default function SocialButton ({ keyword }: { keyword: KeywordProp }) {
  let containerDefaultClasses = 'flex items-center gap-2 px-4 py-2 transition duration-100 ease-in sm:text-xl sm:gap-4 sm:py-3 sm:px-6 md:text-2xl md:gap-5 md:py-4 md:px-8 md:hover:scale-105'
  const options: Options = {
    GitHub: {
      containerClasses: 'bg-neutral-100',
      nameClasses: 'text-bold',
      icon: '/icons/github.svg',
      link: 'https://github.com/anvarzey'
    },
    Twitter: {
      containerClasses: 'bg-[#55ACEE]',
      nameClasses: 'text-bold text-slate-100',
      icon: '/icons/twitter.svg',
      link: 'https://twitter.com/anvarzey'
    }
  }
  return (
    <a className={`${containerDefaultClasses} ${options[keyword].containerClasses}`} href={options[keyword].link} target='_blank'>
      <span className='w-8 h-8 md:w-12 md:h-12'>
        {
          keyword === 'GitHub'
            ? <GitHubIcon color='black' />
            : <TwitterIcon color='white' />
        }
      </span>
      <span className={options[keyword].nameClasses}>{keyword}</span>
    </a>
  )
}