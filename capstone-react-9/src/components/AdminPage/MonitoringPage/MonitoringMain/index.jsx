import React, { useState } from 'react';
import axios from 'axios';
import CardMonitoring from '../CardMonitoring';

export default function MonitoringMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-items-center">
    <div
    style={{ height: '275px', width: '1163px' }}
    className="py-6 px-14 rounded-2xl bg-white shadow-md"
    >
    <div className="flex flex-col">
    <h1 className="text-[26px] font-bold ml-12 mb-2">Monitoring Tambak</h1>
    <p className='text-[18px] ml-12 font-medium'>Tersewa</p>
    <div className='flex justify-center'>
    <CardMonitoring/>
    </div>
    
    </div>
    <div className='relative justify-end' style={{marginTop:'-230px', marginRight:'20px'}}>
    <button
             type="button"
             className="text-[#D1D5DB] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-[#D1D5DB] dark:hover:bg-blue-500 dark:focus:ring-blue-800 absolute top-0 right-0 mt-4 mr-4"
             onClick={handleEditClick}
           >
    Edit
    </button>
   
    </div>
    
    
    
    </div>
    

      {isModalOpen && (
        <div id="authentication-modal" className="fixed inset-0 z-50 flex items-center justify-center w-full p-4 overflow-y-auto h-full bg-gray-800 bg-opacity-75">
          <div className="relative w-full max-w-7xl p-4 max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Monitoring
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="laba">Laba</label>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-700 dark:text-gray-400 mr-2">Rp</span>
                      <input
                        type="text"
                        id="laba"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Masukkan Nominal"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="suhu-air">Suhu Air</label>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-700 dark:text-gray-400 mr-2">°C</span>
                      <input
                        type="text"
                        id="suhu-air"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Masukkan Nominal"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white" htmlFor="keterangan-suhu">Keterangan Suhu</label>
                    <input
                      type="text"
                      id="keterangan-suhu"
                      className="bg-gray-50 border py-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="kadar oksigen dalam air sangat bagus"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="ph-air">PH Air</label>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-700 dark:text-gray-400 mr-2">Ph</span>
                      <input
                        type="text"
                        id="ph-air"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Masukkan Nominal"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white" htmlFor="keterangan-ph">Keterangan PH</label>
                    <input
                      type="text"
                      id="keterangan-ph"
                      className="bg-gray-50 border py-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="kadar oksigen dalam air sangat bagus"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="oksigen-air">Oksigen Air</label>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-700 dark:text-gray-400 mr-2">%</span>
                      <input
                        type="text"
                        id="oksigen-air"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="kadar oksigen dalam air sangat bagus"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white" htmlFor="keterangan-oksigen">Keterangan Oksigen</label>
                    <input
                      type="text"
                      id="keterangan-oksigen"
                      className="bg-gray-50 border py-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="kadar oksigen dalam air sangat bagus"
                    />
                  </div>
                </form>
              </div>
              <div className="flex justify-end items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  className="mr-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={handleCloseModal}
                  style={{width: "212px"}}
                >
                  Simpan
                </button>
                <button
                  className="w-full text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600 dark:hover:border-gray-600 dark:focus:ring-blue-800"
                  type="button"
                  onClick={handleCloseModal}
                  style={{width: "212px"}}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
    }