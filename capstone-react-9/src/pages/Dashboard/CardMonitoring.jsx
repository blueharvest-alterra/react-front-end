import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoAir from '../../assets/logo-air.svg';
import LogoOksigen from "../../assets/logo-oksigen.svg";
import LogoSuhu from "../../assets/logo-suhu.svg";
import { getToken } from '../../service/accessCookie';
import { useParams } from "react-router-dom";

export default function CardMonitoring() {
  const [data, setData] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      try {
        const response = await axios.get(`https://blueharvest.irvansn.com/v1/farmmonitors/farm/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status && response.data.data['farm-monitor'].length > 0) {
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
    <div className="flex gap-4 mt-4 mb-4 w-full">
      <div
        style={{ height: "116px" }}
        className="flex flex-col w-[33%] bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start"
      >
        <div className="flex justify-between items-center self-stretch h-11">
          <div>
            <h1 className="text-[19px] font-bold">Suhu Air Dalam Tambak</h1>
          </div>
          <div className="relative">
            <img style={{ marginBottom: "-800px" }} src={LogoSuhu} alt="logo" />
          </div>
        </div>
        <div
          style={{ height: "59px" }}
          className="flex flex-col items-start self-stretch gap-1"
        >
          <p
            className="text-[20px] font-medium leading-7"
            style={{ marginTop: "-5px" }}
          >
            {data.temperature.toFixed(2)} °C
          </p>
          <p className="text-sm font-medium">
            {getStatus("temperature", data.temperature)}
          </p>
        </div>
      </div>

      <div
        style={{ height: "116px" }}
        className="flex flex-col w-[33%] bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start"
      >
        <div className="flex justify-between items-center self-stretch h-11">
          <div>
            <h1 className="text-[19px] font-bold">Ph Air Dalam Tambak</h1>
          </div>
          <div className="relative">
            <img style={{ marginBottom: "-800px" }} src={LogoAir} alt="logo" />
          </div>
        </div>
        <div
          style={{ height: "59px" }}
          className="flex flex-col items-start self-stretch gap-1"
        >
          <p
            className="text-[20px] font-medium leading-7"
            style={{ marginTop: "-5px" }}
          >
            {data.ph.toFixed(2)}
          </p>
          <p className="text-sm font-medium">{getStatus("ph", data.ph)}</p>
        </div>
      </div>

      <div
        style={{ height: "116px" }}
        className="flex flex-col w-[33%] bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start"
      >
        <div className="flex justify-between items-center self-stretch h-11">
          <div>
            <h1 className="text-[19px] font-bold">Oksigen Dalam Tambak</h1>
          </div>
          <div className="relative">
            <img
              style={{ marginBottom: "-800px" }}
              src={LogoOksigen}
              alt="logo"
            />
          </div>
        </div>
        <div
          style={{ height: "59px" }}
          className="flex flex-col items-start self-stretch gap-1"
        >
          <p
            className="text-[20px] font-medium leading-7"
            style={{ marginTop: "-5px" }}
          >
            {data.dissolved_oxygen.toFixed(2)} %
          </p>
          <p className="text-sm font-medium">
            {getStatus("dissolved_oxygen", data.dissolved_oxygen)}
          </p>
        </div>
      </div>
    </div>
  );
}
