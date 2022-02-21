import React from "react";
import NavWithBack from "../components/common/NavWithBack";
import { weddings } from "../data/Wedding";

const Karya = () => {
  return (
    <div>
      <NavWithBack />
      <div>
        {weddings.map((el, index) => (
          <div className="grid grid-cols-2 my-10" key={index}>
            <div className="text-center">
              <img
                src={el.weddingThumb}
                style={{ height: "200px", objectFit: "cover" }}
                alt="thumbn"
              />
              <h1 className="mt-4"> {el.weddingPerson}</h1>
            </div>
            <div>
              <img
                src={el.weddingImages[0]}
                style={{ height: "100vh", objectFit: "cover" }}
                alt="fgr"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Karya;
