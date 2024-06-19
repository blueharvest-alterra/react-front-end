import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Pagination from "../../../Organism/Pagination/Pagination";

export default function TabelTambak() {
  const [promos, setPromos] = useState([]);
  const [popupVisible, setPopupVisible] = useState(null);
    const [fileName, setFileName] = useState("");
  const popupRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    code: "",
    status: "",
    amount: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(promos.length / itemsPerPage);
  const currentItems = promos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzgwNDc5fQ.dxb-oc9QncUxBLZ9pE2HKcG18B7i97qTUrYLlFpeTCc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://blueharvest.irvansn.com/v1/promos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPromos(response.data.data.promos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleIconClick = (promoId) => {
    setPopupVisible((prev) => (prev === promoId ? null : promoId));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(null);
    }
  };

  const handleEditClick = (promo) => {
    setFormData({
      name: promo.name,
      code: promo.code,
      amount: promo.amount,
      status: promo.status,
      id: promo.id,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

    const handleFileChange = (event) => {
      setFileName(event.target.files[0].name);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      amount: parseInt(formData.amount),
    };
    try {
      const response = await axios.put(
        `https://blueharvest.irvansn.com/v1/promos/${updatedFormData.id}`,
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating promo:", error);
    }
  };

  // const handleDelete = async (promoId) => {
  //   console.log(promoId);
  //   try {
  //     await axios.delete(
  //       `https://blueharvest.irvansn.com/v1/promos/${promoId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setPromos((prevPromos) =>
  //       prevPromos.filter((promo) => promo.id !== promoId)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting promo:", error);
  //   }
  // };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {promos.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500 text-lg">Data belum ada</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-[#1B1B1B]">
            <thead className="text-xs text-[#1B1B1B] uppercase border-b border-[#8C8C8C]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Tambak
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga Awal
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((promo, index) => (
                <tr key={promo.id} className="border-b border-[#8C8C8C]">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </th>
                  <td className="px-6 py-4">{promo.name}</td>
                  <td className="px-6 py-4">{promo.code}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`${
                        promo.status === "available"
                          ? "bg-[#74F1C4]"
                          : "bg-[#FF3B3B]"
                      } inline-block px-2 py-1 rounded-2xl`}
                    >
                      {promo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex space-x-2 relative">
                    <button
                      onClick={() => handleIconClick(promo.id)}
                      className="text-gray-800"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
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
                          strokeWidth="2.5"
                          d="M12 6h.01M12 12h.01M12 18h.01"
                        />
                      </svg>
                    </button>
                    {popupVisible === promo.id && (
                      <div
                        ref={popupRef}
                        className="absolute -top-10 right-14 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                      >
                        <ul>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Lihat
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleEditClick(promo)}
                          >
                            Edit
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                Swal.fire({
                                  title: "Hapus File?",
                                  text: "Konfirmasi ini akan menghapus file yang dipilih dan semua data terkait secara permanen. Tindakan ini tidak dapat dibatalkan.",
                                  showCancelButton: true,
                                  confirmButtonColor: "#0075EB",
                                  confirmButtonText: "Hapus",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    handleDelete(promo.id);
                                  }
                                })
                              }
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                            >
                              Hapus
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-[35px] flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-[90%] p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Tambak</h2>
            </div>
            <div className="content">
              <form
                className="flex justify-between gap-5"
                onSubmit={handleSubmit}
              >
                <div className="w-2/4">
                  <div className="mb-5">
                    <label className="block text-lg mb-2" htmlFor="name">
                      Gambar
                    </label>
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
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                        )}
                        {fileName ? (
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            {fileName}
                          </p>
                        ) : (
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Masukkan Cover Gambar
                            </span>
                          </p>
                        )}
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  <div className="mb-5">
                    <label className="block text-lg mb-2" htmlFor="name">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                      placeholder="Nama Tambak"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-2" htmlFor="name">
                      Alamat
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                      placeholder="Alamat Tambak"
                      required
                    />
                  </div>
                </div>

                <div className="w-2/4">
                  <div className="mb-5">
                    <label className="block text-lg mb-2" htmlFor="discount">
                      Keterangan
                    </label>
                    <div className="flex items-center gap-4">
                      <textarea
                        name="amount"
                        value={formData.amount}
                        // onChange={handleChange}
                        className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full h-32"
                        placeholder="Ikan bandeng adalah ikan, memiliki banyak nutrisi yang baik bagi tubuh"
                        rows="100"
                        cols="50"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-[38px]">
                    <label className="block text-lg mb-2" htmlFor="discount">
                      Harga Awal
                    </label>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Rp</p>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        //   onChange={handleChange}
                        className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                        placeholder="Masukkan Nominal Harga"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg mb-2" htmlFor="name">
                      Hasil Panen
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
                      placeholder="Masukkan Jumlah Hasil Panen"
                      required
                    />
                    <div className="flex justify-end space-x-4 mt-16">
                      <button
                        type="submit"
                        className="px-6 py-2 w-56 bg-[#0075EB] text-white rounded-lg hover:bg-blue-700"
                      >
                        Simpan
                      </button>
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-6 py-2 border w-56 text-[#8899A8] rounded-lg hover:bg-netral-30 hover:text-white"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}