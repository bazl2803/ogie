import { Display } from '@/modules/core/design-system';
import { css } from '@styled-system/css';

// Styles
export const Hero = () => {
	return (
		<Display
			className={css({ maxWidth: '4xl', textWrap: 'balance' })}
			size="5xl"
		>
			Soluciones Eléctricas para su Hogar o Proyecto.
		</Display>
	);
};
