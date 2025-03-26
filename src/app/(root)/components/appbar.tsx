import { AppbarControls } from './appbar-controls';
import { AppbarLogo } from './appbar-logo';
import { AppbarSearch } from './appbar-search';
import clsx from 'clsx';
import { sva } from '@styled-system/css';

interface AppbarProps {
	ref?: React.Ref<HTMLDivElement>;
}

const appbarStyles = sva({
	className: 'lukas-appbar',
	slots: ['root', 'content'],
	base: {
		root: {
			position: 'sticky',
			top: 0,
			zIndex: 1000,
			backgroundColor: 'neutral.50',
			backdropFilter: 'blur(8px)',
			paddingInline: {
				base: 4,
				md: 8,
				lg: 12,
			},
		},
		content: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			alignItems: 'center',
			maxWidth: '6xl',
			margin: 'auto',
			paddingBlock: 4,
			gap: 4,
		},
	},
});

export const Appbar: React.FC<AppbarProps> = (props) => {
	const classes = appbarStyles();

	return (
		<div
			ref={props.ref}
			className={classes.root}
		>
			<div className={clsx(classes.content)}>
				<AppbarLogo />
				<AppbarSearch />
				<AppbarControls />
			</div>
		</div>
	);
};
