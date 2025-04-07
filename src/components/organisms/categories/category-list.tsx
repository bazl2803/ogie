import { Carousel, CarouselItem, Title } from '@/components';
import { stack } from '@styled-system/patterns';
import { CategoryCard } from './category-card';

export const CategoryList = () => {
	const categories = [
		{ title: 'Iluminación', image: '/spotlight.webp' },
		{ title: 'Interruptores', image: '/switch.jpeg' },
		{ title: 'Tomacorrientes', image: '/outlet.jpeg' },
		{ title: 'Receptáculos', image: '/socket.jpeg' },
		{ title: 'Cables', image: '/wires.jpeg' },
		{ title: 'Dados', image: '/pole.webp' },
		{ title: 'Canaletas', image: '/conduit.webp' },
		{ title: 'Herramientas', image: '/tools.webp' },
	];

	return (
		<div className={stack({ marginInline: '16px' })}>
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
							title={category.title}
							imageUrl={category.image}
						/>
					</CarouselItem>
				))}
			</Carousel>
		</div>
	);
};
