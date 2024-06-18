import React from 'react';
import CardManfaat1 from "../../../../assets/card-manfaat1.jpeg";
import CardManfaat2 from "../../../../assets/card-manfaat2.jpeg";
import CardManfaat3 from "../../../../assets/card-manfaat3.jpeg";

export default function CardBenefit() {
  return (
    <div className="h-screen">
      <div className="text-center flex flex-col items-center justify-center h-full mx-auto gap-4 text-white" style={{ marginTop: '-100px' }}>
        <div className="flex"> 
          <div className="max-w-[372px] max-h-[491px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
            <img className="rounded-t-lg" src={CardManfaat1} alt="card" style={{  width: '350px', height: '330px' }} />
            <div className="p-5">
              <h5 className="mb-2 text-[26px] font-[700] text-primary-90 dark:text-white">
                Ketahanan Produk
              </h5>
              <p className="mb-12 text-center text-[20px] font-[600] text-darker-90 dark:text-gray-400">
                Pasokan Protein Berkelanjutan
              </p>
            </div>
          </div>
          <div className="max-w-[372px] max-h-[491px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ marginLeft: '95px', marginRight: '95px'}}> 
            <img className="rounded-t-lg" src={CardManfaat2} alt="card" style={{  width: '350px', height: '330px' }}/>
            <div className="p-5">
              <h5 className="mb-2 text-[26px] font-[700] text-primary-90 dark:text-white">
                Melestarikan Lingkungan
              </h5>
              <p className="mb-12 text-center text-[20px] font-[600] text-darker-90 dark:text-gray-400">
                Menjaga Keseimbangan Alam
              </p>
            </div>
          </div>
          <div className="max-w-[372px] max-h-[491px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> 
            <img className="rounded-t-lg " src={CardManfaat3} alt="card" style={{  width: '361px', height: '330px' }}/>
            <div className="p-5">
              <h5 className="mb-2 text-[26px] font-[700] text-primary-90 dark:text-white">
                Penggerak Ekonomi
              </h5>
              <p className="mb-12 text-center text-[20px] font-[600] text-darker-90 dark:text-gray-400">
                Mendorong Pertumbuhan Ekonomi 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
