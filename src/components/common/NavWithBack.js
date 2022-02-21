import React from "react";
import { useNavigate } from "react-router-dom";

const NavWithBack = ({ title }) => {
  let navigate = useNavigate();

  //kembali ke page sebelumnya
  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="shadow-lg bg-transparent flex justify-between p-4 text-center text-white">
      <button className="material-icons md-24 text-black" onClick={goBack}>
        arrow_back
      </button>
      <div>{title}</div>
      <div></div>
    </nav>
  );
};

export default NavWithBack;
