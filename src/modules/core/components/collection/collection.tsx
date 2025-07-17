import { sva } from "@styled-system/css";
import React from "react";

interface CollectionProps {
    children: React.ReactNode
}

const CollectionStyles = sva({
    className: 'lukas-collection',
    slots: ['root', 'container'],
    base: {
        root: {
            width: 'full'
        },
        container: {
            display: 'flex',
            flexWrap: 'nowrap',
            columnGap: '1rem',
            scrollSnapAlign: 'start',
            scrollSnapType: 'x proximity'
        }
    }
})

export const Collection = (props: CollectionProps) => {
    const styles = CollectionStyles();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}