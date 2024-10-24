import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { RootStateType } from "../../lib/redux/store.ts";
import { chartColors } from "../../../config/chartColors.ts";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { jar } = useSelector((state: RootStateType) => state.fruits);

  if (!jar.length) return null;

  const chartBgColors = chartColors.slice(0, jar.length);

  const chartData = {
    labels: jar.map((fruit) => {
      const qty = fruit.quantity || 1;
      return `${fruit.name} (Qty: ${qty} | Cal: ${fruit.nutritions.calories} | Total Cal: ${
        fruit.nutritions.calories * qty
      })`;
    }),
    datasets: [
      {
        label: "Calories",
        data: jar.map(
          (fruit) => fruit.nutritions.calories * (fruit.quantity || 1),
        ),
        backgroundColor: chartBgColors,
      },
    ],
  };

  return (
    <div className="mx-auto w-80 md:w-full">
      <Pie
        data={chartData}
        options={{ maintainAspectRatio: true, responsive: true }}
      />
    </div>
  );
};

export default PieChart;
