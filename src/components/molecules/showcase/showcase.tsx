export const Showcase: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <section className="showcase">
            {children}
        </section>
    )
}

const ShowcaseHeader: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="showcase-header">
            {children}
        </div>
    )
}

const ShowcaseTitle: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="showcase-title">
            {children}
        </div>
    )
}

const ShowcaseContent: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return (
        <div className="showcase-content">
            {children}
        </div>
    )
}

const ShowcaseItem: React.FC<{ product: any }> = ({ product }) => {
    return (
        <div className="showcase-item">
        </div>
    )
}

Object.assign(Showcase, {
    Header: ShowcaseHeader,
    Title: ShowcaseTitle,
    Content: ShowcaseContent,
    Item: ShowcaseItem,
})