import { Button, Carousel, CarouselItem } from '@/components';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { CategoryCard } from './category-card';
import { stack } from '@styled-system/patterns';
import { Title } from '@/components/atoms/title/title';

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
		<div className={stack()}>
			<div
				className={stack({
					direction: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				})}
			>
				<Title level={3}>Categorias</Title>

				<div className={stack({ direction: 'row' })}>
					<Button
						variant="secondary"
						shape="pill"
					>
						<IconChevronLeft />
					</Button>

					<Button
						variant="secondary"
						shape="pill"
					>
						<IconChevronRight />
					</Button>
				</div>
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
