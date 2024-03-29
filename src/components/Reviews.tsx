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

export default function Reviews ({ reviews }: IProps): ReactElement {
  const [current, setCurrent] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const handleReview = (id: number): void => {
    if (id !== current) {
      setCurrent(id)
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className='grow overflow-hidden'>
      <div className='px-4 md:px-10 py-12 h-full bg-c-light-blue rounded-xl text-slate-100 flex flex-col items-center justify-around'>
        <div className='grow w-full flex items-start gap-2'>
          <div className='h-10 w-16 text-3xl text-white'>
            <QuoteIcon />
          </div>
          <div className='grow flex flex-col items-start py-4'>
            <p className='mb-4 text-ellipsis max-h-[40%] overflow-hidden w-full text-left md:tracking-wide md:text-lg lg:text-xl'>
              {
                isClient ? reviews[current].review : ''
              }
            </p>
            <div className='flex items-center gap-4'>

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
    </div>
  )
}