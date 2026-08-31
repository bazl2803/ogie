'use client'
import React from "react"

interface SidebarContextValue {
    expanded: boolean
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = React.createContext<SidebarContextValue | null>(null)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expanded, setExpanded] = React.useState<boolean>(true)

    return React.createElement(
        SidebarContext.Provider,
        { value: { expanded, setExpanded } },
        children,
    )
}

export const useSidebar = () => {
    const context = React.useContext(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}