import "./Dashboard.css";
import { calculateSummary } from "../../utils/calculations";
import Transactions from "../Transactions/Transactions";
import AddTransaction from "../Transactions/AddTransaction";
import Insights from "../Insights/Insights";

export default function Dashboard({
  transactions,
  addTransaction,
  updateTransaction, 
  role,
  setEditingTransaction,
  editingTransaction,
  deleteTransaction,
}) {
  const {income, expenses, balance} =
    calculateSummary(transactions);

  return (
    <div className="dashboard">
      <h3>Welcome to CashPilot Dashboard</h3>
      <div className="cards">
        <div className="card">
          <p>Total Balance</p>
          <h2>₹{balance}</h2>
        </div>
        <div className="card">
          <p>Income</p>
          <h2 style={{ color: "#16a34a" }}>₹{income}</h2>
        </div>
        <div className="card">
          <p>Expenses</p>
          <h2 style={{ color: "#dc2626" }}>₹{expenses}</h2>
        </div>
      </div>
      {role === "admin" && (
        <AddTransaction
          onAdd={addTransaction}
          onUpdate={updateTransaction} 
          editingTransaction={editingTransaction}
          setEditingTransaction={setEditingTransaction}
        />
      )}
      <Transactions
        transactions={transactions}
        role={role}
        onEdit={setEditingTransaction}
        onDelete={deleteTransaction} 
      />
      <Insights transactions={transactions} />
    </div>
  );
}