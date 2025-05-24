import { Product } from '@prisma/client';
import { sva } from '@styled-system/css';
import React from 'react';
import Image from 'next/image';
import { Card } from '@/modules/core/design-system';
import { ListboxItem } from '@/modules/core/design-system/listbox/listbox-item';

interface ProductsListItemProps {
	product: Partial<Product>;
}

const ProductsListItemStyles = sva({
	slots: ['root', 'thumbnail', 'title', 'price', 'controls'],
	base: {
		root: {
			display: 'grid',
			gridTemplateColumns: '100px 1fr 1fr 1fr',
		},
		controls: {
			display: 'none',
		},
	},
});

export default function ProductsListItem({ product }: ProductsListItemProps) {
	const styles = ProductsListItemStyles();

	return (
		<ListboxItem>
			<Card className={styles.root}>
				<Image
					className={styles.thumbnail}
					src={product.thumbnail!}
					alt={product.thumbnail!}
					width={100}
					height={100}
				/>

				<div className={styles.title}>{product.name}</div>
				<div className={styles.price}>
					{product.price!.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</div>

				<div className={styles.controls}>
					<button>Edit</button>
					<button>Delete</button>
					<button>View</button>
				</div>
			</Card>
		</ListboxItem>
	);
}
