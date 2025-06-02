'use client';
import { Button, Card, Title } from '@/core/design-system';
import { sva } from '@styled-system/css';
import { ProductShowcaseItem } from './showcase-product-card';
import clsx from 'clsx';
import { flex } from '@styled-system/patterns';
import { Product } from "@prisma/client";

/**
 * Props
 */
interface ProductsShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	products: Product[];
}

/**
 * Styles
 */
const ProductsShowcaseStyles = sva({
	className: 'ProductShowcase',
	slots: ['root', 'products'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			rowGap: '0.25rem',
		},
		products: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))',
			alignItems: 'start',
			gap: '2rem',
		},
	},
});

/**
 * Display a card with several products.
 * @param props
 * @constructor
 */

export const ProductsShowcase = (props: ProductsShowcaseProps) => {
	const { className, title, products } = props;
	const classes = ProductsShowcaseStyles();

	return (
		<Card className={clsx(classes.root, className)}>
			<div
				className={flex({
					direction: 'row',
					wrap: 'nowrap',
					justify: 'space-between',
					align: 'center',
				})}
			>
				<Title level={6}>{title}</Title>
				<Button variant="text">Ver más</Button>
			</div>

			<div className={classes.products}>
				{products.map((product) => (
					<ProductShowcaseItem
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</Card>
	);
};
