import { stack } from '@styled-system/patterns';
import { CategoryList } from './components/category-list';
import { Hero } from './components/hero';

export default function Home() {
	return (
		<div
			className={stack({
				width: '100%',
				rowGap: 8,
			})}
		>
			<Hero />
			<CategoryList />
		</div>
	);
}
