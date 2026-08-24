import { Hero } from "./_components/hero/hero";
import { Categories } from "./_components/categories/categories";
import {
    ProductsShowcase,
    trendingProducts,
    bestSellersProducts,
    newProducts,
} from "@/features/product";
import {Services} from "@/app/(storefront)/_components/services/services";

export default function Home() {
    return (
        <>
            <Hero />
            <Services/>
            <Categories />
            <ProductsShowcase
                title="Más Vendidos"
                description="Los productos favoritos y más solicitados por nuestros clientes"
                products={bestSellersProducts}
            />
            <ProductsShowcase
                title="Tendencias"
                description="Lo más destacado y popular en suministros eléctricos y tecnología"
                products={trendingProducts}
            />
            <ProductsShowcase
                title="Nuevos Productos"
                description="Descubre los últimos artículos y novedades agregadas a nuestro catálogo"
                products={newProducts}
            />
        </>
    );
}
