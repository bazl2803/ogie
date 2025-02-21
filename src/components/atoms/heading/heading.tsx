import { cva } from '@styled-system/css';

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const HeadingStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '700',
	},
	variants: {},
});

export const Heading: React.FC<HeadingProps> = ({
	className,
	level,
	...rest
}) => {
	return (
		<div
			className={`${className} ${HeadingStyles({ level })}`}
			{...rest}
		/>
	);
};
