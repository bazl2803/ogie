import { Display } from '@/modules/core/design-system';
import { css } from '@styled-system/css';

// Styles
const HeroStyles = css({
	paddingInline: '4',
});

export const Hero = () => {
	return (
		<Display className={HeroStyles} size="4xl">
			Soluciones Eléctricas
			<br /> para su Hogar <br />o Proyecto.
		</Display>
	);
};
