document.getElementById('generateBillButton').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    // Prices of the items
    const prices = {
        tshirt: 10.00,
        jeans: 30.00,
        shoes: 50.00
    };

    // Get the quantities from the form
    const tshirtQty = parseInt(document.getElementById('tshirt').value);
    const jeansQty = parseInt(document.getElementById('jeans').value);
    const shoesQty = parseInt(document.getElementById('shoes').value);

    // Calculate the total
    const total = (tshirtQty * prices.tshirt) +
                  (jeansQty * prices.jeans) +
                  (shoesQty * prices.shoes);

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text("Clothes Shop Bill", 10, 10);
    doc.text(`Date: ${new Date().toLocaleString()}`, 10, 20); // Add current date and time
    doc.text(`T-shirt: ${tshirtQty} x $${prices.tshirt.toFixed(2)} = $${(tshirtQty * prices.tshirt).toFixed(2)}`, 10, 30);
    doc.text(`Jeans: ${jeansQty} x $${prices.jeans.toFixed(2)} = $${(jeansQty * prices.jeans).toFixed(2)}`, 10, 40);
    doc.text(`Shoes: ${shoesQty} x $${prices.shoes.toFixed(2)} = $${(shoesQty * prices.shoes).toFixed(2)}`, 10, 50);
    doc.text(`Total: $${total.toFixed(2)}`, 10, 60);

    // Save the PDF
    doc.save('clothes_shop_bill.pdf');
});
