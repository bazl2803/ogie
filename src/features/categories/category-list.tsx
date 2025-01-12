import { Carousel, CarouselItem } from '../ui';

import { CategoryCard } from './category-card';
import { Title } from '../ui/title/title';
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
      <Title variant={'display-large'}>Categorias</Title>

      <Carousel>
        {categories.map((category) => (
          <CarouselItem key={category}>
            <CategoryCard displayName={category} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};
