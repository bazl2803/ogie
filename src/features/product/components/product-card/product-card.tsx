"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import "./product-card.scss";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "nuevo" | "oferta" | "recomendado" | string;
  variants?: Variants;
}

const defaultCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  badge,
  variants = defaultCardVariants,
}: ProductCardProps) => {
  return (
    <motion.div
      className="product-card"
      variants={variants}
      whileHover={{
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="product-card__image-container">
        {badge && (
          <motion.span
            className="product-card__badge"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {badge}
          </motion.span>
        )}
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
    </motion.div>
  );
};
