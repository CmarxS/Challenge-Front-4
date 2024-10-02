import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface SiteProps {
  children: React.ReactNode;
}

const Site = ({ children }: SiteProps) => {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Site;
