import React, { useEffect, useState } from "react";
import { getToken } from "../../../../service/accessCookie";

const Product = [
  {
    no: "1",
    produk: "Udang",
    harga: "30.000",
    persediaan: "60kg",
    terjual: "30kg",
    tanggal: "26/4/2024",
  },
  {
    no: "2",
    produk: "Ikan",
    harga: "25.000",
    persediaan: "80kg",
    terjual: "40kg",
    tanggal: "27/4/2024",
  },
  {
    no: "3",
    produk: "Kerang",
    harga: "20.000",
    persediaan: "50kg",
    terjual: "25kg",
    tanggal: "28/4/2024",
  },
  {
    no: "4",
    produk: "Kepiting",
    harga: "35.000",
    persediaan: "70kg",
    terjual: "35kg",
    tanggal: "29/4/2024",
  },
  {
    no: "5",
    produk: "Lobster",
    harga: "40.000",
    persediaan: "30kg",
    terjual: "15kg",
    tanggal: "30/4/2024",
  },
  {
    no: "6",
    produk: "Cumi-cumi",
    harga: "22.000",
    persediaan: "90kg",
    terjual: "45kg",
    tanggal: "1/5/2024",
  },
  {
    no: "7",
    produk: "Gurita",
    harga: "28.000",
    persediaan: "55kg",
    terjual: "27kg",
    tanggal: "2/5/2024",
  },
  {
    no: "8",
    produk: "Bawal",
    harga: "18.000",
    persediaan: "100kg",
    terjual: "50kg",
    tanggal: "3/5/2024",
  },
  {
    no: "9",
    produk: "Salmon",
    harga: "50.000",
    persediaan: "40kg",
    terjual: "20kg",
    tanggal: "4/5/2024",
  },
  {
    no: "10",
    produk: "Tuna",
    harga: "45.000",
    persediaan: "60kg",
    terjual: "30kg",
    tanggal: "5/5/2024",
  },
  {
    no: "11",
    produk: "Sarden",
    harga: "15.000",
    persediaan: "80kg",
    terjual: "40kg",
    tanggal: "6/5/2024",
  },
  {
    no: "12",
    produk: "Lele",
    harga: "12.000",
    persediaan: "120kg",
    terjual: "60kg",
    tanggal: "7/5/2024",
  },
  {
    no: "13",
    produk: "Patin",
    harga: "13.000",
    persediaan: "110kg",
    terjual: "55kg",
    tanggal: "8/5/2024",
  },
  {
    no: "14",
    produk: "Bandeng",
    harga: "14.000",
    persediaan: "70kg",
    terjual: "35kg",
    tanggal: "9/5/2024",
  },
  {
    no: "15",
    produk: "Gabus",
    harga: "16.000",
    persediaan: "65kg",
    terjual: "32kg",
    tanggal: "10/5/2024",
  },
  {
    no: "16",
    produk: "Belut",
    harga: "19.000",
    persediaan: "75kg",
    terjual: "37kg",
    tanggal: "11/5/2024",
  },
  {
    no: "17",
    produk: "Kakap",
    harga: "32.000",
    persediaan: "85kg",
    terjual: "42kg",
    tanggal: "12/5/2024",
  },
  {
    no: "18",
    produk: "Tongkol",
    harga: "17.000",
    persediaan: "50kg",
    terjual: "25kg",
    tanggal: "13/5/2024",
  },
  {
    no: "19",
    produk: "Mujair",
    harga: "11.000",
    persediaan: "95kg",
    terjual: "47kg",
    tanggal: "14/5/2024",
  },
  {
    no: "20",
    produk: "Bawal",
    harga: "21.000",
    persediaan: "60kg",
    terjual: "30kg",
    tanggal: "15/5/2024",
  },
  {
    no: "21",
    produk: "Salem",
    harga: "25.000",
    persediaan: "70kg",
    terjual: "35kg",
    tanggal: "16/5/2024",
  },
  {
    no: "22",
    produk: "Tongkol",
    harga: "23.000",
    persediaan: "40kg",
    terjual: "20kg",
    tanggal: "17/5/2024",
  },
  {
    no: "23",
    produk: "Tenggiri",
    harga: "27.000",
    persediaan: "65kg",
    terjual: "32kg",
    tanggal: "18/5/2024",
  },
  {
    no: "24",
    produk: "Kerapu",
    harga: "29.000",
    persediaan: "50kg",
    terjual: "25kg",
    tanggal: "19/5/2024",
  },
  {
    no: "25",
    produk: "Bawal",
    harga: "24.000",
    persediaan: "80kg",
    terjual: "40kg",
    tanggal: "20/5/2024",
  },
  {
    no: "26",
    produk: "Salem",
    harga: "26.000",
    persediaan: "70kg",
    terjual: "35kg",
    tanggal: "21/5/2024",
  },
  {
    no: "27",
    produk: "Tenggiri",
    harga: "28.000",
    persediaan: "55kg",
    terjual: "27kg",
    tanggal: "22/5/2024",
  },
  {
    no: "28",
    produk: "Kerapu",
    harga: "30.000",
    persediaan: "60kg",
    terjual: "30kg",
    tanggal: "23/5/2024",
  },
  {
    no: "29",
    produk: "Kakap",
    harga: "33.000",
    persediaan: "65kg",
    terjual: "32kg",
    tanggal: "24/5/2024",
  },
  {
    no: "30",
    produk: "Patin",
    harga: "14.000",
    persediaan: "110kg",
    terjual: "55kg",
    tanggal: "25/5/2024",
  },
  {
    no: "31",
    produk: "Bandeng",
    harga: "15.000",
    persediaan: "70kg",
    terjual: "35kg",
    tanggal: "26/5/2024",
  },
  {
    no: "32",
    produk: "Gabus",
    harga: "18.000",
    persediaan: "65kg",
    terjual: "32kg",
    tanggal: "27/5/2024",
  },
];

