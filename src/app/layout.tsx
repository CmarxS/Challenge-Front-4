import "./globals.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;
