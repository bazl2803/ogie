import { Carousel, CarouselItem, Title } from '@/modules/core/design-system';
import { stack } from '@styled-system/patterns';
import { CategoryCard } from './category-card';
import clsx from 'clsx';

export const CategoryList = () => {
	const categories = [
		{ title: 'Iluminación', image: '/spotlight.webp' },
		{ title: 'Tomacorrientes', image: '/outlet.jpeg' },
		{ title: 'Interruptores', image: '/switch.jpeg' },
		{ title: 'Dados', image: '/pole.webp' },
		{ title: 'Receptáculos', image: '/socket.jpeg' },
		{ title: 'Cables', image: '/wires.jpeg' },
		{ title: 'Canaletas', image: '/conduit.webp' },
		{ title: 'Herramientas', image: '/tools.webp' },
	];

	return (
		<div
			className={clsx(
				'categoriesList',
				stack({
					marginInline: 'auto',
					maxWidth: '1200px',
					width: 'full',
					paddingInline: '1rem',
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
				<Title level={6}>Categorias</Title>
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
