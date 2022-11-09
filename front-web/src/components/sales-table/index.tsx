import './styles.css';

function SalesTable() {
  return (
    <div className="base-card sales-table-container">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$ 540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$ 540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$ 540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Feminino</td>
            <td>Roupas e Acessórios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>R$ 540.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
