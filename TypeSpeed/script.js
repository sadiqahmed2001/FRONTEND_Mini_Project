const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "How razorback-jumping frogs can level six piqued gymnasts!",
    "Crazy Fredericka bought many very exquisite opal jewels.",
    "Six big devils from Japan quickly forgot how to waltz."
  ];

  function startTest() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    let sentence = sentences[randomIndex];
    document.getElementById('sentence').textContent = sentence;
    
    let input = document.getElementById('input');
    input.value = '';
    input.focus();
    input.disabled = false;
    input.removeEventListener('input', calculateWPM);

    let result = document.getElementById('result');
    result.textContent = '';

    input.addEventListener('input', calculateWPM);
  }

  function calculateWPM() {
    let input = document.getElementById('input');
    let typedWords = input.value.trim().split(/\s+/).length;
    let timeInSeconds = (new Date() - startTime) / 1000;
    let WPM = Math.round((typedWords / timeInSeconds) * 60);
    document.getElementById('result').textContent = `Your typing speed: ${WPM} WPM`;
  }

  let startTime;
  function startTest() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    let sentence = sentences[randomIndex];
    document.getElementById('sentence').textContent = sentence;
    
    let input = document.getElementById('input');
    input.value = '';
    input.focus();
    input.disabled = false;
    input.removeEventListener('input', calculateWPM);

    let result = document.getElementById('result');
    result.textContent = '';

    startTime = new Date();
    input.addEventListener('input', calculateWPM);
  }