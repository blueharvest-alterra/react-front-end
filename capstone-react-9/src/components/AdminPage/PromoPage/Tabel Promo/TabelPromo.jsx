import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Pagination from "../../../Organism/Pagination/Pagination";

export default function TabelPromo() {
  const [promos, setPromos] = useState([]);
  const [popupVisible, setPopupVisible] = useState(null);
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

  const handleDelete = async (promoId) => {
    console.log(promoId);
    try {
      await axios.delete(
        `https://blueharvest.irvansn.com/v1/promos/${promoId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPromos((prevPromos) =>
        prevPromos.filter((promo) => promo.id !== promoId)
      );
    } catch (error) {
      console.error("Error deleting promo:", error);
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
                  Nama Promo
                </th>
                <th scope="col" className="px-6 py-3">
                  Kode Voucher
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
          <div className="bg-white rounded-lg w-[50%] p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Edit Voucher</h2>
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
                    className="px-6 py-2 border text-[#8899A8] rounded-lg hover:bg-netral-30 hover:text-white"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// import React, { useEffect, useState, useRef } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import Pagination from "../../../Organism/Pagination/Pagination";

// export default function TabelPromo() {
//   const [promos, setPromos] = useState([]);
//   const [popupVisible, setPopupVisible] = useState(null);
//   const popupRef = useRef(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     code: "",
//     status: "",
//     amount: "",
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(promos.length / itemsPerPage);
//   const currentItems = promos.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzgwNDc5fQ.dxb-oc9QncUxBLZ9pE2HKcG18B7i97qTUrYLlFpeTCc";

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           "https://blueharvest.irvansn.com/v1/promos",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setPromos(response.data.data.promos);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   const handleIconClick = (promoId) => {
//     setPopupVisible((prev) => (prev === promoId ? null : promoId));
//   };

//   const handleClickOutside = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       setPopupVisible(null);
//     }
//   };

//   const handleEditClick = (promo) => {
//     setFormData({
//       name: promo.name,
//       code: promo.code,
//       amount: promo.amount,
//       status: promo.status,
//       id: promo.id,
//     });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "checkbox" ? (checked ? value : "") : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const updatedFormData = {
//       ...formData,
//       amount: parseInt(formData.amount),
//     };
//     try {
//       const response = await axios.put(
//         `https://blueharvest.irvansn.com/v1/promos/${updatedFormData.id}`,
//         updatedFormData
//       );
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error updating promo:", error);
//     }
//   };

//   const handleDelete = async (promoId) => {
//     try {
//       const response = await axios.delete(
//         `https://blueharvest.irvansn.com/v1/promos/${promoId}`
//       );
//       setPromos((prevPromos) =>
//         prevPromos.filter((promo) => promo.id !== promoId)
//       );
//     } catch (error) {
//       console.error("Error deleting promo:", error);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <div className="flex justify-center items-center py-4">
//           <div className="loader"></div>
//           <p className="text-gray-500 text-lg">Memuat data...</p>
//         </div>
//       ) : (
//         <>
//           {promos.length === 0 ? (
//             <div className="text-center py-4">
//               <p className="text-gray-500 text-lg">Data belum ada</p>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left rtl:text-right text-[#1B1B1B]">
//                 <thead className="text-xs text-[#1B1B1B] uppercase border-b border-[#8C8C8C]">
//                   <tr>
//                     <th scope="col" className="px-6 py-3">
//                       No
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Nama Promo
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Kode Voucher
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Status
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                       Aksi
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentItems.map((promo, index) => (
//                     <tr key={promo.id} className="border-b border-[#8C8C8C]">
//                       <th
//                         scope="row"
//                         className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//                       >
//                         {(currentPage - 1) * itemsPerPage + index + 1}
//                       </th>
//                       <td className="px-6 py-4">{promo.name}</td>
//                       <td className="px-6 py-4">{promo.code}</td>
//                       <td className="px-6 py-4">
//                         <span
//                           className={`${
//                             promo.status === "available"
//                               ? "bg-[#74F1C4]"
//                               : "bg-[#FF3B3B]"
//                           } inline-block px-2 py-1 rounded-2xl`}
//                         >
//                           {promo.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 flex space-x-2 relative">
//                         <button
//                           onClick={() => handleIconClick(promo.id)}
//                           className="text-gray-800"
//                         >
//                           <svg
//                             className="w-6 h-6 text-gray-800"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               stroke="currentColor"
//                               strokeLinecap="round"
//                               strokeWidth="2.5"
//                               d="M12 6h.01M12 12h.01M12 18h.01"
//                             />
//                           </svg>
//                         </button>
//                         {popupVisible === promo.id && (
//                           <div
//                             ref={popupRef}
//                             className="absolute -top-10 right-14 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
//                           >
//                             <ul>
//                               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                                 Lihat
//                               </li>
//                               <li
//                                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                 onClick={() => handleEditClick(promo)}
//                               >
//                                 Edit
//                               </li>
//                               <li>
//                                 <button
//                                   onClick={() =>
//                                     Swal.fire({
//                                       title: "Hapus File?",
//                                       text: "Konfirmasi ini akan menghapus file yang dipilih dan semua data terkait secara permanen. Tindakan ini tidak dapat dibatalkan.",
//                                       showCancelButton: true,
//                                       confirmButtonColor: "#0075EB",
//                                       confirmButtonText: "Hapus",
//                                     }).then((result) => {
//                                       if (result.isConfirmed) {
//                                         handleDelete(promo.id);
//                                       }
//                                     })
//                                   }
//                                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
//                                 >
//                                   Hapus
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//               />
//             </div>
//           )}
//         </>
//       )}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Promo</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Nama Promo</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Kode Voucher</label>
//                 <input
//                   type="text"
//                   name="code"
//                   value={formData.code}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Nominal</label>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={formData.amount}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Status</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 >
//                   <option value="">Pilih status</option>
//                   <option value="available">Tersedia</option>
//                   <option value="unavailable">Tidak tersedia</option>
//                 </select>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
