import { Button } from '@/components'
import './categories.scss'
import Image from 'next/image'
import { LiaBoxSolid, LiaLightbulbSolid, LiaPlugSolid, LiaShieldAltSolid, LiaToolsSolid, LiaWrenchSolid } from 'react-icons/lia'
import React from 'react'

const mockCategories = [
    {
        id: 1,
        name: 'Iluminación',
        icon: LiaLightbulbSolid
    },
    {
        id: 2,
        name: 'Tuberías y Conexiones',
        icon: LiaBoxSolid
    },
    {
        id: 3,
        name: 'Interruptores y Tomas',
        icon: LiaPlugSolid
    },
    {
        id: 4,
        name: 'Protección y Tableros',
        icon: LiaShieldAltSolid
    },
    {
        id: 5,
        name: 'Cajas y Placas',
        icon: LiaBoxSolid
    },
    {
        id: 6,
        name: 'Breakers y Contactos',
        icon: LiaBoxSolid,
    },
    {
        id: 7,
        name: 'Herramientas',
        icon: LiaToolsSolid,
    },
    {
        id: 8,
        name: 'Accesorios Eléctricos',
        icon: LiaWrenchSolid,
    },
]

export const Categories = () => {
    return (
        <section className="categories">
            <div className='categories--header'>
                <h2>Categorías</h2>
                <Button>Ver Todas</Button>
            </div>

            <CategoriesDesktop />
            <CategoriesMobile />
        </section>
    )
}

const CategoriesDesktop = () => {
    return (
        <div className="categories--desktop">
            {mockCategories.map(category => (
                <CategoryCard key={category.id} {...category} />
            ))}
        </div>
    )
}

const CategoriesMobile = () => {
    return (
        <div className="categories--mobile">
            {mockCategories.map(category => (
                <CategoryCard key={category.id} {...category} />
            ))}
        </div>
    )
}

const CategoryCard: React.FC<{ icon: React.ElementType, name: string }> = ({ icon, name }) => {
    const Icon = icon;
    return (
        <div className="category-card">
            <div className='category-card-icon-box'>
                <Icon className='category-card-icon' />
            </div>
            <p>{name}</p>
        </div>
    )
}