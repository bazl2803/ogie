import { Card, Title } from "@/modules/core/design-system";
import { sva } from "@styled-system/css";

/**
 * Props
 */
interface ProductShowcaseProps {
    title: string,
    products: { id: string, name: string, thumbnail: string }[]
}

const ProductShowcaseStyles = sva({
    className: 'ProductShowcase',
    slots: ['root', 'products'],
    base: {
        root: { display: 'flex', rowGap: '16px' },
        products: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto',
            gap: '16px'
        }
    }
});

/**
 * Display a card with several products.
 * @param props
 * @constructor
 */

export const ProductShowcase = (props: ProductShowcaseProps) => {
    const { title, products } = props;
    const classes = ProductShowcaseStyles();
    return (
        <Card className={classes.root}>
            <Title level={6}>{title}</Title>

            <div className={classes.products}>
                {products.map((product) => (
                    <div key={product.id}>

                    </div>
                ))}
            </div>
        </Card>
    )
}