import { useState } from "react";
import SectionTitle from "../title/SectionTitle";
import Menulist from "./Menulist";
import Menuitem from "./Menuitem";
import { menu } from "../../Data";
import "./Menu.css";

const allMenuList = ["All", ...new Set(menu.map((item) => item.category))];

const Menu = ({ setCartCount }: any) => {

  const [menuList] = useState(allMenuList);
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category: string) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }

    const newMenuItems = menu.filter(
      (item) => item.category === category
    );

    setMenuItems(newMenuItems);
  };

  return (
    <section id="menu">

      <div className="menu-head">

      <div className="container">

        <div className="menu-header">

          <SectionTitle
            subtitle="Our Menu"
            title={
              <>
                Let's check <span>Our Menu</span>
              </>
            }
          />

          <ul className="menu-list">
            <Menulist menuList={menuList} filterItems={filterItems} />
          </ul>

        </div>

        {/* MENU ITEMS */}
        <div className="menu-container">
          <Menuitem
            menuItems={menuItems}
            setCartCount={setCartCount}
          />
        </div>

      </div>
      </div>

    </section>
  );
};

export default Menu;