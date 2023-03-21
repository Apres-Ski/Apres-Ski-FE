import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)
import { defaults } from 'chart.js'

export const DoughnutChart = ({
  vibes,
}: {
  vibes: { [key: string]: number }
}) => {
  defaults.font.family = 'varela round'
  const labels = Object.keys(vibes)
  const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ]

  const borderColors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'count',
        data: Object.values(vibes),
        borderColor: borderColors.slice(0, vibes.length),
        backgroundColor: colors.slice(0, vibes.length),
      },
    ],
  }

  const options = {
    responsive: true,
  }

  return (
    <div className="mt-2 pb-2 pt-2 border rounded">
      Vibes
      <Doughnut data={data} options={options} />
    </div>
  )
}
