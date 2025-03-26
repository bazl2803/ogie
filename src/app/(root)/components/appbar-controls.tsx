import { Button } from '@/components';
import { IconShoppingCart, IconUser } from '@tabler/icons-react';
import { css } from '@styled-system/css';
import React from 'react';

interface AppbarControlsProps {
	className?: string;
}

const appbarControlsStyles = css({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: '2',
});

export const AppbarControls: React.FC<AppbarControlsProps> = (props) => {
	return (
		<div className={`${props.className} ${appbarControlsStyles}`}>
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
};
