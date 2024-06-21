import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Pagination from "../../../Organism/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function TabelTambak() {
  const [farms, setFarms] = useState([]);
  const [popupVisible, setPopupVisible] = useState(null);
  const popupRef = useRef(null);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    code: "",
    status: "",
    amount: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(farms.length / itemsPerPage);
  const currentItems = farms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://blueharvest.irvansn.com/v1/farms",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFarms(response.data.data.farms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleIconClick = (farmId) => {
    setPopupVisible((prev) => (prev === farmId ? null : farmId));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(null);
    }
  };
  const navigate = useNavigate();
  const handleEditClick = (farm) => {
    console.log(farm);
    navigate(`/tambak/edit/${farm.id}`);
    // setFormData({
    //   name: farm.name,
    //   code: farm.code,
    //   amount: farm.amount,
    //   status: farm.status,
    //   id: farm.id,
    // });
    // setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      amount: parseInt(formData.amount),
    };
    try {
      const response = await axios.put(
        `https://blueharvest.irvansn.com/v1/farms/${updatedFormData.id}`,
        updatedFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating farm:", error);
    }
  };

  const handleDelete = async (farmId) => {
    console.log(farmId);
    try {
      await axios.delete(
        `https://blueharvest.irvansn.com/v1/farms/${farmId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFarms((prevfarm) =>
        prevfarm.filter((farm) => farm.id !== farmId)
      );
    } catch (error) {
      console.error("Error deleting farm:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {farms.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500 text-lg">Data belum ada</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-[#1B1B1B]">
            <thead className="text-xs text-[#1B1B1B] uppercase border-b border-[#8C8C8C] text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Tambak
                </th>
                <th scope="col" className="px-6 py-3">
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga Awal
                </th>
                <th scope="col" className="px-6 py-3">
                  Gambar
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {currentItems.map((farm, index) => (
                <tr key={farm.id} className="border-b border-[#8C8C8C]">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 w-[20%]">{farm.title}</td>
                  <td className="px-6 py-4 w-[20%]">{farm.description}</td>
                  <td className="px-6 py-4 ">-</td>
                  <td className="px-6 py-4">
                    <img
                      src={farm.picture}
                      className="w-36 max-w-xs h-auto max-h-52 mx-auto"
                    />
                  </td>

                  <td className="px-6 py-4">
                    {/* <span
                      className={`${
                        farm.status === "available"
                          ? "bg-[#74F1C4]"
                          : "bg-[#FF3B3B]"
                      } inline-block px-2 py-1 rounded-2xl`}
                    >
                      {farm.status}
                    </span> */}
                    <span
                      className={`${
                        farm.status === "available"
                      } inline-block px-2 py-1 rounded-2xl`}
                    >
                      -
                    </span>
                  </td>
                  <td className="flex space-x-2 relative h-52 max-h-52">
                    <button
                      onClick={() => handleIconClick(farm.id)}
                      className="text-gray-800 mx-auto"
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
                    {popupVisible === farm.id && (
                      <div
                        ref={popupRef}
                        className="absolute top-11 right-20 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                      >
                        <ul>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Lihat
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleEditClick(farm)}
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
                                    handleDelete(farm.id);
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
    </div>
  );
}
