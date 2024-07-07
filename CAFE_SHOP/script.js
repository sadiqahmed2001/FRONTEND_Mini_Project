function generateBill() {
    const prices = {   
        coffee: 3.00,
        tea: 2.50,
        sandwich: 5.00,
        cake: 4.00
    };
   
    const coffeeQty = parseInt(document.getElementById('coffee').value);
    const teaQty = parseInt(document.getElementById('tea').value);
    const sandwichQty = parseInt(document.getElementById('sandwich').value);
    const cakeQty = parseInt(document.getElementById('cake').value);

    const coffeeTotal = coffeeQty * prices.coffee;
    const teaTotal = teaQty * prices.tea;
    const sandwichTotal = sandwichQty * prices.sandwich;
    const cakeTotal = cakeQty * prices.cake;

    const total = coffeeTotal + teaTotal + sandwichTotal + cakeTotal;

    let billHtml = `
        <p>Coffee: ${coffeeQty} x $${prices.coffee.toFixed(2)} = $${coffeeTotal.toFixed(2)}</p>
        <p>Tea: ${teaQty} x $${prices.tea.toFixed(2)} = $${teaTotal.toFixed(2)}</p>
        <p>Sandwich: ${sandwichQty} x $${prices.sandwich.toFixed(2)} = $${sandwichTotal.toFixed(2)}</p>
        <p>Cake: ${cakeQty} x $${prices.cake.toFixed(2)} = $${cakeTotal.toFixed(2)}</p>
        <h3>Total: $${total.toFixed(2)}</h3>
    `;

    document.getElementById('bill').innerHTML = billHtml;
}
