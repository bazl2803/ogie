import Image from 'next/image';
import { sva } from '@styled-system/css';

// TODO: Use the Product type from the database
interface ProductShowcaseItemProps {
    product: { id: string | number; name: string; thumbnail: string };
}

const ProductShowcaseItemStyles = sva({
    className: 'ProductShowcaseItem',
    slots: ['root', 'image'],
    base: {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            width: 'auto',
            height: '80px'
        }
    }
});

export const ProductShowcaseItem = (props: ProductShowcaseItemProps) => {
    const { product } = props;
    const classes = ProductShowcaseItemStyles();

    return (
        <div className={classes.root} key={product.id}>
            <Image
                className={classes.image}
                src={product.thumbnail}
                alt={product.name}
                width={100}
                height={100}
            />
        </div>
    );
};
