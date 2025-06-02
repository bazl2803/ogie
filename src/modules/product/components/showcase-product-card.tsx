import Image from 'next/image';
import { sva } from '@styled-system/css';
import { Product } from '@prisma/client';
import { Button } from '@/core/design-system';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { stack } from '@styled-system/patterns';

interface ProductsShowcaseItemProps {
	product: Product;
}

const ProductsShowcaseItemStyles = sva({
	className: 'ProductShowcaseItem',
	slots: ['root', 'image', 'thumbnail', 'name', 'price'],
	base: {
		root: { display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 4', rowGap: '0.25rem' },
		image: {
			mixBlendMode: 'multiply',
		},
		thumbnail: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: 'full',
			height: 'auto',
			aspectRatio: '1/1',
			borderRadius: 'xl',
			backgroundColor: 'neutral.50',
			overflow: 'hidden',
			transition: 'scale 0.25s',
			_hover: {
				scale: 1.05,
			},
		},
		name: {
			fontSize: 'medium',
			fontWeight: 700,
			WebkitLineClamp: 2,
			display: '-webkit-box',
			overflow: 'hidden',
			color: 'neutral.700',
		},
		price: {
			color: 'neutral.500',
			fontSize: 'sm',
			fontWeight: 500,
		},
	},
});

export const ProductShowcaseItem = (props: ProductsShowcaseItemProps) => {
	const { product } = props;
	const classes = ProductsShowcaseItemStyles();

	return (
		<div
			className={classes.root}
			key={product.id}
		>
			{/* Thumbnail */}
			<div className={classes.thumbnail}>
				<Image
					className={classes.image}
					src={product.thumbnail || ''}
					alt={product.name}
					width={100}
					height={100}
				/>
			</div>
			<span
				className={classes.name}
				style={{ WebkitBoxOrient: 'vertical' }}
			>
				{product.name}
			</span>

			{/* Price */}
			<div className={stack({ direction: 'row', gap: 1 })}>
				<span className={classes.price}>{`$${product.price.toFixed(2)}`}</span>
				{product.oldPrice && (
					<span
						className={classes.price}
						style={{ textDecoration: 'line-through' }}
					>
						{`$${product.oldPrice.toFixed(2)}`}
					</span>
				)}
			</div>

			<Button
				shape={'pill'}
				size={'sm'}
				icon={<IconShoppingCartPlus />}
			>
				Agregar al Carrito
			</Button>
		</div>
	);
};
