import  { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

export default function GrafikPenjualan() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = [
      {
        "date": "2024-05-18",
        "value": 0
    },
    {
        "date": "2024-05-19",
        "value": 0
    },
    {
        "date": "2024-05-20",
        "value": 0
    },
    {
        "date": "2024-05-21",
        "value": 0
    },
    {
        "date": "2024-05-22",
        "value": 0
    },
    {
        "date": "2024-05-23",
        "value": 0
    },
    {
        "date": "2024-05-24",
        "value": 105000
    },
    {
        "date": "2024-05-25",
        "value": 60000
    },
    {
        "date": "2024-05-26",
        "value": 117000
    },
    {
        "date": "2024-05-27",
        "value": 106000
    },
    {
        "date": "2024-05-28",
        "value": 436000
    },
    {
        "date": "2024-05-29",
        "value": 206000
    },
    {
        "date": "2024-05-30",
        "value": 71000
    },
    {
        "date": "2024-05-31",
        "value": 187000
    },
    {
        "date": "2024-06-01",
        "value": 61000
    },
    {
        "date": "2024-06-02",
        "value": 152000
    },
    {
        "date": "2024-06-03",
        "value": 147000
    },
    {
        "date": "2024-06-04",
        "value": 142000
    },
    {
        "date": "2024-06-05",
        "value": 82000
    },
    {
        "date": "2024-06-06",
        "value": 187000
    },
    {
        "date": "2024-06-07",
        "value": 67000
    },
    {
        "date": "2024-06-08",
        "value": 217000
    },
    {
        "date": "2024-06-09",
        "value": 221000
    },
    {
        "date": "2024-06-10",
        "value": 627000
    },
    {
        "date": "2024-06-11",
        "value": 534000
    },
    {
        "date": "2024-06-12",
        "value": 286000
    },
    {
        "date": "2024-06-13",
        "value": 570000
    },
    {
        "date": "2024-06-14",
        "value": 130000
    },
    {
        "date": "2024-06-15",
        "value": 310000
    },
    {
        "date": "2024-06-16",
        "value": 610000
    },
    {
        "date": "2024-06-17",
        "value": 94000
    }
    ];

    setChartData(data.map(item => ({ x: new Date(item.date), y: item.value })));
  }, []);

  const options = {
    series: [{
      name: 'Value',
      data: chartData
    }],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };

  return (
    <div style={{ height: '414px', width: '1162px', overflow: 'hidden' }} className='py-6 px-14 font-Poppins rounded-2xl bg-white border-b-2 border-primary-70'>
      <h1 className='text-[26px] font-bold'>Ringkasan Pendapatan</h1>
      <p className='text-lg font-medium'>Pendapatan dalam 30 hari terakhir</p>
      <Chart options={options} series={options.series} type="area" height={300} />
    </div>
  );
}
