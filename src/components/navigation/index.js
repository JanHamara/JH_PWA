import { Link } from "gatsby";
import * as React from "react";

const Navigation = ({ items }) => {
  return (
    <nav>
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
