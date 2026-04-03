import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import transactionsData from "./data/mockData";

function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [editingTransaction, setEditingTransaction] = useState(null);

  const updateTransaction = (updated) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
    setEditingTransaction(null);
  };

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Layout role={role} setRole={setRole}>
      <Dashboard
        transactions={transactions}
        addTransaction={addTransaction}
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
        role={role}
      />
    </Layout>
  );
}

export default App;