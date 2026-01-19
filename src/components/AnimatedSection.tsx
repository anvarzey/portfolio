import { useInView } from "../hooks/use-in-view"

interface Props {
	divClasses?: string
	sectionClasses: string
	sectionId: string
	children: any
}

export default function AnimatedSection({ children, divClasses = '', sectionClasses, sectionId }: Props) {
	const { ref, isInView } = useInView()

	return (
		<section id={sectionId} className={sectionClasses}>
			<div
				ref={ref}
				className={`${divClasses} mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
			>
				{children}
			</div>
		</section>
	)
}
