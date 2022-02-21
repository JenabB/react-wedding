// import React from "react";
// import { agenda } from "../../../data/Agenda";

// const Agenda = () => {
//   return (
//     <div>
//       <div className="flex overflow-auto">
//         {agenda.map((el, index) => (
//           <div style={{ width: "300px" }}>
//             <div key={index} className="m-4">
//               <div className="text-center text-xs flex justify-between p-4 items-center ">
//                 <div>
//                   <h1>{el.agendaYear}</h1>
//                   <h2>{el.agendaMonth}</h2>
//                 </div>
//                 <div className="tracking-widest">
//                   <h3>{el.agendaLocation}</h3>
//                 </div>
//               </div>
//               <div>
//                 <img
//                   src={el.agendaThumb}
//                   style={{
//                     height: "400px",
//                     objectFit: "cover",
//                   }}
//                   alt="iamg"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Agenda;
import React from "react";
import Slider from "react-slick";
import { agenda } from "../../../data/Agenda";

const Agenda = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {agenda.map((el, index) => (
          <div key={index} className="m-4">
            <div className="text-center text-xs flex justify-between p-4 items-center">
              <div>
                <h1>{el.agendaYear}</h1>
                <h2>{el.agendaMonth}</h2>
              </div>
              <div className="tracking-widest">
                <h3>{el.agendaLocation}</h3>
              </div>
            </div>
            <div>
              <img
                src={el.agendaThumb}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
                alt="iamg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Agenda;
