import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { defaults } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart = ({ ratings }: { ratings: number[] }) => {
  defaults.font.family = 'varela round'
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'User Ratings',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '# of ratings',
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        title: {
          display: true,
          text: 'rating',
        },
      },
    },
  }

  const labels = ['5', '4', '3', '2', '1']

  const data = {
    labels,
    datasets: [
      {
        label: '# of Ratings',
        data: ratings,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className='border rounded pt-2'>User Ratings
      <Bar options={options} data={data} />
    </div>
  )
}
