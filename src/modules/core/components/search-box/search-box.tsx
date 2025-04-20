import { TextInput } from '@/modules/core/design-system';
import { css } from '@styled-system/css';
import { IconSearch } from '@tabler/icons-react';

export const SearchBox = () => {
	return (
		<div
			className={css({
				maxWidth: '28rem',
				width: '28rem',
				height: '2.5rem',
				'& input': {
					width: 'full',
					height: 'full',
				},
			})}
		>
			<TextInput
				className={css({ width: 'full', height: 'full' })}
				leftSlot={<IconSearch fontWeight={600} />}
				placeholder="¿Qué desea encontrar?"
			/>
		</div>
	);
};
