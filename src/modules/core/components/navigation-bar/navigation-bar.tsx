import { JSX } from 'react';
import { css, sva } from '@styled-system/css';
import { Appbar, Button } from '@/modules/core/design-system';
import { IconSearch, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import { SearchBox } from '../search-box/search-box';

/**
 * Styles
 */

const NavigationBarStyles = sva({
	slots: ['root', 'logo', 'search', 'actions'],
	base: {
		root: {
			backgroundColor: 'white',
			position: 'sticky',
			top: 0,
			zIndex: 100,
			height: '4rem'
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
			gap: '2',
		},
	},
});

/**
 * NavigationBar component
 * @returns {JSX.Element}
 */

export const NavigationBar = (): JSX.Element => {
	const classes = NavigationBarStyles();

	return (
		<Appbar className={classes.root}>
			<Appbar.Section className={classes.logo}>
				<Image
					className={css({ mixBlendMode: 'multiply' })}
					style={{ height: '2rem', width: 'auto' }}
					src="/sumi_logo.jpg"
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
					variant="secondary"
					shape="pill"
					size="md"
					icon={<IconSearch />}
				/>
				<Button
					variant="secondary"
					shape="pill"
					size="md"
					icon={<IconUser />}
				/>
			</Appbar.Section>
		</Appbar>
	);
};
