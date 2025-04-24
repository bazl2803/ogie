import { stack } from '@styled-system/patterns';
import { CategoryList } from '@/modules/category/category-list';
import { Hero } from '@/modules/core/components/hero/hero';
import { ProductShowcase } from '@/modules/product/product-showcase/product-showcase';
import { css } from '@styled-system/css';

export default function Home() {
	const products = [
		{
			id: 1,
			name: 'Producto 1',
			thumbnail: '/product1.jpg',
		},
		{
			id: 2,
			name: 'Producto 2',
			thumbnail: '/product2.jpg',
		},
		{
			id: 3,
			name: 'Producto 3',
			thumbnail: '/product3.jpg',
		},
		{
			id: 4,
			name: 'Producto 4',
			thumbnail: '/product4.jpg',
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
						maxWidth: '1200px',
						marginInline: 'auto',
						gap: 8,
					})}
				>
					<ProductShowcase
						products={[...products]}
						title={'Mas Vendidos'}
					/>
					<ProductShowcase
						products={[...products]}
						title={'Tedencias'}
					/>
					<ProductShowcase
						products={[...products]}
						title={'Recien Llegados'}
					/>
				</div>
			</div>
		</>
	);
}
