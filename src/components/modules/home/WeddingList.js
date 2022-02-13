import React from "react";
import { weddings } from "../../../data/Wedding";
import { Link } from "react-router-dom";

const WeddingList = () => {
  return (
    <div className="my-10 p-4 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {weddings.map((el, index) => (
          <div
            key={index}
            className="lg:m-4 my-24 lg:mx-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <Link to={`/wedding/${el.weddingId}`}>
              <img
                src={el.weddingThumb}
                style={{ height: "180px", objectFit: "cover" }}
                className="w-full"
                alt={el.weddingPerson}
              />
              <div
                className="mt-10 flex justify-center"
                style={{ color: "#4D4D61" }}
              >
                <h1 className="mx-2 text-2xl" style={{ fontFamily: "Cookie" }}>
                  {el.weddingPerson}
                </h1>
                <h1>-</h1>
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
