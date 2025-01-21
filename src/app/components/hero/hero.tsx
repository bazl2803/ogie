import { sva } from '@styled-system/css';

const HeroStyles = sva({
  slots: ['root', 'title', 'background'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'visible',
      width: '100%',
      height: { base: '25vh', sm: '35vh', md: '40vh', lg: '60vh' },
      userSelect: 'none',
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(at 80.7738814993954% 64.3312101910828%, #f5b3b3 0px, transparent 50%), radial-gradient(at 27.569528415961308% 32.48407643312102%, #c2cbff 0px, transparent 50%), radial-gradient(at 31.922611850060463% 69.2144373673036%, #faffd6 0px, transparent 50%), radial-gradient(at 67.23095525997581% 44.79830148619958%, #f5c2a5 0px, transparent 50%) #ffffff`,
      mixBlendMode: 'normal',
      filter: 'blur(50px)',
      zIndex: -1,
    },
    title: {
      position: 'relative',
      fontFamily: 'poppins',
      fontWeight: '700',
      fontStyle: 'normal',
      color: 'black/80',
      textWrap: 'pretty',
      fontSize: 'clamp(1.5rem, 5vw, 12rem)',
    },
  },
});

export const Hero = () => {
  const classes = HeroStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <h1 className={classes.title}>
        Lo que buscas,
        <br />
        lo encuentras aquí
      </h1>
    </div>
  );
};
