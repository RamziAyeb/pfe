import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function Circledash() {
  const [reservations, setReservations] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5001/getallreservation')
      .then((res) => {
        setReservations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const groupReservationsByresultat = (reservations) => {
    const groupedReservations = {};
    if (Array.isArray(reservations)) {
      reservations.forEach((reservation) => {
        const { resultat } = reservation;
        if (!groupedReservations[resultat]) {
          groupedReservations[resultat] = [];
        }
        groupedReservations[resultat].push(reservation);
      });
    }
    return groupedReservations;
  };

  const groupedReservations = groupReservationsByresultat(reservations);

  useEffect(() => {
    if (Object.keys(groupedReservations).length > 0) {
      const chartData = {
        labels: Object.keys(groupedReservations),
        datasets: [
          {
            label: 'Reservation Results',
            data: Object.values(groupedReservations).map((reservations) => reservations.length),
            backgroundColor: [
              
              
                'rgb(54, 162, 235)',
              'rgb(255, 99, 132)',
              
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      };

      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the previous chart instance
      }

      const ctx = document.getElementById('myChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
      });
    }
  }, [groupedReservations]);

  return (
    <div className="circledash">
      <div id="chartContainer" style={{ width: '350px', height: '350px' }}>
        <canvas id="myChart" />
      </div>
    </div>
  );
}

export default Circledash;
