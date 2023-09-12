import { Route, Routes } from "react-router-dom";
import uuid from "react-uuid";
// import Zakaz from "../../public/icon/zakaz.svg";
// import Custom from "../../public/icon/custom.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const data = [
    {
      id: uuid(),
      href: "/buyurtmalar",

      name: "Buyurtmalar",
    },

    {
      id: uuid(),
      href: "/customer",

      name: "Toifalar",
    },
  ];

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.href}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>

      <Routes>
        <Route index element={<Order />} />
        <Route path="customers" element={<Customer />} />
      </Routes>
    </div>
  );
}
