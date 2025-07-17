import { Carousel, CarouselItem, Title } from '@/modules/core/design-system';
import { stack } from '@styled-system/patterns';
import { CategoryCard } from './category-card';
import clsx from 'clsx';

export const CategoryList = () => {
	const categories = [
		{ title: 'Focos', image: '/spotlight.webp' },
		{ title: 'Tomas', image: '/outlet.jpeg' },
		{ title: 'Switchs', image: '/switch.jpeg' },
		{ title: 'Dados', image: '/pole.webp' },
		{ title: 'Sockets', image: '/socket.jpeg' },
		{ title: 'Cables', image: '/wires.jpeg' },
		{ title: 'Canaletas', image: '/conduit.webp' },
		{ title: 'Herramientas', image: '/tools.webp' },
		{ title: 'Transformadores', image: '/transformator.png' },
	];

	return (
		<div
			className={clsx(
				'categoriesList',
				stack({
					marginInline: 'auto',
					maxWidth: '6xl',
					width: 'full',
					padding: '1rem',
					gap: '1rem',
				})
			)}
		>
			<div
				className={stack({
					direction: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				})}
			>
				<Title level={5}>Categorias</Title>
			</div>

			<Carousel>
				{categories.map((category, index) => (
					<CarouselItem key={index}>
						<CategoryCard
							label={category.title}
							imageUrl={category.image}
						/>
					</CarouselItem>
				))}
			</Carousel>
		</div>
	);
};
