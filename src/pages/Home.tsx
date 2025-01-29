import React from "react";
import { Link } from "react-router-dom";

const menus = [
  {
    imgSrc: "/images/greek-salad.jpg",
    title: "Greek Salad",
    price: "38.00",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    imgSrc: "/images/Bruschetta.webp",
    title: "Bruschetta",
    price: "68.10",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    imgSrc: "/images/cake.jpg",
    title: "Cake",
    price: "18.95",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
];
const Home = () => {
  return (
    <div>
      <section className="p-4 bg-[#495e57] flex items-center text-white justify-between">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <p className="text-6xl text-[#F4CE14] font-bold">Little Lemon</p>
          <p className="text-3xl font-bold">Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            className="bg-[#F4CE14] px-6 py-3 w-fit rounded-xl text-black font-bold"
            to="/reservation"
          >
            Reserve a table
          </Link>
        </div>
        <div>
          <img src="/images/Rectangle-8.png" alt="little-lemon" />
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col shadow-xl rounded-lg">
              <img
                src={menu.imgSrc}
                alt={menu.title}
                className="aspect-video object-cover rounded-t-lg"
              />
              <div className="flex flex-col gap-1 p-4">
                <p className="font-bold text-xl">{menu.title}</p>
                <p className="line-clamp-3">{menu.description}</p>
                <p className="font-semibold">${menu.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
