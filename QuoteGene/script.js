async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      displayQuote(data.content);
    } catch (error) {
      console.error('Error:', error.message);
      displayQuote('Failed to fetch quote. Please try again later.');
    }
  }

  function displayQuote(quote) {
    document.getElementById('quote').textContent = quote;
  }