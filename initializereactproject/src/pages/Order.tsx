import React from "react";
import NavBar from "../components/NavBar";

export default function Order() {
  return (
    <div>
      {/* <NavBar /> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Order
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
