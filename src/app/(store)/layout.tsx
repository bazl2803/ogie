import { Container } from "@/components";
import { StoreAppBar } from "../_components/store-appbar";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <StoreAppBar />
            <Container style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', paddingBlock: 'var(--spacing-md)' }}>
                {children}
            </Container>
        </main>
    )
}