import { useState, type ReactElement, useEffect } from 'react'
import QuoteIcon from './icons/QuoteIcon'
import StarIcon from './icons/StarIcon'

interface IReview {
  id: number
  client: string
  review: string
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
    <div className='grow overflow-hidden h-96 relative'>
      <div className='px-4 md:px-10 py-12 h-full bg-c-light-blue rounded-xl text-slate-100 flex flex-col items-center justify-around'>
        <div className='grow w-full flex items-start gap-2'>
          <div className='h-10 w-16 text-3xl text-white'>
            <QuoteIcon />
          </div>
          <div className='grow flex flex-col items-start justify-between h-full py-4 w-11/12'>
            <p className='mb-4 text-ellipsis overflow-hidden w-full text-left md:tracking-wide md:text-lg lg:text-xl'>
              {
                isClient ? reviews[current].review : ''
              }
            </p>
        <div className='w-full flex items-center justify-start gap-4'>
          <h3 className='md:text-xl italic'>
            {
              isClient ? reviews[current].client : 'Random'
            }
          </h3>
          <div className='flex items-center gap-1 text-c-yellow'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>

          </div>
        </div>


        <div className='flex items-center gap-4'>
          {
            reviews.map(review => (
              <span
                key={review.id}
                className={`w-6 h-6 md:w-4 md:h-4 rounded-full ${current === review.id ? 'bg-c-yellow' : 'bg-c-blue'} cursor-pointer`}
                onClick={() => handleReview(review.id)}
              />
            ))
          }
        </div>
      </div>
      <button type="button" className="absolute top-1/2 start-3 z-30 flex items-center justify-center h-fit cursor-pointer group focus:outline-none -translate-y-1/2" onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300/30 group-hover:ring-1 group-hover:ring-yellow-300 group-focus:ring-1 group-focus:ring-yellow-300 group-focus:outline-none">
            <svg className="w-4 h-4 text-yellow-400 group-focus:text-yellow-300 group-hover:text-yellow-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-1/2 end-3 z-30 flex items-center justify-center h-fit w-fit cursor-pointer group focus:outline-none -translate-y-1/2" onClick={handleNext}>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300/30 group-hover:ring-1 group-hover:ring-yellow-300 group-focus:ring-1 group-focus:ring-yellow-300 group-focus:outline-none">
            <svg className="w-4 h-4 text-yellow-400 group-focus:text-yellow-300 group-hover:text-yellow-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </div>

  )
}