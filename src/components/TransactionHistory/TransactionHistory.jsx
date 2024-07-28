import clsx from "clsx";
import s from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
      <table className={s.table }>
  <thead>
          <tr className={ s.tableHead}>
      <th className={s.tableHeadItem }>Type</th>
      <th className={s.tableHeadItem}>Amount</th>
      <th className={s.tableHeadItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => 
    (<tr key={item.id} className={clsx(s.tableRow)}>
          <td className={s.tableItem}>{item.type}</td>
          <td className={s.tableItem}>{item.amount}</td>
          <td className={s.tableItem}>{item.currency}</td>
    </tr>  
    ))}
  </tbody>
</table>
    );
};

export default TransactionHistory;