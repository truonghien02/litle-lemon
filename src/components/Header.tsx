import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-28 flex items-center justify-between p-6 sticky top-0 bg-white border-b-2 border-solid border-gray-400">
      <img src="/images/logo.svg" alt="logo little lemon" className="w-64" />
      <nav>
        <ul className="flex gap-6">
          <li className="uppercase font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="uppercase font-bold">About</li>
          <li className="uppercase font-bold">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li className="uppercase font-bold">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
