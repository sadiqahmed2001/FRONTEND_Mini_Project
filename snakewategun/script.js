function play() {
    var userChoice = document.getElementById("userChoice").value.toLowerCase();
    var computerChoice = ['s', 'w', 'g'][Math.floor(Math.random() * 3)];

    var result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((userChoice === 's' && computerChoice === 'w') || 
               (userChoice === 'w' && computerChoice === 'g') || 
               (userChoice === 'g' && computerChoice === 's')) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    var userChoiceName;
    var computerChoiceName;

    switch (userChoice) {
        case 's':
            userChoiceName = 'Snake';
            break;
        case 'w':
            userChoiceName = 'Water';
            break;
        case 'g':
            userChoiceName = 'Gun';
            break;
    }

    switch (computerChoice) {
        case 's':
            computerChoiceName = 'Snake';
            break;
        case 'w':
            computerChoiceName = 'Water';
            break;
        case 'g':
            computerChoiceName = 'Gun';
            break;
    }

    document.getElementById('result').innerHTML = `You chose ${userChoiceName}, computer chose ${computerChoiceName}. ${result}`;
}