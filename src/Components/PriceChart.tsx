import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Props {
    data: number[];
}

const PriceChart = ({ data }: Props) => {
    return (
        <div className="chart-container">
            <Line
                data={{
                    labels: data.map((_, i) => i),
                    datasets: [
                        {
                            data,
                            borderColor: "#2563eb",
                            backgroundColor: "rgba(37,99,235,0.1)",
                            tension: 0.3,
                            pointRadius: 0,
                        },
                    ],
                }}
                options={{
                    plugins: { legend: { display: false } },
                    scales: { x: { display: false }, y: { display: false } },
                    elements: { line: { borderWidth: 2 } },
                    responsive: true,
                    maintainAspectRatio: false,
                }}
                height={60}
            />
        </div>
    )
}

export default PriceChart