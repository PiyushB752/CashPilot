import { useState, useEffect } from "react";
import "./AddTransaction.css";

export default function AddTransaction({
  onAdd,
  onUpdate,
  editingTransaction,
  setEditingTransaction,
}) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (editingTransaction) {
      setForm(editingTransaction);
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    if (editingTransaction) {
      onUpdate({
        ...form,
        amount: Number(form.amount),
      });
    } else {
      onAdd({
        ...form,
        id: Date.now(),
        amount: Number(form.amount),
      });
    }

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4>
        {editingTransaction ? "Edit Transaction" : "Add Transaction"}
      </h4>

      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button type="submit">
        {editingTransaction ? "Update" : "Add"}
      </button>

      {editingTransaction && (
        <button
          type="button"
          onClick={() => setEditingTransaction(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
}