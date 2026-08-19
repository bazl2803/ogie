import {Categories} from "@/app/_components/categories/categories";
import {Hero} from "@/app/_components/hero/hero";
import {
    bestSellersProducts,
    newProducts,
    ProductsShowcase,
    trendingProducts,
} from "@/features/product";

export default function Home() {
    return (
        <>
            <Hero/>
            <Categories/>
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
