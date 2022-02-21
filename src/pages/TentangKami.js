import React from "react";

import NavWithBack from "../components/common/NavWithBack";

const TentangKami = () => {
  return (
    <div>
      <NavWithBack />
      <div className="grid grid-cols-2 mx-10 text-sm">
        <div
          className="mt-10 m-4 leading-6"
          style={{ fontfamily: "Montserrat" }}
        >
          <h1 className="my-10">
            Kami mengagumi hubungan antara dua jiwa yang diwarnai dengan segala
            keindahan dan ketidaksempurnaannya.
          </h1>
          <h2 className="my-10">
            Bagi kami, keindahan itu terungkap melalui angin sepoi yang menerpa
            wajah, rangkaian tawa, tatapan mata yang teduh, atau tanah basah
            yang menjadi lantai dansa.
          </h2>
          <h3 className="m-10">
            Bersama momen-momen seperti itulah, kami mengajak kamu untuk
            mengabadikan arti keindahan yang sebenarny
          </h3>
          <h4>
            Kami mengabadikan cerita, memadukan cahaya, dan menciptakan visual
            yang sederhana. Bagian-bagian tersebut kami rangkai dalam bentuk
            cerita-cerita hangat yang tak tergantikan.
          </h4>
          <h5 className="m-10">
            Karena seperti senja, setiap cerita memiliki keindahan yang berbeda.
          </h5>
        </div>
        <div className="m-10">
          <img
            src="https://www.yagampang.com/wp-content/uploads/2021/08/2-Gambar-Senja-Sore.jpg?ezimgfmt=ng:webp/ngcb10"
            alt="grid-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
