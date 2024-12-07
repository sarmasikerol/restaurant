import React from "react";
import { MenuList } from "../helper/MenuList";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((item, key) => (
          <div className="menuItem">
            <div>
              <img src={item.image} alt="" />
            </div>
            <h3>{item.name}</h3>
            <p>{item.price} ₺</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
