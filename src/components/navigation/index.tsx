import { Link } from "gatsby";
import * as React from "react";

interface NavigationProps {
  items: NavigationItemProp[]
}
interface NavigationItemProp {
  href: string;
  label: string;
}

const Navigation = ({ items }: NavigationProps): React.ReactElement => {
  return (
    <nav>
      {items.map((item, index): Object => (
        <Link to={item.href} key={index}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
