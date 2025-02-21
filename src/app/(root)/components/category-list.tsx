import { Button, Carousel, CarouselItem } from '@/components';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { CategoryCard } from './category-card';
import { stack } from '@styled-system/patterns';

export const CategoryList = () => {
	const categories = [
		'Electrodómesticos',
		'Ropa',
		'Muebles',
		'Cocina',
		'Oficina',
		'Exterior',
		'Mascotas',
		'Calzado',
		'Tecnología',
		'Herramientas',
		'Juguetes',
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
				<h3>Categorias</h3>

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
				{categories.map((category) => (
					<CarouselItem key={category}>
						<CategoryCard title={category} />
					</CarouselItem>
				))}
			</Carousel>
		</div>
	);
};
