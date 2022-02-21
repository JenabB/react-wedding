import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/modules/home/Carousel";
import WeddingList from "../components/modules/home/WeddingList";
import AOS from "aos";
import "aos/dist/aos.css";
import WeddingVideoList from "../components/modules/home/WeddingVideoList";
import Header from "../components/common/Header";
const Home = () => {
  AOS.init();
  return (
    <div>
      <Header />
      <Carousel />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="text-center my-4 p-8"
      >
        <h1 className="text-xs lg:text-md my-4">
          Kami mengabadikan momen antara dua jiwa yang diwarnai dengan segala
          keindahannya. Merangkainya menjadi cerita hangat yang tak tergantikan.
        </h1>
        <h2 className="lg:text-xl" style={{ fontFamily: "masqualerolight" }}>
          Karena seperti senja, setiap cerita memiliki keindahan yang berbeda.
        </h2>
      </div>
      <div className="flex justify-center lg:my-24">
        <hr style={{ border: "0.5px solid #4D4D61", width: "10%" }} />
      </div>
      <WeddingList />
      <div
        className="my-28 text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Link to="photograf">
          <h1 className="tracking-widest">LIHAT SEMUA PHOTOGRAF</h1>
        </Link>
      </div>
      <div className="flex justify-center lg:my-24">
        <hr style={{ border: "0.5px solid #4D4D61", width: "10%" }} />
      </div>
      <WeddingVideoList />
      <div
        className="my-28 text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1 className="tracking-widest">LIHAT SEMUA VIDEO</h1>
      </div>
      <div className="flex justify-center lg:my-24">
        <hr style={{ border: "0.5px solid #4D4D61", width: "80%" }} />
      </div>
      <div className="p-8 w-1/4 text-center" style={{ fontFamily: "Roboto" }}>
        <h1>Tentang Senja — 2022</h1>
      </div>
    </div>
  );
};

export default Home;
