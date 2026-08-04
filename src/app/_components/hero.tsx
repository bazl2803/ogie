import { Button, Logo } from '@/components'
import './hero.scss'
import { LiaPhoneSolid, LiaTruckSolid } from 'react-icons/lia'

export const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-wrapper">
				<div className="hero-background" />

				<span className='hero-decoration'>
					Suministros Eléctricos
				</span>

				<div className="hero-logo">
					<Logo />
				</div>

				<div className="hero-content">
					<h1>Soluciones Eléctricas <br /> para su Hogar <br /> o Proyecto</h1>
				</div>

				<p className='hero-description'>Desde lo más básico hasta lo más avanzado. Le ofrecemos una amplia gama de productos para impulsar sus proyectos.</p>

				<div className="hero-actions">
					<Button variant='filled'>Ver Productos</Button>
					<Button>Contáctanos</Button>
				</div>

				<div className="hero-floating-card">
					<div className='hero-floating-card-item'>
						<LiaTruckSolid className='hero-floating-card-item-icon' />
						<span className='hero-floating-card-item-title'>Envíos a Domicilio</span>
						<p className='hero-floating-card-item-description'>Realizamos entregas rápidas y seguras directamente en su puerta.</p>
					</div>

					<div className='hero-floating-card-item'>
						<LiaPhoneSolid className='hero-floating-card-item-icon' />
						<span className='hero-floating-card-item-title'>Asesoría Personalizada</span>
						<p className='hero-floating-card-item-description'>Asesoría personalizada para ayudarte en tus proyectos.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
