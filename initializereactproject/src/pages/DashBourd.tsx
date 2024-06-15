import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import axios from "axios";

export default function DashBourd(parentProp: any) {
  const [data, setData] = useState([]);

  async function fetchData() {
    await fetch("../data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log("fetchData error");
      });
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  function getAllProduct(){
    axios.get('http://localhost:4000/products/all').then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const cartItem: any = [];

  return (
    <div className="bg-white m-auto mt-20">
      <section className="container m-auto mt-3">
        <img
          src="https://cdn.buyabans.com/media/catalog/category/New_dfvgbhhui9_1.png"
          alt=""
        />
      </section>
      <small className="ms-20 mt-5">Home / Watches .</small>
      <section className="flex flex-col">
        {/* <h1 className="text-4xl font-semibold p-4 text-gray-800">Welcome !</h1> */}
      </section>
      <section className="flex flex-nowrap">
        <section>
          <h3 className="text-2xl font-semibold p-4 text-gray-800 text-center">
            Products
          </h3>
          <Filter />
        </section>
        <div className="flex gap-5 flex-wrap justify-center mt-4 items-center mx-auto">
          {data.map((product, index) => (
            <Card
              key={index}
              product={product}
              func={(prop: any) => {
                cartItem.push(prop);
                parentProp.func(cartItem);
              }}
            />
          ))}
        </div>
      </section>
      <section className="flex justify-center mt-20">
        <nav aria-label="Page navigation example" className="w-100 m-auto">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
        Ï
      </section>
    </div>
  );
}