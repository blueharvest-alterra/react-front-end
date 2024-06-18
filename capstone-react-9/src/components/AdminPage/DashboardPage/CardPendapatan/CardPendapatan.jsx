import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://blueharvest.irvansn.com/v1/dashboards/admin';

export default function CardPendapatan() {
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzI3MzU3fQ.DXbwfGAdSXqg6A7DriN1tjff79Jc6iN9TokHzVFfpN8"
        const response = await axios.get(API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data.status && response.data.data) {
          setTotalPendapatan(response.data.data.earning_last_thirty_days);
        } else {
          setError('Failed to fetch data. Please check your API or backend.');
        }
      } catch (error) {
        setError('An error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div
    style={{ height: '124px', width: '375px' }}
    className="flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start"
  >
    <div className="flex justify-between items-center self-stretch h-11">
      <div>
        <h1 className="text-sm font-semibold">Pemasukan</h1>
      </div>
      <div className="">
        <a className="text-primary-90 rounded-lg" href="">
          Detail
        </a>
      </div>
    </div>
    <div
      style={{ height: '59px', width: '318px' }}
      className="flex flex-col items-start self-stretch gap-1"
    >
  </div><div>Memuat data pendapatan...</div>;
      {/* <h1 className="text-xl font-bold leading-7">
        Rp {totalPendapatan.toLocaleString('id-ID')}
      </h1> */}
      <h1 className="text-sm font-medium text-netral-90">
        Pemasukan dalam 30 hari terakhir
      </h1>
    </div>
  }

  if (error) {
    return <div
    style={{ height: '124px', width: '375px' }}
    className="flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start"
  >
    <div className="flex justify-between items-center self-stretch h-11">
      <div>
        <h1 className="text-sm font-semibold">Pemasukan</h1>
      </div>
      <div className="">
        <a className="text-primary-90 rounded-lg" href="">
          Detail
        </a>
      </div>
    </div>
    <div
      style={{ height: '59px', width: '318px' }}
      className="flex flex-col items-start self-stretch gap-1"
    >
      <h1 className="text-xl font-bold leading-7">
        Rp {error}
      </h1>
      <h1 className="text-sm font-medium text-netral-90">
        Pemasukan dalam 30 hari terakhir
      </h1>
    </div>
  </div>;
  }

  return (
    <div
      style={{ height: '124px', width: '375px' }}
      className="flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start"
    >
      <div className="flex justify-between items-center self-stretch h-11">
        <div>
          <h1 className="text-sm font-semibold">Pemasukan</h1>
        </div>
        <div className="">
          <a className="text-primary-90 rounded-lg" href="">
            Detail
          </a>
        </div>
      </div>
      <div
        style={{ height: '59px', width: '318px' }}
        className="flex flex-col items-start self-stretch gap-1"
      >
        <h1 className="text-xl font-bold leading-7">
          Rp {totalPendapatan.toLocaleString('id-ID')}
        </h1>
        <h1 className="text-sm font-medium text-netral-90">
          Pemasukan dalam 30 hari terakhir
        </h1>
      </div>
    </div>
  );
}
