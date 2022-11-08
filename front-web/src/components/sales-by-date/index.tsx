import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';
import './styles.css';

const initialData = [
  {
    x: '2020-01-01',
    y: 504
  },
  {
    x: '2020-02-01',
    y: 106
  },
  {
    x: '2020-03-01',
    y: 104
  },
  {
    x: '2020-04-01',
    y: 100
  }
];

function SalesByDate() {
  return (
    <div className="base-card sales-by-date-container">
      <div>
        <h4 className="sales-by-date-tittle">Evolução de vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quatity-container">
          <h2 className="sales-by-date-quatity">464.988,00</h2>
          <span className="sales-by-date-quatity-label">Vendas no período</span>
          <span className="sales-by-date-quatity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
