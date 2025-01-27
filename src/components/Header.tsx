import React from "react";
const Header = () => {
  return (
    <header className="h-28 flex items-center justify-between p-6 sticky top-0 bg-white">
      <img src="/images/logo.svg" alt="logo little lemon" className="w-64" />
      <nav>
        <ul className="flex gap-6">
          <li className="uppercase font-bold">Home</li>
          <li className="uppercase font-bold">About</li>
          <li className="uppercase font-bold">Reservation</li>
          <li className="uppercase font-bold">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
