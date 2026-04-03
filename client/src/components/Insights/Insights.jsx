import "./Insights.css";
import { getHighestSpendingCategory, getMonthlyData} from "../../utils/calculations";

export default function Insights({ transactions }) {
  const { maxCategory, maxAmount } =
    getHighestSpendingCategory(transactions);

  const monthlyData = getMonthlyData(transactions);

  const months = Object.keys(monthlyData);

  return (
    <div className="insights">
      <h3>Insights</h3>
      <div className="insight-cards">

        <div className="insight-card">
          <h4>Top Spending Category</h4>
          {maxCategory ? (
            <p>
              {maxCategory} (₹{maxAmount})
            </p>
          ) : (
            <p>No expense data</p>
          )}
        </div>

        <div className="insight-card">
          <h4>Monthly Comparison</h4>
          {months.length === 0 ? (
            <p>No data</p>
          ) : (
            months.map((m) => (
              <p key={m}>
                {m}: Income ₹{monthlyData[m].income} | Expense ₹
                {monthlyData[m].expense}
              </p>
            ))
          )}
        </div>

        <div className="insight-card">
          <h4>Observation</h4>
          {maxAmount > 10000 ? (
            <p>You are spending heavily on {maxCategory}</p>
          ) : (
            <p>Your spending looks balanced</p>
          )}
        </div>
      </div>
    </div>
  );
}