const url = "https://blueharvest.irvansn.com/v1/products";

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [products, setProducts] = useState();
  const [isModalDeleteProductOpen, setIsModalDeleteProductOpen] =
    useState(false);

  const totalPages = Math.ceil(Product.length / itemsPerPage);

  const currentItems = Product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchProducts = async (token) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    return products;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const products = await fetchProducts(token);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const openModalDeleteProduct = () => {
    setIsModalDeleteProductOpen(true);
  };

  const closeModalDeleteProduct = () => {
    setIsModalDeleteProductOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      {isModalDeleteProductOpen && (
        <div className="fixed p-6 inset-0 z-50 bg-[#8C8C8C] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-[612px] w-full my-10 max-h-screen overflow-y-auto">
            <div className="flex justify-end">
              <button  onClick={closeModalDeleteProduct}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.815 27.229C28.9192 27.3331 29.0018 27.4567 29.0581 27.5928C29.1145 27.7289 29.1435 27.8747 29.1435 28.022C29.1435 28.1693 29.1145 28.3151 29.0581 28.4512C29.0018 28.5872 28.9192 28.7109 28.815 28.815C28.7109 28.9192 28.5872 29.0018 28.4512 29.0581C28.3151 29.1145 28.1693 29.1435 28.022 29.1435C27.8747 29.1435 27.7289 29.1145 27.5928 29.0581C27.4567 29.0018 27.3331 28.9192 27.229 28.815L17.9341 19.5187L8.63914 28.815C8.42882 29.0253 8.14356 29.1435 7.84611 29.1435C7.54867 29.1435 7.26341 29.0253 7.05309 28.815C6.84277 28.6047 6.72461 28.3194 6.72461 28.022C6.72461 27.7246 6.84277 27.4393 7.05309 27.229L16.3494 17.9341L7.05309 8.63914C6.84277 8.42882 6.72461 8.14356 6.72461 7.84611C6.72461 7.54867 6.84277 7.26341 7.05309 7.05309C7.26341 6.84277 7.54867 6.72461 7.84611 6.72461C8.14356 6.72461 8.42882 6.84277 8.63914 7.05309L17.9341 16.3494L27.229 7.05309C27.4393 6.84277 27.7246 6.72461 28.022 6.72461C28.3194 6.72461 28.6047 6.84277 28.815 7.05309C29.0253 7.26341 29.1435 7.54867 29.1435 7.84611C29.1435 8.14356 29.0253 8.42882 28.815 8.63914L19.5187 17.9341L28.815 27.229Z"
                    fill="#343330"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-[32px] font-semibold mb-7 mt-[30px]">
                Hapus File?
              </h1>
              <p className="max-w-[400px] text-xl mb-[51px]">
                Konfirmasi ini akan menghapus file yang dipilih dan semua data
                terkait secara permanen. Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex gap-9 mb-[67px]">
                <button className="flex items-center gap-[13px] bg-primary-90 text-white rounded-lg py-3 px-6">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2812 2.75H9.875V2.21875C9.875 1.28125 9.125 0.53125 8.1875 0.53125H5.78125C4.84375 0.53125 4.09375 1.28125 4.09375 2.21875V2.75H1.6875C0.78125 2.75 0.03125 3.5 0.03125 4.40625V5.34375C0.03125 6.03125 0.4375 6.59375 1.03125 6.84375L1.53125 17.6562C1.59375 18.6875 2.40625 19.4687 3.4375 19.4687H10.4687C11.5 19.4687 12.3438 18.6562 12.375 17.6562L12.9375 6.8125C13.5312 6.5625 13.9375 5.96875 13.9375 5.3125V4.375C13.9375 3.5 13.1875 2.75 12.2812 2.75ZM5.53125 2.21875C5.53125 2.0625 5.65625 1.9375 5.8125 1.9375H8.21875C8.375 1.9375 8.5 2.0625 8.5 2.21875V2.75H5.5625V2.21875H5.53125ZM1.46875 4.40625C1.46875 4.28125 1.5625 4.15625 1.71875 4.15625H12.2812C12.4062 4.15625 12.5312 4.25 12.5312 4.40625V5.34375C12.5312 5.46875 12.4375 5.59375 12.2812 5.59375H1.71875C1.59375 5.59375 1.46875 5.5 1.46875 5.34375V4.40625ZM10.5 18.0625H3.5C3.21875 18.0625 3 17.8437 3 17.5937L2.5 7H11.5312L11.0312 17.5937C11 17.8437 10.7812 18.0625 10.5 18.0625Z"
                      fill="white"
                    />
                    <path
                      d="M7 10.125C6.625 10.125 6.28125 10.4375 6.28125 10.8437V14.8125C6.28125 15.1875 6.59375 15.5312 7 15.5312C7.375 15.5312 7.71875 15.2188 7.71875 14.8125V10.8437C7.71875 10.4375 7.375 10.125 7 10.125Z"
                      fill="white"
                    />
                    <path
                      d="M9.49993 10.7499C9.09368 10.7187 8.78118 10.9999 8.74993 11.4062L8.56243 14.1562C8.53118 14.5312 8.81243 14.8749 9.21868 14.9062C9.24993 14.9062 9.24993 14.9062 9.28118 14.9062C9.65618 14.9062 9.96868 14.6249 9.96868 14.2499L10.1562 11.4999C10.1562 11.0937 9.87493 10.7812 9.49993 10.7499Z"
                      fill="white"
                    />
                    <path
                      d="M4.46896 10.7499C4.09395 10.7812 3.78145 11.1249 3.8127 11.4999L4.03146 14.2499C4.06271 14.6249 4.37521 14.9062 4.71896 14.9062C4.75021 14.9062 4.75021 14.9062 4.78146 14.9062C5.15646 14.8749 5.46896 14.5312 5.43771 14.1562L5.21896 11.4062C5.21896 10.9999 4.87521 10.7187 4.46896 10.7499Z"
                      fill="white"
                    />
                  </svg>
                  Hapus
                </button>
                <button onClick={closeModalDeleteProduct} className="px-9 py-3 border border-primary-90 rounded-lg">
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="text-start p-4">No</th>
            <th className="text-start p-4">Produk</th>
            <th className="text-start p-4">Harga</th>
            <th className="text-start p-4">Persediaan</th>
            <th className="text-start p-4">Terjual</th>
            <th className="text-start p-4">Tanggal</th>
            <th className="text-start p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" style={{ height: "19px" }}></td>
          </tr>
        </tbody>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="border-b border-black py-[12px] px-4 text-lg ">
                {item.no}
              </td>
              <td className="border-b border-black py-2 px-4 text-lg ">
                {item.produk}
              </td>
              <td className="border-b border-black py-2 px-4 text-lg">
                {item.harga}
              </td>
              <td className="border-b border-black py-2 px-4 text-lg">
                {item.persediaan}
              </td>
              <td className="border-b border-black py-2 px-4 text-lg">
                {item.terjual}
              </td>
              <td className="border-b border-black py-2 px-4 text-lg">
                {item.tanggal}
              </td>
              <td className="border-b border-black py-2 pl-7 text-lg">
                <button
                  onClick={openModalDeleteProduct}
                  className="text-blue-500 hover:underline"
                >
                  <svg
                    width="6"
                    height="24"
                    viewBox="0 0 6 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 20.75C5.5 19.3693 4.38071 18.25 3 18.25C1.61929 18.25 0.5 19.3693 0.5 20.75C0.5 22.1307 1.61929 23.25 3 23.25C4.38071 23.25 5.5 22.1307 5.5 20.75Z"
                      fill="#1A2227"
                    />
                    <path
                      d="M5.5 12C5.5 10.6193 4.38071 9.5 3 9.5C1.61929 9.5 0.5 10.6193 0.5 12C0.5 13.3807 1.61929 14.5 3 14.5C4.38071 14.5 5.5 13.3807 5.5 12Z"
                      fill="#1A2227"
                    />
                    <path
                      d="M5.5 3.25C5.5 1.86929 4.38071 0.750001 3 0.750001C1.61929 0.750001 0.5 1.86929 0.5 3.25C0.5 4.63071 1.61929 5.75 3 5.75C4.38071 5.75 5.5 4.63071 5.5 3.25Z"
                      fill="#1A2227"
                    />
                  </svg>
                </button>
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
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center space-x-2 border p-3 rounded-xl">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="p-2 border rounded-lg"
        disabled={currentPage <= 1}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1782 16.1148C12.0095 16.1148 11.8407 16.0586 11.7282 15.918L5.37197 9.44922C5.11885 9.19609 5.11885 8.80234 5.37197 8.54922L11.7282 2.08047C11.9813 1.82734 12.3751 1.82734 12.6282 2.08047C12.8813 2.33359 12.8813 2.72734 12.6282 2.98047L6.72197 8.99922L12.6563 15.018C12.9095 15.2711 12.9095 15.6648 12.6563 15.918C12.4876 16.0305 12.347 16.1148 12.1782 16.1148Z"
            fill="#637381"
          />
        </svg>
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === pageNumber ? "bg-blue-500 text-white" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="p-2 border rounded-lg"
        disabled={currentPage >= totalPages}
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.821973 15.1148C0.653223 15.1148 0.512598 15.0586 0.371973 14.9461C0.118848 14.693 0.118848 14.2992 0.371973 14.0461L6.27822 7.99922L0.371973 1.98047C0.118848 1.72734 0.118848 1.33359 0.371973 1.08047C0.625098 0.827344 1.01885 0.827344 1.27197 1.08047L7.62822 7.54922C7.88135 7.80234 7.88135 8.19609 7.62822 8.44922L1.27197 14.918C1.15947 15.0305 0.990723 15.1148 0.821973 15.1148Z"
            fill="#637381"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductTable;
