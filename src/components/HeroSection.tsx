"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
	LuArrowDown as ArrowDownIcon,
	LuCloud as CloudIcon,
	LuCodeXml as Code2Icon,
	LuCpu as CpuIcon,
	LuDatabase as DatabaseIcon,
	LuGitBranch as GitBranchIcon,
	LuLayers as LayersIcon,
	LuServer as ServerIcon,
	LuTerminal as TerminalIcon,
} from "react-icons/lu"
import { ui } from "@/i18n/ui"
import { useTranslations } from "@/i18n/utils"

interface Particle {
	x: number
	y: number
	vx: number
	vy: number
	radius: number
	type: "node" | "data" | "pulse"
	life: number
	maxLife: number
	angle: number
}

interface Props {
	locale: keyof typeof ui
}

export default function HeroSection({ locale }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const { t } = useTranslations(locale)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth * window.devicePixelRatio
			canvas.height = canvas.offsetHeight * window.devicePixelRatio
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
		}

		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)

		const particles: Particle[] = []
		const numNodes = 40

		for (let i = 0; i < numNodes; i++) {
			const type = i < 20 ? "node" : i < 35 ? "data" : "pulse"
			particles.push({
				x: Math.random() * canvas.offsetWidth,
				y: Math.random() * canvas.offsetHeight,
				vx: (Math.random() - 0.5) * (type === "data" ? 1.5 : 0.3),
				vy: (Math.random() - 0.5) * (type === "data" ? 1.5 : 0.3),
				radius: type === "node" ? Math.random() * 4 + 2 : type === "data" ? 2 : Math.random() * 6 + 4,
				type,
				life: Math.random() * 100,
				maxLife: 100 + Math.random() * 100,
				angle: Math.random() * Math.PI * 2,
			})
		}

		let time = 0

		const animate = () => {
			ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
			time += 0.01

			particles.forEach((particle, i) => {
				particle.x += particle.vx
				particle.y += particle.vy
				particle.life += 1
				particle.angle += 0.02

				if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
				if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1

				if (particle.life > particle.maxLife) {
					particle.life = 0
					particle.x = Math.random() * canvas.offsetWidth
					particle.y = Math.random() * canvas.offsetHeight
				}

				// Draw connections for nodes
				if (particle.type === "node") {
					particles.forEach((other, j) => {
						if (i !== j && other.type === "node") {
							const dx = particle.x - other.x
							const dy = particle.y - other.y
							const dist = Math.sqrt(dx * dx + dy * dy)

							if (dist < 120) {
								ctx.beginPath()
								ctx.moveTo(particle.x, particle.y)
								ctx.lineTo(other.x, other.y)
								const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
								gradient.addColorStop(0, `rgba(46, 170, 220, ${0.4 * (1 - dist / 120)})`)
								gradient.addColorStop(1, `rgba(46, 170, 220, ${0.1 * (1 - dist / 120)})`)
								ctx.strokeStyle = gradient
								ctx.lineWidth = 1
								ctx.stroke()
							}
						}
					})

					// Draw node with glow
					ctx.beginPath()
					ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
					ctx.fillStyle = "rgba(46, 170, 220, 0.1)"
					ctx.fill()

					ctx.beginPath()
					ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
					ctx.fillStyle = "#2eaadc"
					ctx.fill()
				}

				// Draw data particles (smaller, faster)
				if (particle.type === "data") {
					const alpha = 0.3 + 0.7 * Math.sin(particle.life * 0.1)
					ctx.beginPath()
					ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
					ctx.fillStyle = `rgba(46, 170, 220, ${alpha})`
					ctx.fill()
				}

				// Draw pulse particles (expanding circles)
				if (particle.type === "pulse") {
					const progress = particle.life / particle.maxLife
					const radius = particle.radius + progress * 30
					const alpha = 0.3 * (1 - progress)
					ctx.beginPath()
					ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
					ctx.strokeStyle = `rgba(46, 170, 220, ${alpha})`
					ctx.lineWidth = 2
					ctx.stroke()
				}
			})

			requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener("resize", resizeCanvas)
		}
	}, [])

	const scrollToWork = () => {
		document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" })
	}

	const orbitIcons = [
		{
			Icon: DatabaseIcon,
			delay: "0s",
			orbit: 1
		},
		{
			Icon: ServerIcon,
			delay: "-3s",
			orbit: 1
		},
		{
			Icon: GitBranchIcon,
			delay: "-6s",
			orbit: 1
		},
		{
			Icon: Code2Icon,
			delay: "-9s",
			orbit: 1
		},
		{
			Icon: LayersIcon,
			delay: "0s",
			orbit: 2
		},
		{
			Icon: CpuIcon,
			delay: "-4s",
			orbit: 2
		},
		{
			Icon: CloudIcon,
			delay: "-8s",
			orbit: 2
		},
	]

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
		>
			<div className="absolute inset-0 opacity-30">
				<canvas ref={canvasRef} className="w-full h-full" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				<div className="animate-fade-in">
					<h1 className="text-4xl font-atkinson font-bold leading-tight text-balance z-50 relative sm:text-5xl lg:text-6xl">
						<span>{t('hero.greeting')}</span> <span className="text-accent-blue">Julian</span>.
					</h1>

					<p className="mt-6 text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
						{t('hero.phrase')}
					</p>

					<Button
						onClick={scrollToWork}
						size="lg"
						className="mt-8 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-6 text-lg group"
					>
						{t('hero.btn')}
						<ArrowDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
					</Button>
				</div>

				<div className="flex justify-center items-center w-full min-h-80 sm:min-h-100 lg:min-h-120">
					<div className="relative w-70 h-70 sm:w-87.5 sm:h-87.5 lg:w-105 lg:h-105">
						{/* Outer orbit ring */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-full h-full border border-accent-blue/10 rounded-full" />
						</div>

						{/* Middle orbit ring */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-[75%] h-[75%] border border-accent-blue/20 rounded-full" />
						</div>

						{/* Inner orbit ring with glow */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-[50%] h-[50%] border-2 border-accent-blue/30 rounded-full shadow-[0_0_30px_rgba(46,170,220,0.15)]" />
						</div>

						{/* Orbiting tech icons - outer orbit */}
						{orbitIcons
							.filter((i) => i.orbit === 1)
							.map(({ Icon, delay }, index) => (
								<div
									key={`orbit1-${index}`}
									className="absolute inset-0 flex items-center justify-center"
									style={{
										animation: "orbit-outer 12s linear infinite",
										animationDelay: delay,
									}}
								>
									<div
										className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm border border-accent-blue/30 rounded-xl flex items-center justify-center shadow-lg"
										style={{ transform: "translateY(calc(-50% + var(--orbit-outer-radius, -200px)))" }}
									>
										<Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" />
									</div>
								</div>
							))}

						{/* Orbiting tech icons - inner orbit (reverse direction) */}
						{orbitIcons
							.filter((i) => i.orbit === 2)
							.map(({ Icon, delay }, index) => (
								<div
									key={`orbit2-${index}`}
									className="absolute inset-0 flex items-center justify-center"
									style={{
										animation: "orbit-inner 10s linear infinite reverse",
										animationDelay: delay,
									}}
								>
									<div
										className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-background/60 backdrop-blur-sm border border-accent-blue/20 rounded-lg flex items-center justify-center"
										style={{ transform: "translateY(calc(-50% + var(--orbit-inner-radius, -150px)))" }}
									>
										<Icon className="w-3 h-3 sm:w-4 sm:h-4 text-accent-blue/80" />
									</div>
								</div>
							))}

						{/* Center: Code editor mockup - responsive sizing */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-32 sm:w-40 lg:w-48 min-h-40 sm:min-h-48 lg:min-h-56 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl overflow-visible flex flex-col">
								{/* Editor header */}
								<div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#0d1117] border-b border-[#30363d]">
									<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
									<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
									<div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27ca40]" />
									<span className="ml-1 sm:ml-2 text-[8px] sm:text-[10px] text-muted-foreground font-mono">
										index.ts
									</span>
								</div>

								{/* Code content with typing animation */}
								<div className="p-2 sm:p-3 font-mono text-[8px] sm:text-[10px] leading-relaxed flex-1">
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">1</span>
										<span className="text-[#ff7b72]">const</span>
										<span className="text-[#79c0ff] ml-1">build</span>
										<span className="text-muted-foreground ml-1">=</span>
										<span className="text-[#ff7b72] ml-1">async</span>
										<span className="text-muted-foreground">()</span>
									</div>
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">2</span>
										<span className="text-muted-foreground ml-2">{`=>`}</span>
										<span className="text-[#ffa657] ml-1">{`{`}</span>
									</div>
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">3</span>
										<span className="text-[#ff7b72] ml-3 sm:ml-4">await</span>
										<span className="text-[#d2a8ff] ml-1">deploy</span>
										<span className="text-muted-foreground">(</span>
									</div>
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">4</span>
										<span className="text-[#a5d6ff] ml-4 sm:ml-6">"production"</span>
									</div>
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">5</span>
										<span className="text-muted-foreground ml-3 sm:ml-4">);</span>
									</div>
									<div className="flex">
										<span className="text-muted-foreground/50 w-3 sm:w-4">6</span>
										<span className="text-[#ffa657] ml-2">{`}`}</span>
										<span className="text-muted-foreground">;</span>
									</div>
									<div className="flex items-center mt-1 sm:mt-2">
										<span className="text-muted-foreground/50 w-3 sm:w-4">7</span>
										<span className="w-1.5 h-3 sm:w-2 sm:h-4 bg-accent-blue animate-pulse" />
									</div>
								</div>

								{/* Terminal output */}
								<div className="mx-1.5 sm:mx-2 mb-1.5 sm:mb-2 p-1.5 sm:p-2 bg-[#0d1117] rounded border border-[#30363d]">
									<div className="flex items-center gap-1">
										<TerminalIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent-blue" />
										<span className="text-[7px] sm:text-[8px] text-green-400 font-mono animate-pulse">Building...</span>
									</div>
								</div>
							</div>
						</div>

						{/* Floating badges - responsive positioning and sizing */}
						<div className="absolute top-2 right-4 flex items-center sm:top-4 sm:right-8 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-500/20 border border-green-500/30 rounded-full animate-float">
							<span className="text-[8px] sm:text-[10px] text-green-400 font-mono">deployed</span>
						</div>

						<div className="absolute bottom-12 left-2 flex items-center sm:bottom-16 sm:left-4 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-accent-blue/20 border border-accent-blue/30 rounded-full animate-float-delayed">
							<span className="text-[8px] align-middle sm:text-[10px] text-accent-blue font-mono">Typescript</span>
						</div>

						<div className="absolute top-14 left-0 flex items-center sm:top-20 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-purple-500/20 border border-purple-500/30 rounded-full animate-float">
							<span className="text-[8px] sm:text-[10px] text-purple-400 font-mono">full-stack</span>
						</div>

						{/* Data flow lines - responsive viewBox */}
						<svg
							className="absolute inset-0 w-full h-full pointer-events-none"
							viewBox="0 0 100 100"
							preserveAspectRatio="xMidYMid meet"
						>
							<defs>
								<linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="rgba(46, 170, 220, 0)" />
									<stop offset="50%" stopColor="rgba(46, 170, 220, 0.5)" />
									<stop offset="100%" stopColor="rgba(46, 170, 220, 0)" />
								</linearGradient>
							</defs>
							<path
								d="M 14 24 Q 36 12 50 50 Q 64 88 86 76"
								fill="none"
								stroke="url(#dataFlow)"
								strokeWidth="0.5"
								className="animate-dash"
							/>
							<path
								d="M 86 24 Q 64 36 50 50 Q 36 64 14 76"
								fill="none"
								stroke="url(#dataFlow)"
								strokeWidth="0.5"
								className="animate-dash-reverse"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	)
}
