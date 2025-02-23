import { css } from '@styled-system/css';
import Image from 'next/image';

export const AppbarLogo: React.FC = () => {
	return (
		<Image
			className={css({ mixBlendMode: 'multiply' })}
			src="/sumi_logo.jpg"
			alt="logo"
			height={60}
			width={110}
		/>
	);
};
