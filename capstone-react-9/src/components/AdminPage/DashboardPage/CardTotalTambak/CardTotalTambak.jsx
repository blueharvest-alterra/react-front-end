import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../../../../service/accessCookie';


export default function CardTotalTambak() {
  const [  totalTambak, setTotalTambak ] = useState(0);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const token = getToken()
        const response = await axios.get('https://blueharvest.irvansn.com/v1/dashboards/admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status && response.data.data) {
          setTotalTambak(response.data.data.farms_invest_last_thirty_days);
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
    <div
      style={{ height: "124px" }}
      className="w-[33%] flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start"
    >
      <div className="flex justify-between items-center self-stretch h-11">
        <div>
          <h1 className="text-sm font-semibold">Total Tambak</h1>
        </div>
        <div className="">
          <Link to={"/tambak"} className="text-primary-90 rounded-lg" href="">
            Detail
          </Link>
        </div>
      </div>
      <div
        style={{ height: "59px", width: "318px" }}
        className="flex flex-col items-start self-stretch gap-1"
      >
        <h1 className="text-xl font-bold leading-7">{totalTambak}</h1>
        <h1 className="text-sm font-medium text-netral-90">
          Total investasi tambak 30 hari terakhir
        </h1>
      </div>
    </div>
  );
}
