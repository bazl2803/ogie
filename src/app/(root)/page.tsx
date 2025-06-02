import { stack } from '@styled-system/patterns';
import { CategoryList } from '@/modules/category/category-list';
import { Hero } from '@/core/components/hero/hero';
import { css } from '@styled-system/css';
import { ProductsShowcase } from '@/modules/product/components/showcase';
import { Product } from '@prisma/client';

export default function Home() {
	const products: Product[] = [
		{
			id: 1,
			name: 'Tomacorriente doble gfci 125 V 15 A negro eagle línea plata',
			thumbnail:
				'https://sv.epaenlinea.com/media/catalog/product/cache/e28d833c75ef32af78ed2f15967ef6e0/9/4/94af70e3-352d-4a2b-9abb-b82761c0bd11.jpg',
			price: 23.02,
			stock: 0,
			status: '',
			description: 'fsdfdsa',
			brandId: 1,
			categoryId: 1,
			oldPrice: 32.0,
		},
		{
			id: 2,
			name: 'Cable TSJ 3 x 2 mm (12 AWG) Viakon 600 V',
			thumbnail:
				'https://sv.epaenlinea.com/media/catalog/product/cache/e28d833c75ef32af78ed2f15967ef6e0/1/a/1ab0e140-cc3a-4b19-9e93-7d8681fe93fa.jpg',
			price: 1.04,
			stock: 0,
			status: '',
			description: 'fsdfdsa',
			brandId: 1,
			categoryId: 1,
			oldPrice: 32.0,
		},
		{
			id: 3,
			name: 'Breaker 2 polos 50 A THQL 2150 GE',
			thumbnail:
				'https://sv.epaenlinea.com/media/catalog/product/cache/98c6f527796018ffa7e6361fde2fdd6f/3/1/312a5c21-8fcc-41ed-aebc-082d8b436d62.jpg',
			price: 25.56,
			stock: 0,
			status: '',
			description: 'fsdfdsa',
			brandId: 1,
			categoryId: 1,
			oldPrice: 32.0,
		},
		{
			id: 5,
			name: 'Lámpara colgante moderna negro 3 luces e27 21268',
			thumbnail:
				'https://sv.epaenlinea.com/media/catalog/psroduct/cache/e28d833c75ef32af78ed2f15967ef6e0/9/c/9ccefc86-cd42-43c1-bd73-bf8ba834e561.jpg',
			price: 82.24,
			stock: 0,
			status: '',
			description: 'fsdfdsa',
			brandId: 1,
			categoryId: 1,
			oldPrice: 32.0,
		},
		{
			id: 6,
			name: 'Bombillo LED 15 W e27 A60 luz blanca Sylvania',
			thumbnail:
				'https://sv.epaenlinea.com/media/catalog/product/cache/e28d833c75ef32af78ed2f15967ef6e0/3/f/3f78f4c8-0f1a-42e5-bd4f-9f1cfabf7699.jpg',
			price: 0.82,
			stock: 0,
			status: '',
			description: 'fsdfdsa',
			brandId: 1,
			categoryId: 1,
			oldPrice: 32.0,
		},
	];

	return (
		<>
			<Hero />
			<div
				className={stack({
					width: '100%',
					rowGap: 8,
				})}
			>
				<CategoryList />

				<div
					className={css({
						display: 'grid',
						paddingInline: '1rem',
						gridTemplateColumns: {
							base: 'repeat(4, 1fr)',
							md: 'repeat(8, 1fr)',
							lg: 'repeat(12, 1fr)',
						},
						width: 'full',
						maxWidth: '6xl',
						marginInline: 'auto',
						gap: '3rem',
					})}
				>
					{/*Most selled products showcase*/}
					<ProductsShowcase
						className={css({
							gridColumn: { base: 'span 4', sm: 'span 12' },
						})}
						products={[...products]}
						title={'Más Vendidos'}
					/>

					{/*Trending products showcase*/}
					<ProductsShowcase
						className={css({
							gridColumn: { base: 'span 4', sm: 'span 12' },
						})}
						products={[...products]}
						title={'Tendencias'}
					/>

					{/*New products showcase*/}
					<ProductsShowcase
						className={css({
							gridColumn: { base: 'span 4', sm: 'span 12' },
						})}
						products={[...products]}
						title={'Recien Llegados'}
					/>
				</div>
			</div>
		</>
	);
}
