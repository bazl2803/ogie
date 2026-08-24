"use client";

import {Button, Carousel, CarouselItem} from "@/components";
import {type Variants, motion} from "framer-motion";
import "./categories.scss";
import {CategoryCard} from "./category-card";

const baseUrl = "/assets/categories/";

const categories = [
    {id: 1, name: "Iluminación", imageUrl: `${baseUrl}iluminacion.webp`},
    {id: 2, name: "Dados", imageUrl: `${baseUrl}breaker.webp`},
    {id: 3, name: "Cables", imageUrl: `${baseUrl}cables.webp`},
    {id: 4, name: "Herramientas", imageUrl: `${baseUrl}alicate.webp`},
    {id: 5, name: "Plaquería", imageUrl: `${baseUrl}plaqueria.webp`},
    {id: 6, name: "Terminales", imageUrl: `${baseUrl}terminal.webp`},
    {id: 7, name: "Tuberías", imageUrl: `${baseUrl}tecnoducto.webp`},
    {id: 8, name: "Transformadores", imageUrl: `${baseUrl}transformador.webp`},
    {id: 9, name: "Baterias", imageUrl: `${baseUrl}pila.webp`},
    {id: 10, name: "Extensiones", imageUrl: `${baseUrl}extension.webp`},
];

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.05,
        },
    },
};

const headerVariants: Variants = {
    hidden: {opacity: 0, y: 12},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
};

export const Categories = () => {
    return (
        <motion.section
            className="categories"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-40px"}}
            variants={containerVariants}
        >
            <motion.div className="categories-header" variants={headerVariants}>
                <h2>Categorías</h2>
                <Button>Ver todas</Button>
            </motion.div>
            <CategoriesMobile/>
            <CategoriesDesktop/>
        </motion.section>
    );
};

const CategoriesMobile = () => {
    return (
        <div className={'categories--mobile'}>
            <Carousel>
                {categories.map((category) => (
                    <CarouselItem key={category.id}>
                        <CategoryCard
                            categoryName={category.name}
                            imageUrl={category.imageUrl}
                        />
                    </CarouselItem>
                ))}
            </Carousel>
        </div>
    )
}

const CategoriesDesktop = () => {
    return (
        <div className={'categories--desktop'}>
            {categories.map((category) => (
                <CategoryCard
                    key={category.id}
                    categoryName={category.name}
                    imageUrl={category.imageUrl}
                />
            ))}
        </div>
    )
}
