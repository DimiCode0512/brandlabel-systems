import { Footer } from "./Footer";
import { Header } from "./Header";
import { LanguageProvider } from "@/lib/i18n";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
