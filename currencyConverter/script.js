function convert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[to];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById("result").textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
      })
      .catch(error => {
        console.error("Error fetching exchange rate:", error);
        document.getElementById("result").textContent = "Error converting currency. Please try again.";
      });
  }