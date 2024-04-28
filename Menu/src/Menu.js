import React from "react";
import { GlobalContext } from "./Context";

const Menu = () => {
  const { menuItem } = GlobalContext();
  return (
    <div className="section-center">
      {
        menuItem.map((item) => {
          const { img, title, id, price, desc } = item;
          return (
            <article key={id} className="menu-item">
              <img src={img} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  );
};

export default Menu;
