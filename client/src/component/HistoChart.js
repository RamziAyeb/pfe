import { Bar } from "test-react-chartjs-2";
import { Chart } from "chart.js";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const options = {
  pan: {
    enabled: true,
    mode: "xy",
  },
  zoom: {
    enabled: true,
    drag: false,
    mode: "xy",
  },
  scales: {
    x: {
      type: "category",
      offset: false,
      gridLines: {
        offsetGridLines: false,
      },
      title: {
        display: true,
        text: "Roles",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Users",
      },
    },
  },
  plugins: {
    beforeInit: function (chart, args, options) {
      console.log("called");
    },
    afterDatasetDraw: () => {
      console.log("called");
    },
  },
};

export default function DashboardChart() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/getallusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const groupUsersByRole = (users) => {
    const groupedUsers = {};
    if (Array.isArray(users)) {
      users.forEach((user) => {
        const { role } = user;
        if (!groupedUsers[role]) {
          groupedUsers[role] = 0;
        }
        groupedUsers[role]++;
      });
    }
    return groupedUsers;
  };

  const groupedUsers = groupUsersByRole(users);

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    let chartInstance = null;

    // Destroy previous chart instance
    if (chartRef.current) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: Object.keys(groupedUsers),
          datasets: [
            {
              borderColor: "red",

              lineTension: 0,
              fill: false,
              borderJoinStyle: "round",
              data: Object.values(groupedUsers),
              borderWidth: 0.2,
              barPercentage: 1,
              categoryPercentage: 1,
              backgroundColor:'green',
              hoverBackgroundColor: "blue",
              barThickness: "flex",
            },
          ],
        },
        options: options,
      });

      chartRef.current.chartInstance = chartInstance;
    }

    return () => {
      // Cleanup function to destroy the chart instance
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [users]);

  return (
    <div className="histochart">
      <canvas id="chart-canvas" ref={chartRef} />
    </div>
  );
}
