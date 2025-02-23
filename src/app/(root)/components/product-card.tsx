import { Card, Text } from '@/components';
import { stack } from '@styled-system/patterns';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
	name?: string;
	thumbnail?: string;
	price?: string;
	oldPrice?: string;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
	return (
		<Card>
			<Image
				src={props.thumbnail!}
				alt={props.thumbnail!}
			/>
			<h6>{props.name}</h6>

			<div className={stack({ direction: 'row', rowGap: 1 })}>
				<Text>{props.price}</Text>
				<Text>{props.oldPrice}</Text>
			</div>
		</Card>
	);
};
