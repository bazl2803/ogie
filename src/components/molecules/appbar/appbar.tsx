import React from "react";
import { css } from "@styled-system/css";
import clsx from "clsx";

type AppbarProps = React.HTMLProps<HTMLDivElement>
type AppbarSectionProps = { children?: React.ReactNode }

const AppbarStyles = css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBlock: '2',
    paddingInline: '4'
})

const Appbar = ({ className, ...props }: AppbarProps) => {
    return <div className={clsx(AppbarStyles, className)} {...props}/>
}

const Section = (props: AppbarSectionProps) => {
    return <div {...props}/>
}

Appbar.Section = Section

export { Appbar }