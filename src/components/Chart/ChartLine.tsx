import React,{useState} from "react";
import styles from "./ChartLine.module.css";
import { useAppSelector } from "../../store/hooks/hooks";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartLine: React.FC = () => {
  const rentData = useAppSelector((state) => state.rent.rentData);
  const [aspectRatio, setAspectRatio] = useState<number>()

  return (
    <div className={styles.chart}>
      <div className={styles.title}>Rent Data Chart</div>
      <Line
        data={{
          labels: rentData.map((rent) => rent.year),
          datasets: [
            {
              label: "Effective rent",
              data: rentData.map((rent) => rent.effectiveRent),
              borderColor: ["rgba(252, 169, 3, 1)"],
              backgroundColor: "rgba(252, 169, 3, 0.4)",
              borderWidth: 2,
            },
            {
              label: "Starting rent",
              data: rentData.map((rent) => rent.startingRent),
              borderColor: "rgba(144, 173, 157, 1)",
              backgroundColor: "rgba(144, 173, 157, 0.4)",
              borderWidth: 2,
            },
          ],
        }}
        height={600}
        width={800}
        options={{
        aspectRatio:aspectRatio,
        onResize(chart, size) {
          if(size.width>=550 && chart.aspectRatio!==2/1) {
            setAspectRatio(2/1)
          } else if (size.width<550 && chart.aspectRatio!==2/1.5) {
            setAspectRatio(2/1.5)
          }
        },
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: function (context) {
                  let height = context.chart.height;
                  let size = Math.round(height / 20);

                  return {
                    weight: "bold",
                    size: size,
                    family: "Roboto",
                  };
                },
              },
            },
            tooltip: {
              bodyFont: {
                size: 16,
                family: "Roboto",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartLine;
