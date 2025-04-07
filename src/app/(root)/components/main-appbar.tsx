import { Appbar, Button } from '@/components';
import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';
import { IconUser } from '@tabler/icons-react';
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
 * Buttons component
 */
const Buttons = () => (
	<div className={stack({ direction: 'row' })}>
		<Button
			variant="secondary"
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
				<Buttons />
			</Appbar.Section>
		</Appbar>
	);
};
