import React from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Hostname = () => {
  const { hostname } = useParams();

  // Generate timestamp Januari
  const generateTimestamps = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(`2024-01-${i.toString().padStart(2, "0")}`);
    }
    return dates;
  };

  const labels = generateTimestamps();

  // Data dummy untuk `in` dan `out`
  const data = {
    labels, // Timestamp sebagai label
    datasets: [
      {
        label: "In", // Dataset untuk `in`
        data: Array.from({ length: 31 }, () =>
          Math.floor(Math.random() * 1000)
        ), // Data dummy random
        borderColor: "rgba(54, 162, 235, 1)", // Warna garis `in`
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna area di bawah garis `in`
        // tension: 0.4, // Kelengkungan garis
      },
      {
        label: "Out", // Dataset untuk `out`
        data: Array.from({ length: 31 }, () =>
          Math.floor(Math.random() * 1000)
        ), // Data dummy random
        borderColor: "rgba(255, 99, 132, 1)", // Warna garis `out`
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Warna area di bawah garis `out`
        tension: 0.4, // Kelengkungan garis
      },
    ],
  };

  // Opsi tambahan untuk Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Posisi legenda
      },
      title: {
        display: true,
        text: "UNI Interface 1", // Judul grafik
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tanggal (Januari 2024)", // Label sumbu x
        },
      },
      y: {
        title: {
          display: true,
          text: "Nilai Data", // Label sumbu y
        },
      },
    },
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Hostname : {hostname}</li>
          <li className="breadcrumb-item">to_KCP_BCA_Pasar_Minggu</li>
          <li className="breadcrumb-item">Status: OK</li>
        </ol>
      </nav>

      <Line data={data} options={options} />
    </>
  );
};

export default Hostname;
