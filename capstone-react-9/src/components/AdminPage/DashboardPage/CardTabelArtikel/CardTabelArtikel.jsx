import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardTabelArtikel() {
  const [artikelData, setArtikelData] = useState([]); // State to store fetched articles


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
    <div style={{ height: '310px', width: '570px' }} className='flex flex-col gap-2 bg-white p-4 rounded-2xl'>
      <div className='flex justify-between items-center self-stretch'>
        <h1 className='text-xl font-semibold'>Artikel Terbaru</h1>
        <a href="" className='text-primary-90 rounded-lg'>Detail</a>
      </div>
      <div>
        <table>
          <thead style={{ height: '31px', width: '540px' }} className='flex gap-5 px-2 border-b border-primary-70 items-center'>
            <th style={{ width: '44px' }} className='flex items-start text-sm font-medium'>Foto</th>
            <th style={{ width: '160px' }} className='flex items-start text-sm font-medium'>Judul</th>
            <th style={{ width: '110px' }} className='flex items-start text-sm font-medium'>Tanggal</th>
            <th style={{ width: '' }} className='flex items-start text-sm font-medium'>Penulis</th>
          </thead>
          <tbody>
            {artikelData.map((artikel) => (
              <tr key={artikel.id} style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{ width: '50px' }}>
                  <img src={artikel.picture} alt="" style={{ height: '40px', width: '40px' }} />
                </td>
                <td style={{ width: '160px' }}>
                  <p className='text-sm font-medium'>{artikel.title}</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-mediaType'>{artikel.createdAt ? new Date(artikel.createdAt).toLocaleDateString() : '-'}</p>  {/* Handle missing createdAt gracefully */}
                </td>
                <td style={{ width: '' }}>
                  <p className='text-sm font-medium'>{artikel.author || '-'}</p>  {/* Handle missing author gracefully */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
