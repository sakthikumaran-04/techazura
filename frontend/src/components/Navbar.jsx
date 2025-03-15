import { faBars, faTicket, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navbarContent } from "../contents/contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-slate-950 p-2 flex items-center justify-between px-10 fixed top-0 w-full z-20 max-lg:sticky max-sm:px-4">
      <Link to={"/"}><h1 className="uppercase text-2xl font-logo text-white cursor-pointer">
        tech<span className="text-blue-600">azura</span>
      </h1>
      </Link>
      
      <div
        className={`fixed bg-slate-950 top-0 h-screen max-w-sm items-center justify-center px-12 transition-all duration-200 ease-in-out max-lg:flex flex-col ${
          showMenu ? "right-0" : "right-[-100%]"
        } lg:hidden`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="text-white absolute top-10 right-10 text-2xl cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
        <div className="flex flex-col items-center gap-8">
          {navbarContent.map((item, index) => (
            <a href={`./${item.link}`} to={item.link} key={index} className="text-slate-300 cursor-pointer hover:text-white transition" onClick={()=>setShowMenu(false)}>
              {item.title}
            </a>
          ))}
        </div>
        <Link to={"/get-ticket"} className="bg-blue-600 text-white py-2 px-6 rounded-md flex items-center justify-center gap-3 mt-6" onClick={()=>setShowMenu(false)}>
          <span>Get Tickets</span>
          <FontAwesomeIcon icon={faTicket} className="text-white" />
        </Link>
      </div>
      
      <div className="hidden lg:flex gap-8 items-center">
        {navbarContent.map((item, index) => (
          <a href={`./${item.link}`} key={index} className="text-slate-300 text-lg cursor-pointer hover:text-white transition">
            {item.title}
          </a>
        ))}
        <Link to={"/get-ticket"} className="bg-blue-600 text-white py-2 px-6 rounded-md flex items-center justify-center gap-3">
          <span>Get Tickets</span>
          <FontAwesomeIcon icon={faTicket} className="text-white" />
        </Link>
      </div>
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-white text-2xl lg:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        />

      </div>
    </nav>
  );
}

export default Navbar;
