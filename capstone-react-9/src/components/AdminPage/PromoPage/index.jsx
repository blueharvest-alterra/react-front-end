import React, { useState } from "react";
import LayoutDashboard from "../../LayoutDashboard/LayoutDashboard";
import TabelPromo from "../PromoPage/Tabel Promo/TabelPromo";

import axios from "axios";

const PromoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    status: "",
    amount: "",
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzgwNDc5fQ.dxb-oc9QncUxBLZ9pE2HKcG18B7i97qTUrYLlFpeTCc";


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "https://blueharvest.irvansn.com/v1/promos",
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const parsedValue = parseInt(value);
      setFormData({
        ...formData,
        [name]: parsedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <LayoutDashboard>
      <div className="bg-white rounded-lg p-9 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-[30px] font-Poppins font-semibold">Tambak</h1>
          <button
            type="button"
            onClick={handleOpenModal}
            className="text-white bg-[#0075EB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex gap-2 items-center"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add Product
          </button>
        </div>
        <div className="pt-10">
          <TabelPromo />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-[50%] p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Tambah Voucher Baru</h2>
            </div>
            <div className="content">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-lg mb-2" htmlFor="name">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                    placeholder="Nama Voucher"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="voucherCode">
                    Kode Voucher
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                    placeholder="Kode Voucher"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="discount">
                    Diskon
                  </label>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">Rp</p>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Masukkan Nominal"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg mb-2">Status</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="status"
                        value="available"
                        checked={formData.status === "available"}
                        onChange={handleChange}
                        className="mr-2 rounded-md"
                      />
                      Available
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="status"
                        value="unavailable"
                        checked={formData.status === "unavailable"}
                        onChange={handleChange}
                        className="mr-2 rounded-md"
                      />
                      Unavailable
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#0075EB] text-white rounded-lg hover:bg-blue-700"
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 border  text-[#8899A8] rounded-lg hover:bg-netral-30 hover:text-white"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </LayoutDashboard>
  );
};

export default PromoPage;
