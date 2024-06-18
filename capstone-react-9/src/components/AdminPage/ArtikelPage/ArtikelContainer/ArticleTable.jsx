import React, { useEffect, useState } from "react";
import { getToken } from "../../../../service/accessCookie";

const Product = [
  {
    no: "1",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "26/4/2024",
  },
  {
    no: "2",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "27/4/2024",
  },
  {
    no: "3",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "28/4/2024",
  },
  {
    no: "4",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "29/4/2024",
  },
  {
    no: "5",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "30/4/2024",
  },
  {
    no: "6",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "1/5/2024",
  },
  {
    no: "7",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "2/5/2024",
  },
  {
    no: "8",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "3/5/2024",
  },
  {
    no: "9",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "4/5/2024",
  },
  {
    no: "10",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "5/5/2024",
  },
  {
    no: "11",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "6/5/2024",
  },
  {
    no: "12",
    judul: "Tata Cara Budidaya Perikanan",

    tanggal: "7/5/2024",
  },
  {
    no: "13",
    judul: "Tata Cara Budidaya Perikanan",

    tanggal: "8/5/2024",
  },
  {
    no: "14",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "9/5/2024",
  },
  {
    no: "15",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "10/5/2024",
  },
  {
    no: "16",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "11/5/2024",
  },
  {
    no: "17",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "12/5/2024",
  },
  {
    no: "18",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "13/5/2024",
  },
  {
    no: "19",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "14/5/2024",
  },
  {
    no: "20",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "15/5/2024",
  },
  {
    no: "21",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "16/5/2024",
  },
  {
    no: "22",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "17/5/2024",
  },
  {
    no: "23",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "18/5/2024",
  },
  {
    no: "24",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "19/5/2024",
  },
  {
    no: "25",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "20/5/2024",
  },
  {
    no: "26",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "21/5/2024",
  },
  {
    no: "27",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "22/5/2024",
  },
  {
    no: "28",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "23/5/2024",
  },
  {
    no: "29",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "24/5/2024",
  },
  {
    no: "30",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "25/5/2024",
  },
  {
    no: "31",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "26/5/2024",
  },
  {
    no: "32",
    judul: "Tata Cara Budidaya Perikanan",
    tanggal: "27/5/2024",
  },
];

const ArticleTable = () => {
  const [article, setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(article.length / itemsPerPage);

  const currentItems = article.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchArticel = async () => {
      const token = getToken()
      console.log(token)
      try {
        const response = await fetch(
          "https://blueharvest.irvansn.com/v1/articles",
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        const data = await response.json();
        setArticle(data.data.articles)
      } catch (error) {
        console.log("error fetch artikel");
      }
    };
    fetchArticel();
  }, []);


  console.log(article)

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black">
            <th className="text-start p-4 w-28">No</th>
            <th className="text-start p-4 w-[600px] ">Judul</th>
            <th className="text-start p-4">Tanggal</th>
            <th className="text-start p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="border-b border-black py-6 px-4 text-lg ">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="border-b border-black py-6 px-4 text-lg ">
                {item.title}
              </td>
              <td className="border-b border-black py-6 px-4 text-lg">
                {Product[0].tanggal}
              </td>
              <td className="border-b border-black py-6 pl-7 text-lg">
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

export default ArticleTable;
