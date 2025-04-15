import { css } from '@styled-system/css';

interface AvatarProps {
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const avatarStyles = css({
  borderRadius: 'full',
  overflow: 'clip',
  backgroundColor: 'neutral.100',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'md',
  fontWeight: 'semibold',
  color: 'neutral.950',
  textWrap: 'nowrap',
  userSelect: 'none',
});

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div className={avatarStyles}>{props.children}</div>
  );
};
