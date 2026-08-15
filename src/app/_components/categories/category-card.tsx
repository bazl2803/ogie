import Image from "next/image";
import "./category-card.scss";

interface CategoryCardProps {
  imageUrl: string;
  categoryName: string;
}

export const CategoryCard = ({ imageUrl, categoryName }: CategoryCardProps) => {
  return (
    <div className="category-card" title={categoryName}>
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
    </div>
  );
};
