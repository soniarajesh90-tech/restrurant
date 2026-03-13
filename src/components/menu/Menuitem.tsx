import { useState, useEffect } from "react";
import "./Menu.css";

type MenuItemType = {
  id: number;
  title: string;
  price: number;
  img: string;
  desc: string;
};

const Menuitem = ({
  menuItems,
  setCartCount,
}: {
  menuItems: MenuItemType[];
  setCartCount: (count: number) => void;
}) => {

  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const increaseQty = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 0,
    }));
  };

  // total cart items calculate
  useEffect(() => {
    const total = Object.values(cart).reduce((a, b) => a + b, 0);
    setCartCount(total);
  }, [cart, setCartCount]);

  return (
    <>
      {menuItems.map((item) => {
        const { id, title, price, img, desc } = item;
        const qty = cart[id] || 0;

        return (
          <div className="menu-item" key={id}>
            <img src={img} alt={title} />

            <div className="menu-item-content">
              <h3>{title}</h3>
              <p>{desc}</p>

              <div className="menu-item-footer">
                <span className="menu-price">₹{price}</span>

                {qty === 0 ? (
                  <button className="btn" onClick={() => increaseQty(id)}>
                    Add to cart
                  </button>
                ) : (
                  <div className="qty-box">
                    <button onClick={() => decreaseQty(id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => increaseQty(id)}>+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Menuitem;