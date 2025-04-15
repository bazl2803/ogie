import { stack } from '@styled-system/patterns';
import { CategoryList } from '@/modules/category/category-list';

export default function Home() {
	return (
		<div
			className={stack({
				width: '100%',
				rowGap: 8,
			})}
		>
			<CategoryList />
		</div>
	);
}
