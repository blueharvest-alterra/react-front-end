import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoAir from '../../../../assets/logo-air.svg';
import LogoOksigen from '../../../../assets/logo-oksigen.svg';
import LogoSuhu from '../../../../assets/logo-suhu.svg';

export default function CardMonitoring() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4NzgwNDc5fQ.dxb-oc9QncUxBLZ9pE2HKcG18B7i97qTUrYLlFpeTCc';
      try {
        const response = await axios.get('https://blueharvest.irvansn.com/v1/farmmonitors/farm/abeb5ea5-e83f-43e5-bb05-e5cde9e5c5b1', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        if (response.data.status) {
          setData(response.data.data['farm-monitor'][0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getStatus = (type, value) => {
    if (type === 'temperature') {
      if (value >= 28 && value <= 30) return 'Sangat Bagus';
      if (value < 28 && value >= 24) return 'Kurang Bagus';
      return 'Sangat Buruk';
    }
    if (type === 'ph') {
      if (value >= 6.5 && value <= 8.5) return 'Sangat Bagus';
      if (value < 6.5 && value >= 5.5) return 'Kurang Bagus';
      return 'Sangat Buruk';
    }
    if (type === 'dissolved_oxygen') {
      if (value >= 7) return 'Sangat Bagus';
      if (value < 7 && value >= 4) return 'Kurang Bagus';
      return 'Sangat Buruk';
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex gap-4 ml-1 mt-4 mb-4">
      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Suhu Air Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoSuhu} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>{data.temperature.toFixed(2)} °C</p>
          <p className='text-sm font-medium'>{getStatus('temperature', data.temperature)}</p>
        </div>
      </div>

      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Ph Air Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoAir} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>{data.ph.toFixed(2)}</p>
          <p className='text-sm font-medium'>{getStatus('ph', data.ph)}</p>
        </div>
      </div>

      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Oksigen Terlarut Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoOksigen} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>{data.dissolved_oxygen.toFixed(2)} %</p>
          <p className='text-sm font-medium'>{getStatus('dissolved_oxygen', data.dissolved_oxygen)}</p>
        </div>
      </div>
    </div>
  );
}
