import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="base-card sales-sumary-card">
      {icon}
      <h3 className="sales-sumary-card-value">{value}</h3>
      <span className="sales-sumary-card-label">{label}</span>
    </div>
  );
}
export default SalesSummaryCard;
