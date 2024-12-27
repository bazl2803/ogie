import { Poppins } from 'next/font/google';
import { css } from '@styled-system/css';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const appbarLogoStyles = css({
  fontFamily: poppins.style.fontFamily,
  fontStyle: poppins.style.fontStyle,
  fontWeight: poppins.style.fontWeight,
  userSelect: 'none',
  fontSize: '2xl',
  color: 'neutral.950',
  textDecoration: 'none',
  textWrap: 'nowrap',
});

export const AppbarLogo: React.FC = () => {
  return (
    <span
      className={`${poppins.className} ${appbarLogoStyles}`}
    >
      Ogie
    </span>
  );
};
