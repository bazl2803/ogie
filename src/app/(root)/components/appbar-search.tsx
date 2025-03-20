import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';
import { css } from '@styled-system/css';

export const AppbarSearch = () => {
	return (
		<TextInput
			className={css({
				w: { base: '100%', md: 80, lg: '1/2' },
				order: { base: 2, md: 0 },
				flexGrow: { mdDown: 1 },
			})}
			leftSlot={<IconSearch />}
			placeholder="¿Qué estás buscando?"
			rightSlot={'Ctrl+K'}
		/>
	);
};
