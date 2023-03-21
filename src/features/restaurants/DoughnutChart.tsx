import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ ratings }: { ratings: number[] }) => {
  // const labels = ['5', '4', '3', '2', '1']

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: '# of Ratings',
  //       data: ratings,
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //   ],
  // }

  return <Doughnut data={data} />
}
