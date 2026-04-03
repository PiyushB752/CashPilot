import { useState } from "react";
import "./Transactions.css";

export default function Transactions({
  transactions,
  role,
  onEdit,
  onDelete, 
}) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const filteredData = transactions
    .filter((t) => {
      if (filterType === "all") return true;
      return t.type === filterType;
    })
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "amount") return b.amount - a.amount;
      if (sortBy === "date")
        return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="transactions">
      <h3>Transactions</h3>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={role === "admin" ? "5" : "4"}>
                No transactions found
              </td>
            </tr>
          ) : (
            filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>

                <td
                  className={
                    t.type === "income" ? "income" : "expense"
                  }
                >
                  {t.type}
                </td>

                <td>₹{t.amount}</td>

                {role === "admin" && (
                  <td>
                    <div className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => onEdit(t)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Delete this transaction?"
                            )
                          ) {
                            onDelete(t.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}