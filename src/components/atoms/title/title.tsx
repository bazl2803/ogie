import { cva } from '@styled-system/css';
import clsx from 'clsx';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TitleStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '600',
		lineHeight: 'tight',
	},
	variants: {
		level: {
			1: { fontSize: '2rem' },
			2: { fontSize: '1.786rem' },
			3: { fontSize: '1.571rem' },
			4: { fontSize: '1.429rem' },
			5: { fontSize: '1.286rem' },
			6: { fontSize: '1.143rem' },
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
			className={clsx(classes)}
			{...rest}
		/>
	);
};
