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

const url = "https://blueharvest.irvansn.com/v1/products"

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [products, setProducts] = useState()

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
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
  
    const products = await response.json();
    return products;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const products = await fetchProducts(token);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
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
              <td className="border-b border-black py-2 px-4 text-lg ">{item.produk}</td>
              <td className="border-b border-black py-2 px-4 text-lg">{item.harga}</td>
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
                <button className="text-blue-500 hover:underline">
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
