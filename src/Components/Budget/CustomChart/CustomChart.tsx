import { Pie } from 'react-chartjs-2';
//Styles
import { CustomChartWrapper } from './CustomChart.styles';

const CustomChart: React.FC = (): JSX.Element => {
  return (
    <CustomChartWrapper>
      <Pie
        // @ts-ignore
        data={{
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        }}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </CustomChartWrapper>
  );
};

export default CustomChart;
