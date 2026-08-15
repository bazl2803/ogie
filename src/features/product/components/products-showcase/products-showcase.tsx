import type { Product } from "../../schemas/product.schema";
import { ProductCard } from "../product-card/product-card";
import "./products-showcase.scss";

interface ProductsShowcaseProps {
  title?: string;
  description?: string;
  products: Product[];
}

export const ProductsShowcase = ({
  title,
  description,
  products,
}: ProductsShowcaseProps) => {
  return (
    <section className="products-showcase">
      {(title || description) && (
        <div className="products-showcase__header">
          <div className="products-showcase__header-info">
            {title && <h2 className="products-showcase__title">{title}</h2>}
            {description && (
              <p className="products-showcase__description">{description}</p>
            )}
          </div>
        </div>
      )}
      <div className="products-showcase__content">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
};
