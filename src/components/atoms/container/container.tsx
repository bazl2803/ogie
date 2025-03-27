import React from "react";
import { css } from "@styled-system/css";

type ContainerProps = React.HTMLProps<HTMLDivElement>

const ContainerStyles = css({
    m: "auto",
    maxWidth: {}
})

export const container: React.FC<ContainerProps> = (props) => {
    return <div className={ContainerStyles} {...props}/>
}