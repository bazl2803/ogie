import { Container, Logo } from '@/components'
import Image from 'next/image'
import './hero.scss'

export const Hero = () => {
	return (
		<Container>
			<section className="hero">
				{/* Logo */}
				<div className="hero-logo">
					<Logo />
				</div>

				{/* Hero Content */}
				<div className="hero-content">
					<h1>Soluciones Eléctricas para <br /> su Hogar o Proyecto</h1>
				</div>

				{/* Hero Image */}
				<div className="hero-image-container">
					<Image
						className='hero-image'
						src="/images/hero.png"
						alt="Hero"
						width={400}
						height={400}
						sizes="100vw"
					/>
				</div>
			</section>
		</Container>
	)
}
