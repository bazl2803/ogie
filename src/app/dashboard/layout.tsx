export const metadata = {
	title: 'Ogie | Dashboard',
	description: 'Dashboard page',
};

interface Props {
	children: React.ReactNode;
}

export default function DashboardLayout(props: Readonly<Props>) {
	return (
		<html>
			<body>{props.children}</body>
		</html>
	);
}
