import Footer from "../component/Footer";
import Header from "../component/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mb-5">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
