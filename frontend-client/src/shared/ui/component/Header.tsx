import { Link } from "react-router-dom";
import { HeaderLinksProps } from "../../types/shared-type";
import { links } from "../../atoms/shared-Atoms";
import { useEffect, useState } from "react";

const HeaderLinks: React.FC<HeaderLinksProps> = ({ links, title, src }) => {
  return (
    <li>
      <Link to={links} className="text-header">
        {src ? (
          <img src={src} className="max-w-[20px] max-h-[20px]" />
        ) : (
          <>{title} </>
        )}
      </Link>
    </li>
  );
};

const Header = () => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    const parsedCartItems =
      cartItemsFromLocalStorage && JSON.parse(cartItemsFromLocalStorage);
    setCartItemsCount(parsedCartItems?.length ?? 0);
  }, []);

  return (
    <header className="px-36 py-8">
      <nav>
        <ul className="flex w-full justify-between">
          {links.map((link) => (
            <HeaderLinks
              key={link.links}
              links={link.links}
              title={link.title}
              src={link.src}
            />
          ))}
          <li>
            <Link to="/cart" className="relative">
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
