import { useState, type ReactElement, useEffect } from 'react'
import QuoteIcon from './icons/QuoteIcon'
import StarIcon from './icons/StarIcon'

interface IReview {
  id: number
  client: string
  content: string
}

interface IProps {
  reviews: IReview[]
}

export default function Reviews({ reviews }: IProps): ReactElement {
  const [current, setCurrent] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const handleReview = (id: number): void => {
    if (id !== current) {
      setCurrent(id)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (current < reviews.length - 1) {
      setCurrent(prev => prev + 1)
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='grow max-h-[525px] relative flex'>
      <div className="w-full overflow-hidden">
        <ul
          className='flex items-center size-full transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {
            reviews.map((review, i) => (
              <li key={i} className='size-full flex-shrink-0 px-2'>
                <div className='px-4 pt-4 pb-12 grow bg-slate-800 rounded-xl text-slate-100 flex flex-col items-center justify-around h-full sm:pt-12 md:px-10'>
                  <div className='grow w-full flex items-start gap-2'>
                    <div className='hidden h-10 w-16 text-3xl text-white sm:block'>
                      <QuoteIcon />
                    </div>
                    <div className='grow flex flex-col items-start justify-between h-full pt-4 pb-8 w-11/12 md:py-4'>
                      <p className='mb-4 text-ellipsis overflow-hidden w-full text-left italic md:tracking-wide md:text-lg lg:text-xl xl:text-2xl'>
                        {
                          review.content
                        }
                      </p>
                      <div className='w-full flex flex-col justify-start gap-4'>

                        <div className='flex items-center gap-1 text-c-yellow'>
                          <StarIcon className='size-6' />
                          <StarIcon className='size-6' />
                          <StarIcon className='size-6' />
                          <StarIcon className='size-6' />
                          <StarIcon className='size-6' />
                        </div>

                        <h3 className='text-slate-200 md:text-2xl'>
                          {
                            review.client
                          }
                        </h3>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className='hidden items-center gap-8 absolute bottom-6 left-1/2 -translate-x-1/2 sm:flex md:gap-4'>
        {
          reviews.map(review => (
            <span
              key={review.id}
              className={`size-5 md:size-4 rounded-full ${current === review.id ? 'bg-c-yellow' : 'bg-slate-900 cursor-pointer'}`}
              onClick={() => handleReview(review.id)}
            />
          ))
        }
      </div>
      {
        !!current &&
        <button className="absolute top-1/2 -start-5 z-30 flex items-center justify-center h-fit cursor-pointer group -translate-y-1/2 focus:outline-none disabled:opacity-40 disabled:cursor-default" onClick={handlePrev}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300/30 group-hover:ring-1 group-hover:ring-yellow-300 group-focus:outline-none group-disabled:hover:ring-0">
            <svg className="w-4 h-4 text-yellow-400 rtl:rotate-180 group-focus:text-yellow-300 group-hover:text-yellow-300 group-disabled:hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      }
      {
        current < reviews.length - 1 &&
        <button className="absolute top-1/2 -end-5 z-30 flex items-center justify-center h-fit w-fit cursor-pointer group -translate-y-1/2 focus:outline-none disabled:opacity-40 disabled:cursor-default" onClick={handleNext}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300/30 group-hover:ring-1 group-hover:ring-yellow-300 group-focus:outline-none group-disabled:hover:ring-0">
            <svg className="w-4 h-4 text-yellow-400 rtl:rotate-180 group-focus:text-yellow-300 group-hover:text-yellow-300 group-disabled:hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      }
    </div >

  )
}