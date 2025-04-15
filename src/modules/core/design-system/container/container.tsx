import React from "react";
import { css } from "@styled-system/css";

type ContainerProps = React.HTMLProps<HTMLDivElement>

const ContainerStyles = css({
    m: { base: 4, md: 8 },
    maxWidth: { base: '100%', md: '1200px' }
})

export const Container: React.FC<ContainerProps> = (props) => {
    return <div className={ContainerStyles} {...props} />
}