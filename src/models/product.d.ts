import { Comment } from "./comment";
import { Feature } from "./feature";
import { Spec } from "./spec";

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    thumbnail: string;
    images: string[];
    categoryId: string;
    rating: {
        rate: number;
        count: number;
    }
    stock: number;
    measureUnit: string;
    brand: string;
    features: Feature[];
    tags: string[];
    discount: number;
    discountExpire: string;
    specs: Spec[]
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
}