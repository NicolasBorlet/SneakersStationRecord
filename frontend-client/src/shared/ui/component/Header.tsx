import { Link } from "react-router-dom";
import { HeaderLinksProps } from "../../types/shared-type";
import { links } from "../../atoms/shared-Atoms";

const HeaderLinks: React.FC<HeaderLinksProps> = ({ links, title }) => {
  return (
    <li>
      <Link to={links} className="text-header">
        {title}
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <header className="px-36 py-8">
      <nav>
        <ul className="flex w-full justify-between">
          {links.map((link) => (
            <HeaderLinks
              key={link.links}
              links={link.links}
              title={link.title}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
