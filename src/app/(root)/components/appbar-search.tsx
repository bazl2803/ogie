import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '@/components';
import { css } from '@styled-system/css';

export const AppbarSearch = () => {
  return (
    <TextInput
      className={css({ smDown: { display: 'none' }, w: 480 })}
      leftSlot={<IconSearch />}
      placeholder="¿Qué estás buscando?"
      rightSlot={'Ctrl+K'}
    />
  );
};
