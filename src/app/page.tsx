import { CategoryList } from '@/features/categories/category-list';
import { css } from '@styled-system/css';

export default function Home() {
  return (
    <div
      className={css({
        maxWidth: '6xl',
        margin: 'auto',
        paddingInline: 4,
      })}
    >
      <CategoryList />
    </div>
  );
}
