import React from "react";
import "./index.css";
import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widget-lg-button ${type}`}>{type}</button>;
  };
  return (
    <div className="widget-lg">
      <h3 className="widget-lg-title">Lateset Transactions</h3>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Customer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        {transactions.map((transaction) => {
          return (
            <tr className="widget-lg-tr" key={transaction.id}>
              <td className="widget-lg-user">
                <img
                  src={transaction.img}
                  alt="person"
                  className="widget-lg-img"
                />
                <span className="widget-lg-name">{transaction.customer}</span>
              </td>
              <td className="widget-lg-date">{transaction.date}</td>
              <td className="widget-lg-amount">{transaction.amount}</td>
              <td className="widget-lg-status">
                <Button type={transaction.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
