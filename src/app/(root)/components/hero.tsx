import { Title } from '@/components';
import { css } from '@styled-system/css';

// Styles
const HeroStyles = css({
	paddingInline: '4',
});

export const Hero = () => {
	return (
		<Title
			className={HeroStyles}
			level={1}
		>
			Soluciones Eléctricas
			<br /> para su Hogar <br />o Proyecto.
		</Title>
	);
};