import { css } from '@styled-system/css';
import Image from 'next/image';

const FooterStyles = css({
	display: 'grid',
	backgroundColor: '#0f2e51',
	padding: 4,
});

export function Footer() {
	return (
		<footer className={FooterStyles}>
			<div className={css({ maxWidth: '6xl', width: 'full', margin: 'auto' })}>
				<Image
					src={'/logo.jpg'}
					alt="footer_logo"
					width={100}
					height={100}
				/>
			</div>
		</footer>
	);
}
