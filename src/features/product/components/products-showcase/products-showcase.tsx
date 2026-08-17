"use client";

import { type Variants, motion } from "framer-motion";
import type { Product } from "../../schemas/product.schema";
import { ProductCard } from "../product-card/product-card";
import "./products-showcase.scss";

interface ProductsShowcaseProps {
  title?: string;
  description?: string;
  products: Product[];
}

const showcaseVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const ProductsShowcase = ({
  title,
  description,
  products,
}: ProductsShowcaseProps) => {
  return (
    <motion.section
      className="products-showcase"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={showcaseVariants}
    >
      {(title || description) && (
        <motion.div
          className="products-showcase__header"
          variants={headerVariants}
        >
          <div className="products-showcase__header-info">
            {title && <h2 className="products-showcase__title">{title}</h2>}
            {description && (
              <p className="products-showcase__description">{description}</p>
            )}
          </div>
        </motion.div>
      )}
      <motion.div
        className="products-showcase__content"
        variants={showcaseVariants}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
            badge={product.badge}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
