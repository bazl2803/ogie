import Link from 'next/link';

export default function DashboardPage() {
	return (
		<div>
			<h1>Dashboard</h1>
			<p>This is the dashboard page.</p>

			<Link href="/manage/products">
				<h2>Products</h2>
			</Link>
		</div>
	);
}
