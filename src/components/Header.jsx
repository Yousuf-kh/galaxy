import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const navs = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About Us",
      path: "#about",
    },
    {
      name: "White paper",
      path: "#white",
    },
    {
      name: "Tokenomics",
      path: "#tek",
    },
    {
      name: "Road Map",
      path: "#road",
    },
    {
      name: "How to buy",
      path: "#how",
    },
    {
      name: "Buy",
      path: "#buy",
    },
  ];

  return (
    <header>
      <div className="container1 flex items-center justify-between h-[110px]">
        <img src="/logo.svg" alt="logo" />

        <nav className="hidden md:flex gap-[30px]">
          {navs.map((c) => (
            <a className="text-white" href={c.path}>
              {c.name}
            </a>
          ))}
        </nav>

        <img
          onClick={() => setIsopen(true)}
          className="block md:hidden"
          src="/menu.svg"
          alt="menu"
        />

        <div
          className={`bg-[url(/menu-bg.png)] bg-cover transition bg-green-500 w-full h-[100dvh] fixed top-0 left-[0] bg-center bg-black transform  ${isOpen ? "translate-x-[0%]" : "translate-x-[-100%]"}`}
        >
          <div className="flex items-center justify-between container1 h-[110px]">
            <img src="/logo.svg" alt="logo" />
            <img onClick={() => setIsopen(false)} src="/close.svg" alt="" />
          </div>

          <nav className="flex container1 flex-col gap-[30px]">
            {navs.map((c) => (
              <a className="text-white" href={c.path}>
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
