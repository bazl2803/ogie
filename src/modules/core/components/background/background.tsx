import Image from 'next/image';
import React from 'react';

export function Background({ className }: React.HTMLProps<HTMLImageElement>) {
	return (
		<Image
			className={className}
			src={'/background.png'}
			alt="houses"
			width={100}
			height={100}
			sizes={'(max-width: 768px) 100vw, 50vw'}
		/>
	);
}
