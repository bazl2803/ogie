"use client";

import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import "./category-card.scss";

interface CategoryCardProps {
  imageUrl: string;
  categoryName: string;
  variants?: Variants;
}

const defaultCardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const CategoryCard = ({
  imageUrl,
  categoryName,
  variants = defaultCardVariants,
}: CategoryCardProps) => {
  return (
    <motion.div
      className="category-card"
      aria-label={categoryName}
      variants={variants}
      whileHover={{
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="category-card-image-wrapper">
        <Image
          src={imageUrl}
          alt={categoryName}
          className="category-card-image"
          width={256}
          height={256}
        />
      </div>
      <p className="category-card-name">
        <span>{categoryName}</span>
      </p>
    </motion.div>
  );
};
