import React from "react";
import Navbar from "../../Organism/Navbar/Navbar";
import Hero from "../../../assets/bg-hero.png"; // Pastikan path ke gambar benar

export default function HeroSection() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <Navbar />
      <div className="text-center flex flex-col items-center justify-center h-3/4 max-w-2xl mx-auto gap-4 text-white">
        <h1 className="text-[42px] font-[700]">BlueHarvest</h1>
        <p className="text-[26px] font-[700] text-[#D9D9D9]">
          Sukses di Dunia Perikanan Dimulai di Sini - Dapatkan Aplikasi
          Akuakultur!
        </p>
        <button
          type="button"
          className="text-white bg-[#0075EB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-[18px]"
        >
          Download Sekarang!
        </button>
      </div>
    </div>
  );
}
