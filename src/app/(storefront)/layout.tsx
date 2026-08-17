import { Container } from "@/components";
import { StoreAppBar } from "../_components/appbar/store-appbar";
import { StoreFooter } from "../_components/footer/store-footer";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
      }}
    >
      <StoreAppBar />
      <main style={{ flex: 1 }}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-2xl)",
          }}
        >
          {children}
        </Container>
      </main>
      <StoreFooter />
    </div>
  );
}
