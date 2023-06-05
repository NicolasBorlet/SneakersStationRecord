import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";

interface LayoutProps {
  children: React.ReactNode;
  imgSrc?: any;
  title?: string;
  color?: string;
}

const Layout = ({ children, imgSrc, title, color }: LayoutProps) => {
  return (
    <div className="mb-5">
      <Header />
      {imgSrc && <Banner img={imgSrc} title={title} color={color} />}
      <div className="xl:px-[153px] relative">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
