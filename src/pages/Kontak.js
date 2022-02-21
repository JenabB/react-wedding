import React, { useState } from "react";
import NavWithBack from "../components/common/NavWithBack";

const Kontak = () => {
  const [contactForm, setContactForm] = useState({
    nama: "",
    handphone: "",
    instagram: "",
    tanggalPernikahan: "",
    pesan: "",
  });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const contacts = [
    { icon: "email", value: "ceritatentangsenja@gmail.com" },
    { icon: "phone", value: "+62 8881 8888" },
    { icon: "account_box", value: "@ceritasenja" },
  ];
  return (
    <div>
      <NavWithBack />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 mx-auto lg:mt-20">
        {/* col 1 */}
        <div className="m-4">
          <div>
            <h1 className="text-xl mb-20">Berkarya bersama kami</h1>
            <h2 className="font-thin">
              Rumah kami bertempat di Jakarta. Kami tak hanya merangkai cerita
              di Tanah Air, namun juga di berbagai belahan dunia lain. Akan
              sangat berarti jika kamu bersedia untuk membagikan waktu dan
              cerita hidupmu, bersama kami.
            </h2>
          </div>
          <div className="my-10">
            {contacts.map((el, index) => (
              <div className="flex" key={index}>
                <h1 className="material-icons mx-4">{el.icon}</h1>
                <h1>{el.value}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* col 2 */}
        <div className="m-4">
          <h1 className="text-xl mb-20">Hubungi Kami</h1>
          <form>
            {/* nama */}
            <div>
              <h1 className="tracking-widest text-xs">NAMA</h1>
              <div className=" border-b border-black">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="nama"
                  value={contactForm.nama}
                  onChange={handleContactChange}
                />
              </div>
            </div>
            {/* contact */}
            <div className="mt-10">
              <h1 className="tracking-widest text-xs">HANDPHONE</h1>
              <div className=" border-b border-black">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="handphone"
                  value={contactForm.handphone}
                  onChange={handleContactChange}
                />
              </div>
            </div>
            {/* instagram */}
            <div className="mt-10">
              <h1 className="tracking-widest text-xs">INSTAGRAM</h1>
              <div className=" border-b border-black">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="instagram"
                  value={contactForm.instagram}
                  onChange={handleContactChange}
                />
              </div>
            </div>
            {/* tanggal */}
            <div className="mt-10">
              <h1 className="tracking-widest text-xs">TANGGAL PERNIKAHAN</h1>
              <div className=" border-b border-black">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="date"
                  name="tanggalPernikahan"
                  value={contactForm.tanggalPernikahan}
                  onChange={handleContactChange}
                />
              </div>
            </div>
            <div className="mt-10">
              <h1 className="tracking-widest text-xs">PESAN</h1>
              <div className=" border-b border-black">
                <textarea
                  className="w-full"
                  name="pesan"
                  value={contactForm.pesan}
                  onChange={handleContactChange}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
