# CashPilot – Finance Dashboard

A clean and interactive **Finance Dashboard UI** built using React and CSS. It helps users track financial activity, manage transactions, and gain useful insights.

## 🚀 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expenses summary
* Clean card-based UI
* Real-time updates based on transactions

### 💰 Transactions Management

* View all transactions in a table
* Search by category
* Filter by type (Income / Expense)
* Sort by date or amount
* ➕ Add new transactions (Admin)
* ✏️ Edit existing transactions (Admin)
* 🗑️ Delete transactions (Admin)

### 🔐 Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add, edit, and delete transactions

### 📈 Insights Section

* Highest spending category
* Monthly comparison
* Useful financial observations

### 📱 Responsive Design

* Works on desktop, tablet, and mobile
* Adaptive layouts using Flexbox & Grid

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** CSS (Flexbox + Grid)
* **State Management:** React Hooks (`useState`, `useEffect`)

## 📁 Project Structure

```
src/
│── components/
│   ├── layout/
│   ├── dashboard/
│   ├── Transactions/
│   ├── Insights/
│
│── data/
│   └── mockData.js
│
│── utils/
│   └── calculations.js
│
│── App.jsx
│── main.jsx
│── index.css
```

## ⚙️ Installation & Setup

```
# Navigate to project
cd client

# Install dependencies
npm install

# Run the app
npm run dev
```

## 🎯 Approach

* Built a modular component-based architecture
* Used reusable components for transactions and forms
* Implemented CRUD operations using state management
* Applied responsive design principles for better UX
* Kept UI minimal, clean, and user-friendly

## 🧠 Key Highlights

* Reusable form for Add & Edit operations
* Role-based UI without backend
* Clean state management using hooks
* Responsive and scalable layout
* Focus on usability and clarity

## Deployment
link - https://thunderous-babka-f7ca68.netlify.app/
