// ./pages/Dashboard/EditTambak.js
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EditTambak = () => {
const [data, setData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjo0MzQ2Nzc5MDE3fQ._xYdfj3HzU9cBc3DbJsMxuG2-B697QODsj5UgjypbE8';
      try {
        const response = await axios.get(`https://blueharvest.irvansn.com/v1/farmmonitors/farm/${id}`, {
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
console.log(data);

  return (
    <div>
      <h1>Edit Tambak</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default EditTambak;
