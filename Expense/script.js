const expenses = [];

    function addExpense() {
      const expenseName = document.getElementById("expenseName").value.trim();
      const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
      const expenseCategory = document.getElementById("expenseCategory").value;

      if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
      }

      const expense = { name: expenseName, amount: expenseAmount, category: expenseCategory };
      expenses.push(expense);

      updateExpenseList();
      updateExpenseSummary();

      // Clear input fields
      document.getElementById("expenseName").value = "";
      document.getElementById("expenseAmount").value = "";
      document.getElementById("expenseCategory").selectedIndex = 0;
    }

    function updateExpenseList() {
      const expenseList = document.getElementById("expenseList");
      expenseList.innerHTML = "";
      expenses.forEach((expense, index) => {
        const expenseElement = document.createElement("div");
        expenseElement.classList.add("expense");
        expenseElement.innerHTML = `
          <span>${expense.name}</span>
          <span>${expense.amount}</span>
          <span>${expense.category}</span>
          <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(expenseElement);
      });
    }

    function deleteExpense(index) {
      expenses.splice(index, 1);
      updateExpenseList();
      updateExpenseSummary();
    }

    function updateExpenseSummary() {
      const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
      const expenseSummary = document.getElementById("expenseSummary");
      expenseSummary.textContent = `Total Expenses: $${totalExpense.toFixed(2)}`;
    }