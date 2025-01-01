import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '../text-input/text-input';
import { css } from '@styled-system/css';

export const AppbarSearch = () => {
  return (
    <TextInput
      className={css({ smDown: { display: 'none' }, w: 480 })}
      leftslot={<IconSearch />}
      placeholder="¿Qué estás buscando?"
      rightslot={'Ctrl+K'}
    />
  );
};
