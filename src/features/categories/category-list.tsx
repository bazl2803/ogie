import { Carousel } from '../ui/carousel/carousel';
import { CarouselItem } from '../ui/carousel/carousel-item';
import { CategoryCard } from './category-card';
import { Title } from '../ui/title/title';
import { stack } from '@styled-system/patterns';

export const CategoryList = () => {
  return (
    <div className={stack()}>
      <Title>Categorias</Title>
      <Carousel>
        <CarouselItem>
          <CategoryCard displayName="Electrodómesticos" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Ropa" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Muebles" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Cocina" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Oficina" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Exterior" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Mascotas" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Calzado" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Tecnología" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Herramientas" />
        </CarouselItem>
        <CarouselItem>
          <CategoryCard displayName="Juguetes" />
        </CarouselItem>
      </Carousel>
    </div>
  );
};
