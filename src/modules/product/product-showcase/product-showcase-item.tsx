import Image from 'next/image';
import { sva } from '@styled-system/css';

// TODO: Use the Product type from the database
interface ProductShowcaseItemProps {
	product: { id: string | number; name: string; thumbnail: string };
}

const ProductShowcaseItemStyles = sva({
	className: 'ProductShowcaseItem',
	slots: ['root', 'image', 'image-container', 'label'],
	base: {
		root: { display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 2' },
		image: {
			//padding: '1rem',
			mixBlendMode: 'multiply',
		},
		'image-container': {
			width: '100%',
			height: 'auto',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'neutral.50',
			borderRadius: 'xl',
			aspectRatio: '1/1',
			overflow: 'hidden',
		},
		label: {
			fontSize: 'sm',
			WebkitLineClamp: 2,
			display: '-webkit-box',
			overflow: 'hidden',
		},
	},
});

export const ProductShowcaseItem = (props: ProductShowcaseItemProps) => {
	const { product } = props;
	const classes = ProductShowcaseItemStyles();

	return (
		<div
			className={classes.root}
			key={product.id}
		>
			<div className={classes['image-container']}>
				<Image
					className={classes.image}
					src={product.thumbnail || ''}
					alt={product.name}
					width={100}
					height={100}
				/>
			</div>
			<label
				className={classes.label}
				style={{ WebkitBoxOrient: 'vertical' }}
			>
				{product.name}
			</label>
		</div>
	);
};
