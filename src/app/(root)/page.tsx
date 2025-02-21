import { CategoryList } from './components/category-list';
import { Hero } from './components/hero';
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
