import { cva } from '@styled-system/css';
import clsx from 'clsx';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
	level?: 1 | 2 | 3;
}

const TitleStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '700',
	},
	variants: {
		level: {
			1: { fontSize: '1.938rem' },
			2: { fontSize: '1.563rem' },
			3: { fontSize: '1.25rem' },
		},
	},
	defaultVariants: {
		level: 1,
	},
});

export const Title: React.FC<TitleProps> = ({ className, level, ...rest }) => {
	const classes = clsx(TitleStyles({ level }), className);
	return (
		<div
			className={classes}
			{...rest}
		/>
	);
};
