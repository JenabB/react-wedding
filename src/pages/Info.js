import React from "react";
import NavWithBack from "../components/common/NavWithBack";
import Agenda from "../components/modules/info/Agenda";

const Info = () => {
  return (
    <div>
      <NavWithBack />
      <div className="p-8 text-center">
        <h1 className="xs:text-xs text-sm">
          Kami memiliki harapan besar bisa merangkai cerita di negara dan
          kota-kota berikut. Apabila kalian memiliki harapan yang sama, mari
          kita diskusikan. Semoga harapan besar kami bisa bertemu dengan
          kesempatan darimu.
        </h1>
      </div>
      <Agenda />
    </div>
  );
};

export default Info;
