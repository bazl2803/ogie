import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';
import { css } from '@styled-system/css';

export const AppbarSearch = () => {
    return (
        <TextInput
            className={css({ w: 480, order: 1, flexGrow: 1 })}
            leftSlot={<IconSearch/>}
            placeholder="¿Qué estás buscando?"
            rightSlot={'Ctrl+K'}
        />
    );
};
