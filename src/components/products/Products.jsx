import React, { useState } from "react";
import { ProductsData } from "../../data/products";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  const [parent] = useAutoAnimate();

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>

                <span>{product.price}$</span>

                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
