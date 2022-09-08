import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Links } from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [path, setPath] = useState('/')

  return (
    <div className="flex justify-between text-white desktop:hidden laptop:hidden tablet:inline-flex phone:inline-flex">
        <div className="p-10 text-4xl" onClick={() => setSidebar(!sidebar)}>
          {sidebar === false ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={
            sidebar === false
              ? "flex flex-col justify-around text-2xl m-16 mx-0 font-bold"
              : "hidden"
          }
        >
          {Links.map(({ name, link }, id) => {
            return (
              <div onClick={() => setSidebar(!sidebar)} className='m-2 p-2'>
              <Link
                to={link}
                key={id}
                onClick={() => setPath(link)}
                style={{color : link === path ? "#3b82f6" : "#fff"  }}
                className="m-4"
              >
                {name}
              </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Sidebar;
