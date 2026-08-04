import './categories.scss'
import { LiaBoltSolid, LiaLightbulbSolid, LiaPowerOffSolid, LiaToolsSolid, LiaBoxesSolid, LiaShieldAltSolid } from 'react-icons/lia'

const CATEGORIES = [
	{
		id: 1,
		name: 'Cableado',
		icon: LiaBoltSolid,
		description: 'Cables y conectores de alta calidad'
	},
	{
		id: 2,
		name: 'Iluminación',
		icon: LiaLightbulbSolid,
		description: 'Bombillas y sistemas LED modernos'
	},
	{
		id: 3,
		name: 'Interruptores',
		icon: LiaPowerOffSolid,
		description: 'Controles y reguladores eléctricos'
	},
	{
		id: 4,
		name: 'Herramientas',
		icon: LiaToolsSolid,
		description: 'Equipos profesionales para instalación'
	},
	{
		id: 5,
		name: 'Cajas & Paneles',
		icon: LiaBoxesSolid,
		description: 'Distribución y protección de circuitos'
	},
	{
		id: 6,
		name: 'Protección',
		icon: LiaShieldAltSolid,
		description: 'Dispositivos de seguridad eléctrica'
	}
]

export const Categories = () => {
	return (
		<section className="categories">
			<div className="categories-container">
				<div className="categories-grid">
					{CATEGORIES.map((category) => {
						const IconComponent = category.icon
						return (
							<div key={category.id} className="categories-card">
								<div className="categories-card-icon">
									<IconComponent />
								</div>
								<h3 className="categories-card-label">{category.name}</h3>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
