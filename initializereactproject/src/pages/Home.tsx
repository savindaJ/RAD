import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Customer from "./Customer";
import Order from "./Order";
import Item from "./Item";
import DashBourd from "./DashBourd";
import Footer from "./Footer";
import { useState } from "react";

export default function Home() {

  let list : any =[];

  const [cart, setCart] = useState(0);

  return (
    <>
      <NavBar list={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <DashBourd
              func={(cart: any) => {
                setCart(list.length);
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
