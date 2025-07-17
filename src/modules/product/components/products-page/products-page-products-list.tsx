'use server';
import React from 'react';
import { prisma } from '@/modules/core/lib/prisma';
import ProductsList from '../products-list';
import { css } from '@styled-system/css';

export default async function ProductsPageProductsList() {
	const data = await prisma.product.findMany({});

	return (
		<div
			className={css({
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexGrow: 1,
			})}
		>
			{data.length === 0 ? (
				<div>No hay productos</div>
			) : (
				<ProductsList products={data} />
			)}
		</div>
	);
}
