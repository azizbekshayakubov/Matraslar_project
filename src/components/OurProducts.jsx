/* eslint-disable no-unused-vars */

import { NavLink, Outlet } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

function OurProducts() {
  // const url = "http://localhost:1212/api/products";
  // const { data, loader, error } = useFetch(url);
  const { data, loader, error } = useFetch(
    "http://localhost:1212/api/products",
  );
  const category = data && data.categories;
  console.log(data);

  return (
    <section className="our__products">
      <div className="products__title">Bizning mahsulotlar</div>
      <div className="nav__model container">
        <ul className="flex items-center justify-center gap-10">
          <NavLink to="/">
            <li className="model__type">Barchasi</li>
          </NavLink>
          {category &&
            category.map((item) => (
              <NavLink to={item.category.split(" ").join("")} key={item.id}>
                <li className="model__type fs-6">{item.category}</li>
              </NavLink>
            ))}
        </ul>
      </div>
      <div className="model__subline mb-12 h-[2px] w-full bg-[#01384D] opacity-[0.3]"></div>
      <div className="products container">
        <Outlet />
      </div>
    </section>
  );
}

export default OurProducts;
