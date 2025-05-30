import { css, sva } from '@styled-system/css';
import { Appbar, Button } from '@/modules/core/design-system';
import { IconShoppingCart, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import { SearchBox } from '../search-box/search-box';
import { stack } from '@styled-system/patterns';

/**
 * Styles
 */

const NavigationBarStyles = sva({
	slots: ['root', 'container', 'logo', 'search', 'actions'],
	base: {
		root: {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: '#142c4f',
			position: 'sticky',
			top: 0,
			zIndex: 100,
			height: '4rem',
		},
		container: {
			padding: '1rem',
			maxWidth: '6xl',
		},
		logo: {
			width: 'auto',
		},
		search: {
			display: { base: 'none', md: 'inline' },
		},
		actions: {
			display: 'flex',
			direction: 'row',
			gap: '1rem',
			color: 'white',
		},
	},
});

/**
 * NavigationBar component
 */
export function NavigationBar() {
	const classes = NavigationBarStyles();

	return (
		<div className={classes.root}>
			<Appbar className={classes.container}>
				<Appbar.Section className={classes.logo}>
					<Image
						style={{ height: '2rem', width: 'auto' }}
						src="/sumi.jpg"
						alt="logo"
						width={100}
						height={100}
					/>
				</Appbar.Section>

				<Appbar.Section className={classes.search}>
					<SearchBox />
				</Appbar.Section>

				<Appbar.Section className={classes.actions}>
					<Button
						variant="text"
						size="lg"
						icon={<IconShoppingCart />}
					>
						<div className={stack({ alignItems: 'start', fontSize: 'xs', gap: 0 })}>
							<span className={css({ fontWeight: 'bold' })}>Carrito</span>
							<span>$0.00</span>
						</div>
					</Button>
					<Button
						variant="text"
						size="lg"
						icon={<IconUser />}
					>
						<div className={stack({ alignItems: 'start', fontSize: 'xs', gap: 0 })}>
							<span className={css({ fontWeight: 'bold' })}>Bienvenido,</span>
							<span>¡Registrate Ya!</span>
						</div>
					</Button>
				</Appbar.Section>
			</Appbar>
		</div>
	);
}
