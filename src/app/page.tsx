import { CategoryList } from '@/features/categories/category-list';
import { Hero } from './components/hero/hero';
import { Text } from '@/features/ui';
import { css } from '@styled-system/css';

export default function Home() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '6xl',
        margin: 'auto',
        paddingInline: 4,
      })}
    >
      <Hero />
      <CategoryList />
    </div>
  );
}
