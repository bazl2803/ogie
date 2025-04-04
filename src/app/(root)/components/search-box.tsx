import { TextInput } from '@/components';
import { css } from '@styled-system/css';
import { IconSearch } from '@tabler/icons-react';

export const SearchBox = () => {
	return (
		<div
			className={css({
				marginInline: '4',
			})}
		>
			<TextInput
				leftSlot={<IconSearch fontWeight={600} />}
				placeholder="¿Qué desea encontrar?"
			/>
		</div>
	);
};
