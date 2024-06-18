import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardTotalProduk() {
  const [totalProduk, setTotalProduk] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzI3MzU3fQ.DXbwfGAdSXqg6A7DriN1tjff79Jc6iN9TokHzVFfpN8"
        const response = await axios.get('https://blueharvest.irvansn.com/v1/dashboards/admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status && response.data.data) {
          setTotalProduk(response.data.data.product_sold_last_thirty_days);
        } else {
          console.error('Error fetching data:');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '124px', width:'375px' }} className='flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-sm font-semibold'>Total Produk</h1>
          </div>
          <div className=''>
            <a className='text-primary-90 rounded-lg' href="">Detail</a>
          </div>
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <h1 className='text-xl font-bold leading-7'>{totalProduk} Pcs</h1>
          <h1 className='text-sm font-medium text-netral-90'>Produk terjual dalam 30 hari terakhir</h1>
        </div>
    </div>
  );
}
