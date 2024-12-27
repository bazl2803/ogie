import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '../../../features/ui/text-input/text-input';
import { css } from '@styled-system/css';

export const AppbarSearch = () => {
  return (
    <TextInput
      className={css({ smDown: { display: 'none' }, w: 560 })}
      leftslot={<IconSearch />}
      placeholder="Buscar"
      rightslot={'Ctrl+K'}
    />
  );
};
