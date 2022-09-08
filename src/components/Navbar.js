import React, { useState } from "react";
import { Links } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [path, setPath] = useState("/");
  return (
    <nav className="flex justify-between ml-5 text-white container mx-auto my-auto desktop:inline-flex laptop:inline-flex tablet:hidden phone:hidden">
      <div className="w-1/4 p-5 m-5">
        <Link to="/" className="font-bold desktop:text-2xl laptop:text-1xl hover:text-blue-500 tracking-wider animate-bounce transition duration-500 ease-in-out">
          Fortnite Challenges
        </Link>
      </div>
      <div className="flex justify-around w-2/4 p-5 m-5 text-1xl">
        {Links.map(({ name, link }, id) => {
          return (
            <Link
              to={link}
              onClick={() => setPath(link)}
              style={{ borderBottom: link === path ? "4px solid #3b82f6" : "" }}
              className="hover:border-b-4 border-blue-500 tracking-widest hover:animate-pulse"
              key={id}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
