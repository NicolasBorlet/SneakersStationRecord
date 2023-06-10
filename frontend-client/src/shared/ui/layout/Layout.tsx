import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useRecoilState } from "recoil";
import { productState } from "../../atoms/shared-Atoms";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  imgSrc?: string;
  title?: string;
  color?: string;
}

const Layout = ({ children, imgSrc, title, color }: LayoutProps) => {
  const [productsData, setProductsData] = useRecoilState(productState);

  useEffect(() => {
    fetch(`http://localhost:3000/product`)
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProductsData]);

  useEffect(() => {
    console.log("productsData", productsData);
  }, [productsData]);

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
