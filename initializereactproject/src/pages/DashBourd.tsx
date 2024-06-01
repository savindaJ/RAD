import React from "react";
import Card from "../components/Card";

export default function DashBourd() {
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];

  const producs = [
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://tripplem.lk/image/cache/catalog/tripplem/products/Electronic-Accessories/Wearable/Smart-Watches/Common-Brand/W26-Plus-Smart-Watch/W26-Plus-Smartwatch-1080x1140.jpg",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://tripplem.lk/image/cache/catalog/tripplem/products/Electronic-Accessories/Wearable/Smart-Watches/Common-Brand/W26-Plus-Smart-Watch/W26-Plus-Smartwatch-1080x1140.jpg",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://tripplem.lk/image/cache/catalog/tripplem/products/Electronic-Accessories/Wearable/Smart-Watches/Common-Brand/W26-Plus-Smart-Watch/W26-Plus-Smartwatch-1080x1140.jpg",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://tripplem.lk/image/cache/catalog/tripplem/products/Electronic-Accessories/Wearable/Smart-Watches/Common-Brand/W26-Plus-Smart-Watch/W26-Plus-Smartwatch-1080x1140.jpg",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://tripplem.lk/image/cache/catalog/tripplem/products/Electronic-Accessories/Wearable/Smart-Watches/Common-Brand/W26-Plus-Smart-Watch/W26-Plus-Smartwatch-1080x1140.jpg",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
      rating: 5,
      price: 599,
    },
    {
      name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
      rating: 5,
      price: 599,
    }
  ];

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
