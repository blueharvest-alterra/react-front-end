import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'flowbite';
import { getToken } from '../../../../service/accessCookie';

export default function TabelTransaksi() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      try {
        let allTransactions = [];
        let page = 1;
        let totalPages = 1;
  
        while (page <= totalPages) {
          const response = await axios.get(`https://blueharvest.irvansn.com/v1/transactions?page=${page}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
  
          if (response.data.status) {
            const transactions = response.data.data.transactions;
            allTransactions = [...allTransactions, ...transactions];
  
            totalPages = response.data.data.totalPages || totalPages;
            page++;
          }
        }
        
        setTransactions(allTransactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const maxPageNumbers = 4;
    const totalPages = pageNumbers.length;
    let startPage, endPage;

    if (totalPages <= maxPageNumbers) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= maxPageNumbers - 1) {
        startPage = 1;
        endPage = maxPageNumbers;
      } else if (currentPage + maxPageNumbers - 1 >= totalPages) {
        startPage = totalPages - (maxPageNumbers - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + maxPageNumbers - 2;
      }
    }

    const pageNumbersToShow = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbersToShow.push(i);
    }

    return pageNumbersToShow;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'PAID':
        return 'text-draker-70 bg-succes-30 border-green-300';
      case 'UNPAID':
        return 'text-draker-70 bg-warning-30 border-warning-70';
      case 'CANCEL':
        return 'text-draker-70 bg-error-30 border-error-70';
      default:
        return '';
    }
  };

  return (
    <div className="relative mb-3 overflow-x-auto mt-3 bg-white shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-[#1B1B1B]">
        <thead className="text-xs text-[#1B1B1B] uppercase border-b border-[#8C8C8C]">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Produk</th>
            <th scope="col" className="px-6 py-3">Harga</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <tr key={transaction.id} className="border-b border-[#8C8C8C]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {indexOfFirstTransaction + index + 1}
              </th>
              <td className="px-6 py-4">{transaction.customer.full_name}</td>
              <td className="px-6 py-4">{new Date(transaction.transaction_details[0]?.date || Date.now()).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                {transaction.transaction_details.length > 0 ? transaction.transaction_details[0].product.name : 'N/A'}
              </td>
              <td className="px-6 py-4">
                {transaction.transaction_details.length > 0 ? transaction.transaction_details[0].total_price : 'N/A'}
              </td>
              <td className="px-6 py-4">
                <span className={`inline-block px-3 py-1 rounded-full border ${getStatusClass(transaction.payment.status)}`}>
                  {transaction.payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-[10px] flex justify-end">
        <Pagination 
          currentPage={currentPage} 
          totalPages={pageNumbers.length} 
          onPageChange={paginate} 
          prevPage={prevPage} 
          nextPage={nextPage} 
          renderPageNumbers={renderPageNumbers} 
        />
      </div>
    </div>
  );
}

const Pagination = ({ currentPage, totalPages, onPageChange, prevPage, nextPage, renderPageNumbers }) => {
  return (
    <div className="flex items-center space-x-2 border p-3 rounded-xl mr-3 mb-3">
      <button
        onClick={prevPage}
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
      {renderPageNumbers().map((pageNumber) => (
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
        onClick={nextPage}
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
            d="M0.821973 15.1148C0.653223 15.1148 0.512598 15.0586 0.371973 14.9461C0.118848 14.693 0.118848 14.2992 0.371973 14.0461L6.27822 7.99922L0.371973 1.95234C0.118848 1.69922 0.118848 1.30547 0.371973 1.05234C0.625098 0.799219 1.01885 0.799219 1.27197 1.05234L7.62822 7.52109C7.88135 7.77422 7.88135 8.16797 7.62822 8.42109L1.27197 14.8898C1.15948 15.0023 0.990723 15.1148 0.821973 15.1148Z"
            fill="#637381"
          />
        </svg>
      </button>
    </div>
  );
};
