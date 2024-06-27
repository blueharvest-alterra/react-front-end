import React, { useState } from "react";
import LayoutDashboard from "../../LayoutDashboard/LayoutDashboard";
import TabelTambak from "./Tabel Tambak/TabelTambak";
import axios from "axios";
import Cookies from "js-cookie";

const TambakPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    picture_file: null,
    minimum_investment_amount: "",
    count_investment: "",
  });

  const token = Cookies.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        title: formData.title,
        description: formData.description,
        picture_file: formData.picture_file,
        minimum_investment_amount: parseInt(
          formData.minimum_investment_amount
        ), // Konversi ke int
        count_investment: parseInt(formData.count_investment), // Konversi ke int
      };
      console.log(dataToSend);

      const response = await axios.post(
        "https://blueharvest.irvansn.com/v1/farms",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response data:", response.data);

      setIsModalOpen(false);
      // Reset form jika diperlukan setelah submit berhasil
      setFormData({
        title: "",
        description: "",
        picture_file: null,
        minimum_investment_amount: "",
        count_investment: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.log("Response status:", error.response.status);
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error setting up the request:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "picture_file") {
      setFormData({
        ...formData,
        picture_file: e.target.files[0], // Mengambil file dari input
      });
      setFileName(e.target.files[0].name);
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            Tambah Tambak
          </button>
        </div>
        <div className="pt-10">
          <TabelTambak />
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                    placeholder="Nama Tambak"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="discount">
                    Harga Aawal
                  </label>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">Rp</p>
                    <input
                      type="number"
                      name="minimum_investment_amount"
                      value={formData.minimum_investment_amount}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Masukkan Nominal"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="discount">
                    Count Investment
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      name="count_investment"
                      value={formData.count_investment}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Masukkan Nominal"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="description">
                    Keterangan
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full h-32"
                    placeholder="Ikan bandeng adalah ikan, memiliki banyak nutrisi yang baik bagi tubuh"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {!fileName && (
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                      )}
                      {fileName ? (
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          {fileName}
                        </p>
                      ) : (
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>
                        </p>
                      )}
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleChange}
                      name="picture_file"
                    />
                  </label>
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
                    className="px-6 py-2 border text-[#8899A8] rounded-lg hover:bg-netral-300   hover:text-white"
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

export default TambakPage;
