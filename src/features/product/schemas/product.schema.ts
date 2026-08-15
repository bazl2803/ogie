import z from "zod";

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  category: z.string(),
  badge: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  slug: z.string(),
});

const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  slug: true,
});

const UpdateProductSchema = ProductSchema.partial();

const DeleteProductSchema = ProductSchema.pick({
  id: true,
});

export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
export type DeleteProduct = z.infer<typeof DeleteProductSchema>;
