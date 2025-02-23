import { stack } from '@styled-system/patterns';
import { CategoryList } from './components/category-list';
import { Hero } from './components/hero';

export default function Home() {
	return (
		<div
			className={stack({
				maxWidth: '6xl',
				width: '100%',
				marginInline: 'auto',
				rowGap: 8,
			})}
		>
			<Hero />
			<CategoryList />
		</div>
	);
}
