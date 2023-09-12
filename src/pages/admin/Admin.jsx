import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Order from "./Order";

export default function Admin() {
  return (
    <>
      <div>
        <h2>Admin</h2>
        <Sidebar />
      </div>
    </>
  );
}
