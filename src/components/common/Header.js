import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isShow, setIsShow] = useState(false);

  const handleShowClick = () => {
    setIsShow(!isShow);
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (!isMobile) {
    return (
      <motion.div
        className="z-10 top-0 w-full absolute"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          },
        }}
      >
        <div className="flex  justify-between p-16 text-white">
          <div className="flex text-xs font-bold tracking-widest">
            <Link to="tentang">
              <h1 className="">TENTANG KAMI</h1>
            </Link>
            <Link to="karya">
              <h1 className="mx-4 t">KARYA</h1>
            </Link>
          </div>
          <Link to="/">
            <div className="font-bold flex flex-row items-center">
              <h1 className="text-xs tracking-widest">TENTANG</h1>
              <h1
                className="mx-2 text-4xl tracking-widest"
                style={{ fontFamily: "Sacramento" }}
              >
                Senja
              </h1>
            </div>
          </Link>
          <div className="flex text-xs font-bold tracking-widest">
            <Link to="info">
              <h1>INFO</h1>
            </Link>
            <Link to="kontak">
              {" "}
              <h1 className="mx-4">KONTAK</h1>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {isShow ? (
        <motion.div
          className="p-4 z-10 top-0 w-full absolute h-screen text-xs "
          style={{ backgroundColor: "#D2C8B7" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
              },
            },
          }}
        >
          <div className="flex justify-between px-4">
            <div></div>
            <Link to="/">
              <div className="font-bold flex flex-row items-center">
                <h1 className="text-xs tracking-widest">TENTANG</h1>
                <h1
                  className="mx-2 text-4xl tracking-widest"
                  style={{ fontFamily: "Sacramento" }}
                >
                  Senja
                </h1>
              </div>
            </Link>
            <button onClick={handleShowClick}>x</button>
          </div>
          <div className="text-center">
            <Link to="tentang">
              <h1 className="my-8 tracking-widest">TENTANG KAMI</h1>
            </Link>
            <Link to="karya">
              <h1 className="my-8 tracking-widest">KARYA</h1>
            </Link>
            <Link to="info">
              <h1 className="my-8 tracking-widest">INFO</h1>
            </Link>
            <Link to="kontak">
              <h1 className="my-8 tracking-widest">KONTAK</h1>
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="z-10 top-0 w-full absolute">
          <div className="flex justify-between p-4 text-white">
            <div>
              <button onClick={handleShowClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
            </div>
            <Link to="/">
              <div className="font-bold flex flex-row items-center">
                <h1 className="text-xs tracking-widest">TENTANG</h1>
                <h1
                  className="mx-2 text-4xl tracking-widest"
                  style={{ fontFamily: "Sacramento" }}
                >
                  Senja
                </h1>
              </div>
            </Link>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
