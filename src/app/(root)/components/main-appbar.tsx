import { Appbar, Button, TextInput } from '@/components';
import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';
import { IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

/*
 * Logo component
 */
const Logo = () => (
	<Image
		className={css({ mixBlendMode: 'multiply' })}
		style={{ height: '32px', width: 'auto' }}
		src="/sumi_logo.jpg"
		alt="logo"
		width={100}
		height={100}
	/>
);

/*
 * Search input component
 */
const SearchInput = () => (
	<TextInput
		className={css({
			w: { base: '100%', md: 80, lg: '1/3' },
			order: { base: 2, md: 0 },
			flexGrow: { mdDown: 1 },
		})}
		leftSlot={<IconSearch />}
		placeholder="¿Qué estás buscando?"
	/>
);

/*
 * Buttons component
 */
const Buttons = () => (
	<div className={stack({ direction: 'row' })}>
		<Button
			variant="outline"
			shape="pill"
			size="md"
			icon={<IconShoppingCart />}
			icon-position={'left'}
		/>

		<Button
			variant="outline"
			shape="pill"
			size="md"
			icon={<IconUser />}
		/>
	</div>
);

/*
 * Main Appbar component
 */
export const MainAppbar = () => {
	return (
		<Appbar>
			<Appbar.Section>
				<Logo />
			</Appbar.Section>
			<Appbar.Section>
				<SearchInput />
			</Appbar.Section>
			<Appbar.Section>
				<Buttons />
			</Appbar.Section>
		</Appbar>
	);
};
