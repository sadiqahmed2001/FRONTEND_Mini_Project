document.getElementById('generateBillButton').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    // Prices of the items
    const prices = {
        coffee: 3.00,
        tea: 2.50,
        sandwich: 5.00,
        cake: 4.00
    };

    // Get the quantities from the form
    const coffeeQty = parseInt(document.getElementById('coffee').value);
    const teaQty = parseInt(document.getElementById('tea').value);
    const sandwichQty = parseInt(document.getElementById('sandwich').value);
    const cakeQty = parseInt(document.getElementById('cake').value);

    // Calculate the total
    const total = (coffeeQty * prices.coffee) +
                  (teaQty * prices.tea) +
                  (sandwichQty * prices.sandwich) +
                  (cakeQty * prices.cake);

    // Display the total
    document.getElementById('totalDisplay').textContent = `Total: $${total.toFixed(2)}`;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text("Cafe Shop Bill", 10, 10);
    doc.text(`Coffee: ${coffeeQty} x $${prices.coffee.toFixed(2)} = $${(coffeeQty * prices.coffee).toFixed(2)}`, 10, 20);
    doc.text(`Tea: ${teaQty} x $${prices.tea.toFixed(2)} = $${(teaQty * prices.tea).toFixed(2)}`, 10, 30);
    doc.text(`Sandwich: ${sandwichQty} x $${prices.sandwich.toFixed(2)} = $${(sandwichQty * prices.sandwich).toFixed(2)}`, 10, 40);
    doc.text(`Cake: ${cakeQty} x $${prices.cake.toFixed(2)} = $${(cakeQty * prices.cake).toFixed(2)}`, 10, 50);
    doc.text(`Total: $${total.toFixed(2)}`, 10, 60);

    // Save the PDF
    doc.save('cafe_shop_bill.pdf');
});

// document.getElementById('generateBillButton').addEventListener('click', () => {
//     const { jsPDF } = window.jspdf;

//     // Prices of the items
//     const prices = {
//         coffee: 3.00,
//         tea: 2.50,
//         sandwich: 5.00,
//         cake: 4.00
//     };

//     // Get the quantities from the form
//     const coffeeQty = parseInt(document.getElementById('coffee').value);
//     const teaQty = parseInt(document.getElementById('tea').value);
//     const sandwichQty = parseInt(document.getElementById('sandwich').value);
//     const cakeQty = parseInt(document.getElementById('cake').value);

//     // Calculate the total
//     const total = (coffeeQty * prices.coffee) +
//                   (teaQty * prices.tea) +
//                   (sandwichQty * prices.sandwich) +
//                   (cakeQty * prices.cake);

//     // Increment and display the counter
//     let counter = localStorage.getItem('billCounter') || 0;
//     counter++;
//     localStorage.setItem('billCounter', counter);
//     document.getElementById('counterDisplay').textContent = `Bill Generated: ${counter} times`;

//     // Create a new jsPDF instance
//     const doc = new jsPDF();

//     // Add text to the PDF
//     doc.text("Cafe Shop Bill", 10, 10);
//     doc.text(`Date: ${new Date().toLocaleString()}`, 10, 20); // Add current date and time
//     doc.text(`Coffee: ${coffeeQty} x $${prices.coffee.toFixed(2)} = $${(coffeeQty * prices.coffee).toFixed(2)}`, 10, 30);
//     doc.text(`Tea: ${teaQty} x $${prices.tea.toFixed(2)} = $${(teaQty * prices.tea).toFixed(2)}`, 10, 40);
//     doc.text(`Sandwich: ${sandwichQty} x $${prices.sandwich.toFixed(2)} = $${(sandwichQty * prices.sandwich).toFixed(2)}`, 10, 50);
//     doc.text(`Cake: ${cakeQty} x $${prices.cake.toFixed(2)} = $${(cakeQty * prices.cake).toFixed(2)}`, 10, 60);
//     doc.text(`Total: $${total.toFixed(2)}`, 10, 70);

//     // Save the PDF
//     doc.save(`cafe_shop_bill_${counter}.pdf`);
// });

