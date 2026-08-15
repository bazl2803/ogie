import Image from "next/image";
import "./product-card.scss";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "nuevo" | "oferta" | "recomendado" | string;
}

export const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  badge,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        {badge && <span className="product-card__badge">{badge}</span>}
        <Image
          className="product-card__image"
          src={image}
          alt={title}
          width={240}
          height={240}
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__price-wrapper">
          <span className="product-card__price">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          {originalPrice && (
            <span className="product-card__original-price">
              {originalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
