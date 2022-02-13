import React from "react";
import { weddings } from "../../../data/Wedding";
import { Link } from "react-router-dom";

const WeddingList = () => {
  return (
    <div className=" my-4 lg:my-10 lg:p-4 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {weddings.map((el, index) => (
          <div
            key={index}
            className="m-4 my-24 lg:mx-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <Link to={`/wedding/${el.weddingId}`}>
              <img
                src={el.weddingThumb}
                style={{ height: "250px", objectFit: "cover" }}
                className="w-screen"
                alt={el.weddingPerson}
              />
              <div
                className="mt-10 flex justify-center items-center"
                style={{ color: "#4D4D61" }}
              >
                <h1 className="mx-2 text-2xl" style={{ fontFamily: "Cookie" }}>
                  {el.weddingPerson}
                </h1>
                <h1>—</h1>
                <h1 className="mx-2 text-2xl" style={{ fontFamily: "Cookie" }}>
                  {el.weddingCity}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingList;
