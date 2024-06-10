document.getElementById('generatePdfButton').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    // Get the user input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Age: ${age}`, 10, 20);
    doc.text(`Address: ${address}`, 10, 30);
    doc.text(`Email: ${email}`, 10, 40);

    // Save the PDF
    doc.save('user_information.pdf');
});
