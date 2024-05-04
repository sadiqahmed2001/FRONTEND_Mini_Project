let balance = 1000;

    function updateBalance() {
      document.getElementById("balanceAmount").textContent = balance.toFixed(2);
    }

    function deposit() {
      const amount = parseFloat(document.getElementById("amount").value);
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
      balance += amount;
      updateBalance();
      alert(`Successfully deposited $${amount.toFixed(2)}`);
      document.getElementById("amount").value = "";
    }

    function withdraw() {
      const amount = parseFloat(document.getElementById("amount").value);
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
      if (amount > balance) {
        alert("Insufficient funds.");
        return;
      }
      balance -= amount;
      updateBalance();
      alert(`Successfully withdrew $${amount.toFixed(2)}`);
      document.getElementById("amount").value = "";
    }