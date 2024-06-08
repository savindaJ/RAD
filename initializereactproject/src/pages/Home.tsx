import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Customer from "./Customer";
import Order from "./Order";
import Item from "./Item";
import DashBourd from "./DashBourd";
import Footer from "./Footer";
import { useState } from "react";

export default function Home() {
  const [watch, setWatch] = useState([]);

  const list: any = [];

  return (
    <>
      <NavBar cart={watch} />
      <Routes>
        <Route
          path="/"
          element={
            <DashBourd
              func={(cart: any) => {
                setWatch(cart);
              }}
            />
          }
        />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/item" element={<Item />} />
      </Routes>
      <Footer />
    </>
  );
}
