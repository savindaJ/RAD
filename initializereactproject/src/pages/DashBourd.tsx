import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import  producs  from "../data/products.json";
import CalssBaseComponet from "../components/CalssBaseComponet";

export default function DashBourd() {

  const [data, setData] = useState([]);

  async function fetchData() {
   await fetch("../data/products.json")
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log("fetchData error");
      });
  }

  useEffect(() => {
    console.log("DashBourd useEffect");
    fetchData();
  },[]);

  return (
    <div className="bg-white m-auto">
      <section className="flex flex-col">
        <h1 className="text-4xl font-semibold p-4 text-gray-800">Welcome !</h1>
      </section>
      <section className="flex">
        <div className="flex gap-5 flex-wrap justify-center mt-4 items-center mx-auto">
          {producs.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
