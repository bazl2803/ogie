import Table from '@/modules/core/design-system/table/table';
import { Product } from '@prisma/client';
import { sva } from '@styled-system/css';
import React from 'react';

interface ProductsTableProps {
	products: Product[];
}

const ProductPageStyles = sva({
	slots: ['root', 'th'],
	base: {
		root: {},
		th: {
			fontSize: 'sm',
			fontWeight: '600',
			textAlign: 'left',
			paddingBlock: '2',
		},
	},
});

export default function ProductsTable({ products }: ProductsTableProps) {
	const styles = ProductPageStyles();

	return (
		<Table>
			<thead>
				<tr>
					<th className={styles.th}>Sku</th>
					<th className={styles.th}>Name</th>
					<th className={styles.th}>Price</th>
					<th className={styles.th}>Stock</th>
					<th className={styles.th}>Status</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<tr key={product.id}>
						<td>{product.thumbnail}</td>
						<td>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.stock}</td>
						<td>{product.status}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
