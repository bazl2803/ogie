'use client';
import React from 'react';
import { Product } from '@prisma/client';
import ProductsListItem from './products-list-item';

interface ProductsListProps {
	products: Product[];
}

export default function ProductsList({
	products,
}: ProductsListProps) {
	return (
		<ul>
			{products.map((product) => (
				<ProductsListItem
					key={product.id}
					product={product}
				/>
			))}
		</ul>
	);
}
