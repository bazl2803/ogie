import React from 'react';
import DrawerStyles from './drawer.styles';
import { useDrawerContext } from './drawer-context';

export function DrawerSheet() {
	const { open } = useDrawerContext();

	const styles = DrawerStyles({ open });
	return <div className={styles.sheet}>DrawerSheet</div>;
}
