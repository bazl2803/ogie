import { Avatar } from '../avatar';
import { Button } from '../button';
import { IconShoppingCart } from '@tabler/icons-react';
import { css } from '@styled-system/css';

interface AppbarControlsProps {
  className?: string;
}

const appbarControlsStyles = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '2',
});

export const AppbarControls: React.FC<
  AppbarControlsProps
> = (props) => {
  return (
    <div
      className={`${props.className} ${appbarControlsStyles}`}
    >
      <Button variant="secondary" shape="pill" size="md">
        <IconShoppingCart />
        Carrito
      </Button>
      <Avatar>BL</Avatar>
    </div>
  );
};
