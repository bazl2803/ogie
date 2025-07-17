import { sva } from '@styled-system/css';
import { Appbar, Button } from '@/modules/core/design-system';
import { IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import { Input } from '@/modules/core/design-system/input/input';

/**
 * Styles
 */

const NavigationBarStyles = sva({
	slots: ['root', 'container', 'logo', 'search', 'actions'],
	base: {
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'sticky',
			backgroundColor: '#283b6d',
			top: 0,
			zIndex: 1000,
		},
		container: {
			padding: '1rem',
			width: 'full',
		},
		logo: {
			width: 'auto',
			height: 'auto',
			mixBlendMode: 'lighten',
		},
		search: {
			display: { base: 'none', md: 'inline' },
			width: '30vw',
		},
		actions: {
			display: 'flex',
			direction: 'row',
			gap: '1rem',
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
						style={{ height: '2.5rem', width: 'auto' }}
						src="/logo.jpg"
						alt="logo"
						width={100}
						height={100}
					/>
				</Appbar.Section>

				<Appbar.Section className={classes.search}>
					<Input
						placeholder={'¿Qué desea encontrar?'}
						leftSlot={<IconSearch size={16} />}
					/>
				</Appbar.Section>

				<Appbar.Section className={classes.actions}>
					<Button
						variant="text"
						icon={<IconUser />}
					>
						Cuenta
					</Button>

					<Button
						variant="text"
						icon={<IconShoppingCart />}
					/>
				</Appbar.Section>
			</Appbar>
		</div>
	);
}
