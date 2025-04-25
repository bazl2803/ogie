import { Button, Card, Title } from '@/modules/core/design-system';
import { sva } from '@styled-system/css';
import { ProductShowcaseItem } from './product-showcase-item';
import clsx from 'clsx';
import { flex } from '@styled-system/patterns';

/**
 * Props
 */
interface ProductShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	products: { id: string | number; name: string; thumbnail: string }[];
}

const ProductShowcaseStyles = sva({
	className: 'ProductShowcase',
	slots: ['root', 'products'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			rowGap: '1rem',
		},
		products: {
			display: 'grid',
			gridTemplateColumns: { base: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)' },
			gridTemplateRows: '200px auto',
			alignItems: 'start',
			gap: '0.25rem 1rem',
		},
	},
});

/**
 * Display a card with several products.
 * @param props
 * @constructor
 */

export const ProductShowcase = (props: ProductShowcaseProps) => {
	const { className, title, products } = props;
	const classes = ProductShowcaseStyles();

	return (
		<Card className={clsx(classes.root, className)}>
			<div
				className={flex({
					direction: 'row',
					wrap: 'nowrap',
					justify: 'space-between',
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
