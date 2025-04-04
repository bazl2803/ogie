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
			1: { fontSize: '1.938rem' },
			2: { fontSize: '1.563rem' },
			3: { fontSize: '1.25rem' },
			4: { fontSize: '1.25rem' },
			5: { fontSize: '1.25rem' },
			6: { fontSize: '1.25rem' },
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
