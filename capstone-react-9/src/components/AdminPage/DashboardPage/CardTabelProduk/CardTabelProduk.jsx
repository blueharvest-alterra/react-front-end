import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../../../../service/accessCookie';

export default function CardTabelProduk() {
  const [ productData, setProductData ] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken()
        const response = await axios.get('https://blueharvest.irvansn.com/v1/dashboards/admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status && response.data.data) {
          setProductData(response.data.data.latest_products);
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
    <div
      style={{ height: "310px"}}
      className="flex flex-col gap-2 bg-white p-4 rounded-2xl w-[50%]"
    >
      <div className="flex justify-between items-center self-stretch">
        <h1 className="text-xl font-semibold">Produk Terbaru</h1>
        <a href="" className="text-primary-90 rounded-lg">
          Detail
        </a>
      </div>
      <div>
        <table>
          <thead
            style={{ height: "31px", width: "489px" }}
            className="flex gap-5 px-2 items-center border-b border-primary-70"
          >
            <th
              style={{ width: "44px" }}
              className="flex items-start text-sm font-medium"
            >
              Foto
            </th>
            <th
              style={{ width: "500px" }}
              className="flex items-start text-sm font-medium"
            >
              Nama Produk
            </th>
            <th
              style={{ width: "100px" }}
              className="flex items-start text-sm font-medium"
            >
              Harga
            </th>
            <th
              style={{ width: "100px" }}
              className="flex items-start text-sm font-medium"
            >
              Status
            </th>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr
                key={product.id}
                style={{ height: "60px" }}
                className="flex gap-5 px-1 py-2 items-center border-b border-primary-70"
              >
                <td style={{ width: "50px" }}>
                  <img
                    src={product.thumbnail}
                    alt=""
                    style={{ height: "40px", width: "40px" }}
                  />
                </td>
                <td style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                  <p className="text-sm font-medium">{product.name}</p>
                </td>
                <td style={{ width: "100px" }}>
                  <p className="text-sm font-medium">Rp {product.price}</p>
                </td>
                <td style={{ width: "100px" }}>
                  <span
                    className={`${
                      product.status === "available"
                        ? "bg-[#74F1C4]"
                        : "bg-[#FF3B3B]"
                    } inline-block px-2 py-1 rounded-2xl`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
