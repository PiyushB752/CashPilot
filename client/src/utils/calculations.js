export function calculateSummary(transactions) {
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  return {
    income,
    expenses,
    balance: income - expenses,
  };
}

export function getHighestSpendingCategory(transactions) {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > maxAmount) {
      maxAmount = categoryMap[category];
      maxCategory = category;
    }
  }

  return { maxCategory, maxAmount };
}

export function getMonthlyData(transactions) {
  const monthly = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); 

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  return monthly;
}