import { Carousel, CarouselItem } from '../../features/ui';

import { CategoryCard } from './category-card';
import { Title } from '../../features/ui/title/title';
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
      <Title variant={'title-small'}>Categorias</Title>

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
