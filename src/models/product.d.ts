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
    comments: {
        userId: string;
        comment: string;
        rating: number;
        createdAt: string;
        updatedAt: string;
    }
    createdAt: string;
    updatedAt: string;
}