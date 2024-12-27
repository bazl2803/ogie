import { css } from '@styled-system/css';

interface TitleProps {
  children: React.ReactNode;
}

const titleStyles = css({
  fontSize: 'lg',
  fontWeight: 'semibold',
  lineHeight: 'shorter',
});

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className={`${titleStyles}`}>{props.children}</div>
  );
};
