import { HeaderLinksProps } from "../../types/shared-type";
import { links } from "../../atoms/shared-Atoms";
import { useEffect, useState } from "react";

const HeaderLinks: React.FC<HeaderLinksProps> = ({
  links,
  title,
  src,
  isVisible,
}) => {
  return (
    <a
      href={links}
      className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      style={isVisible ? { display: "block" } : { display: "none" }}
    >
      {src ? (
        <img src={src} className="max-w-[20px] max-h-[20px]" />
      ) : (
        <>{title} </>
      )}
    </a>
  );
};

const Header = () => {
  const [, setCartItemsCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    const parsedCartItems =
      cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage);
    setCartItemsCount(parsedCartItems?.length ?? 0);
  }, []);

  const Resize = () => {
    if (window.innerWidth > 1024) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Set initial visibility based on window width
    if (window.innerWidth > 1024) {
      setIsVisible(true);
    }

    // Add resize event listener
    window.addEventListener("resize", Resize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  return (
    <header className="xl:px-36 xl:py-8">
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 pb-5 lg:pb-0 items-center">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-semibold text-xl tracking-tight">
              <a href="/">
                <img
                  src="http://ssr.local/wp-content/uploads/2023/06/logo-ssr.png"
                  alt="logo Sneakers Station Records"
                />
              </a>
            </span>
          </div>
          <div
            className="block lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          >
            <button
              id="nav"
              className="flex items-center px-3 py-2 text-blue-700 hover:text-blue-700"
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  isVisible ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-current h-3 w-3 ${
                  isVisible ? "block" : "hidden"
                }`}
              >
                <line
                  x1="0"
                  y1="100"
                  x2="100"
                  y2="0"
                  stroke-width="10"
                  stroke="black"
                />
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke-width="10"
                  stroke="black"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu w-full lg:block flex-grow  lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow lg:flex justify-between">
            {links.map((link) => (
              <HeaderLinks
                key={link.links}
                links={link.links}
                title={link.title}
                src={link.src}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
