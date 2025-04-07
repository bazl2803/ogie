import { Display } from '@/components';
import { css } from '@styled-system/css';

// Styles
const HeroStyles = css({
	paddingInline: '4',
});

export const Hero = () => {
	return (
		<Display className={HeroStyles}>
			Soluciones Eléctricas
			<br /> para su Hogar <br />o Proyecto.
		</Display>
	);
};
