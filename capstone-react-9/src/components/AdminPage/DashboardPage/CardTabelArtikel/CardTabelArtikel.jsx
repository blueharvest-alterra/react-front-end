import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { getToken } from '../../../../service/accessCookie';

export default function CardTabelArtikel() {
  const [artikelData, setArtikelData] = useState([]); // State to store fetched articles


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://blueharvest.irvansn.com/v1/dashboards/admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status && response.data.data) {
          setArtikelData(response.data.data.latest_articles);
        } else {
          console.error('Error fetching articles:', response.data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '310px'}} className='flex flex-col gap-2 bg-white p-4 rounded-2xl w-[50%]'>
      <div className='flex justify-between items-center self-stretch'>
        <h1 className='text-xl font-semibold'>Artikel Terbaru</h1>
        <Link to={"/artikel"} className='text-primary-90 rounded-lg'>Detail</Link>
      </div>
      <div>
        <table className='w-full'>
          <thead style={{ height: '31px'}} className='flex gap-5 px-2 border-b border-primary-70 items-center'>
            <th style={{ width: '60px' }} className='flex items-start text-sm font-medium'>Foto</th>
            <th style={{ width: '300px' }} className='flex items-start text-sm font-medium'>Judul</th>
            <th style={{ width: '100px' }} className='flex items-start text-sm font-medium'>Tanggal</th>
          </thead>
          <tbody>
            {artikelData.map((artikel) => (
              <tr key={artikel.id} style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{ width: '60px' }}>
                  <img src={artikel.picture} alt="" style={{ height: '40px', width: '40px' }} />
                </td>
                <td style={{ width: '300px' }}>
                  <p className='text-sm font-medium'>{artikel.title}</p>
                </td>
                <td style={{ width: '150px' }}>
                  <p className='text-sm font-mediaType truncate'>{artikel.created_at}</p>  {/* Handle missing createdAt gracefully */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
