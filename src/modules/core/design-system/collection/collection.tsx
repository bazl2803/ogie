'use client';

import { stack } from '@styled-system/patterns';
import { Display } from '../display';
import { CollectionStyles } from './collection.styles';
import { Button } from '../button';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRef } from 'react';

interface CollectionProps {
	title?: string;
}

export const Collection = (props: CollectionProps) => {
	const styles = CollectionStyles();
	const contentTrail = useRef<HTMLDivElement>(null);

	// Scroll function with direction parameter
	const scrollTrail = (direction: 'left' | 'right') => {
		if (!contentTrail.current) return;

		const scrollAmount = direction === 'left' ? -200 : 200;
		contentTrail.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
	};

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Display>{props.title}</Display>
				<div className={stack({ direction: 'row', gap: 4 })}>
					<Button
						shape="pill"
						icon={<IconChevronLeft size={16} />}
						onClick={scrollTrail.bind(null, 'left')}
					/>
					<Button
						shape="pill"
						icon={<IconChevronLeft size={16} />}
						onClick={scrollTrail.bind(null, 'right')}
					/>
				</div>
			</div>
			<div
				ref={contentTrail}
				className={styles.content}
			></div>
		</div>
	);
};
