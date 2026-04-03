import "./Sidebar.css";

export default function Sidebar({ setPage, page }) {
  return (
    <div className="sidebar">
      <h2>CashPilot</h2>

      <ul>
        <li
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </li>

        <li
          className={page === "transactions" ? "active" : ""}
          onClick={() => setPage("transactions")}
        >
          Transactions
        </li>

        <li
          className={page === "insights" ? "active" : ""}
          onClick={() => setPage("insights")}
        >
          Insights
        </li>
      </ul>
    </div>
  );
}