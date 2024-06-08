import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Customer from "./Customer";
import Order from "./Order";
import Item from "./Item";
import DashBourd from "./DashBourd";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBourd />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/item" element={<Item />} />
      </Routes>
      <Footer />
    </>
  );
}
