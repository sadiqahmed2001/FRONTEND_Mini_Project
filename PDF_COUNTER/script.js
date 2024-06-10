// Get the jsPDF object from the loaded jsPDF module
const { jsPDF } = window.jspdf;

// Function to update and display the counter
function updateCounter() {
    let counter = localStorage.getItem('pdfCounter');
    if (!counter) {
        counter = 0;
    }
    counter = parseInt(counter) + 1;
    localStorage.setItem('pdfCounter', counter);
    document.getElementById('counterDisplay').textContent = `PDF Generated: ${counter} times`;
}

document.getElementById('generatePdfButton').addEventListener('click', () => {
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

    // Update and display the counter
    updateCounter();
});

// Initialize counter display on page load
document.addEventListener('DOMContentLoaded', () => {
    let counter = localStorage.getItem('pdfCounter');
    if (!counter) {
        counter = 0;
    }
    document.getElementById('counterDisplay').textContent = `PDF Generated: ${counter} times`;
});
