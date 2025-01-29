import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white p-6 border-t-2 border-solid border-gray-400 w-screen flex md:items-center md:justify-between flex-col md:flex-row gap-3">
      <img src="/images/logo.svg" alt="logo little lemon" className="w-64" />
      <div className="max-w-80">
        <p className="md:text-center">
          <strong>Address: </strong>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p className="md:text-center">
          <strong>Tel:</strong> 0123 456 789
        </p>
        <p className="md:text-center">
          <strong>Email:</strong> littlelemon@restaurant.com
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <img
          src="/images/fb.webp"
          alt="facebook"
          className="w-10 aspect-square"
        />
        <img
          src="/images/Instagram.webp"
          alt="facebook"
          className="w-10 aspect-square"
        />
      </div>
    </footer>
  );
};

export default Footer;
