import { css } from '@styled-system/css';
import { Hero } from './hero';
import { MainAppbar } from './main-appbar';
import { SearchBox } from './search-box';

const HeaderStyles = css({
	display: 'flex',
	flexDirection: 'column',
	rowGap: '4',
});

export const Header = () => {
	return (
		<header className={HeaderStyles}>
			<MainAppbar />
			<Hero />
			<SearchBox />
		</header>
	);
};
