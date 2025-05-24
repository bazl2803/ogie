/* -------------------------------------------------------------------------
* Dependencies
---------------------------------------------------------------------------*/
import { ProductsPageHeader } from '@/modules/product/components/products-page/products-page-header';
import ProductsPageProductsList from '@/modules/product/components/products-page/products-page-products-list';
import { css } from '@styled-system/css';

/* -------------------------------------------------------------------------
 * Styles
---------------------------------------------------------------------------*/
const ProductPageStyles = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '4',
	padding: '4',
	height: '100vh',
});

/* -------------------------------------------------------------------------
 * Page
---------------------------------------------------------------------------*/
export default async function Page() {
	return (
		<div className={ProductPageStyles}>
			<ProductsPageHeader />
			<ProductsPageProductsList />
		</div>
	);
}
