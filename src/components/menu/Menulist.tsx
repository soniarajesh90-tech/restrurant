import { useState } from "react";

type Props = {
  menuList: string[];
  filterItems: (category: string) => void;
};

const Menulist = ({ menuList, filterItems }: Props) => {
  const [active, setActive] = useState("All");

  return (
    <>
      {menuList.map((category, index) => (
        <li
          key={index}
          className={`menu-list-item ${
            active === category ? "active-item" : ""
          }`}
          onClick={() => {
            setActive(category);
            filterItems(category);
          }}
        >
          {category}
        </li>
      ))}
    </>
  );
};

export default Menulist;