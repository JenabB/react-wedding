import React from "react";
import { useParams } from "react-router-dom";
import { weddings } from "../data/Wedding";
const WeddingDetail = () => {
  const { id } = useParams();

  const selectedWed = weddings.find((el) => el.weddingId === id);
  console.log(id, "ini id");
  console.log(selectedWed);
  return (
    <div>
      <img src={selectedWed.weddingThumb} className="w-screen" alt="wedding" />
      <h1>{selectedWed.weddingPerson}</h1>
    </div>
  );
};

export default WeddingDetail;
