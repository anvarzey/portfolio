"use client"

import { useState, useEffect } from "react"
import { useInView } from "../hooks/use-in-view"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
	LuChevronLeft as ChevronLeftIcon,
	LuChevronRight as ChevronRightIcon,
	LuStar as StarIcon
} from "react-icons/lu"
import { ui } from "@/i18n/ui"
import { useTranslations } from "@/i18n/utils"

interface Props {
	locale: keyof typeof ui
}

export default function ReviewsSection({ locale }: Props) {
	const { ref, isInView } = useInView()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)
	const { t } = useTranslations(locale)

	const reviews = [
		{
			author: t('reviews.1.author'),
			content: t('reviews.1.content'),
			rating: 5
		},
		{
			author: t('reviews.2.author'),
			content: t('reviews.2.content'),
			rating: 5
		},
		{
			author: t('reviews.3.author'),
			content: t('reviews.3.content'),
			rating: 5
		},
		{
			author: t('reviews.4.author'),
			content: t('reviews.4.content'),
			rating: 5
		},
	]

	useEffect(() => {
		if (!isAutoPlaying) return
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % reviews.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [isAutoPlaying])

	const goToPrevious = () => {
		setIsAutoPlaying(false)
		setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
	}

	const goToNext = () => {
		setIsAutoPlaying(false)
		setCurrentIndex((prev) => (prev + 1) % reviews.length)
	}

	return (
		<section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
			<div
				ref={ref}
				className={`max-w-4xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
					}`}
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
					<span>{t('reviews.title.1')}</span> <span className="text-accent-blue">{t('reviews.title.2')}</span>
				</h2>
				{/* <p className="text-muted-foreground text-center mb-12">{t('reviews.subtitle')}</p> */}

				<div className="relative">
					<div className="overflow-hidden">
						<div
							className="flex items-center transition-transform duration-500 ease-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{reviews.map((review, index) => (
								<div key={index} className="w-full shrink-0 px-4">
									<Card className="bg-card border-border">
										<CardContent className="pt-8 pb-8 px-8 text-center">
											<div className="flex justify-center gap-1 mb-6">
												{Array.from({ length: review.rating }).map((_, i) => (
													<StarIcon key={i} className="w-5 h-5 fill-accent-blue text-accent-blue" />
												))}
											</div>
											<blockquote className="text-lg sm:text-xl text-foreground mb-6 italic leading-relaxed">
												"{review.content}"
											</blockquote>
											<div>
												<p className="font-semibold text-foreground">{review.author}</p>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>

					<Button
						variant="outline"
						size="icon"
						className="cursor-pointer absolute -left-4 top-1/2 -translate-y-1/2 lg:-left-8 bg-card border-border hover:border-accent-blue hover:text-accent-blue flex"
						onClick={goToPrevious}
					>
						<ChevronLeftIcon className="h-4 w-4" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className="cursor-pointer absolute -right-4 top-1/2 -translate-y-1/2 lg:-right-8 bg-card border-border hover:border-accent-blue hover:text-accent-blue flex"
						onClick={goToNext}
					>
						<ChevronRightIcon className="h-4 w-4" />
					</Button>
				</div>

				<div className="flex justify-center gap-2 mt-6">
					{reviews.map((_, index) => (
						<Button
							key={index}
							onClick={() => {
								setIsAutoPlaying(false)
								setCurrentIndex(index)
							}}
							className={`h-4 rounded-full transition-all p-0 ${index === currentIndex ? "bg-accent-blue w-10" : "bg-muted-foreground/30 w-4"
								}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
