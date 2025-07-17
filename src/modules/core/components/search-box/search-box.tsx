import { TextInput } from '@/modules/core/design-system';
import { css } from '@styled-system/css';
import { IconSearch } from '@tabler/icons-react';
import { clsx } from 'clsx';

export const SearchBox = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx(
				css({
					height: '2.5rem',
					'& input': {
						width: 'full',
						height: 'full',
					},
				}),
				className
			)}
		>
			<TextInput
				className={css({ width: 'full', height: 'full' })}
				leftSlot={<IconSearch fontWeight={600} />}
				placeholder="¿Qué desea encontrar?"
			/>
		</div>
	);
};
