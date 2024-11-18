function game() {
    // Timer variables
    let startTime = Date.now();
    let timerDisplay = document.createElement('div');
    timerDisplay.style.fontSize = '20px';
    timerDisplay.style.marginBottom = '10px';
    document.body.appendChild(timerDisplay);

    // Update timer every 100ms
    let timerInterval = setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        timerDisplay.innerHTML = `Time: ${(elapsedTime / 1000).toFixed(3)} seconds`;
    }, 10);

    let emailLabel = document.createElement('label'),
        emailInput = document.createElement('input'),
        userLabel = document.createElement('label'),
        userInput = document.createElement('input'),
        passwordLabel = document.createElement('label'),
        passwordInput = document.createElement('input'),
        confirmLabel = document.createElement('label'),
        confirmInput = document.createElement('input'),
        lineBreak = document.createElement('br'),
        proceedButton = document.createElement('button');

    let paragraph = document.querySelector('p');
    paragraph.style.display = 'none';
    let game1Elements = [emailLabel, emailInput, userLabel, userInput, passwordLabel, passwordInput, confirmLabel, confirmInput, lineBreak, proceedButton];

    proceedButton.innerHTML = 'Continue';

    for (let element of game1Elements) {
        document.querySelector('body').appendChild(element);
        element.style.margin = '5px';
    }

    emailLabel.setAttribute('for', 'email');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');

    userLabel.setAttribute('for', 'username');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('id', 'username');

    passwordLabel.setAttribute('for', 'password');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');

    confirmLabel.setAttribute('for', 'confirm-password');
    confirmInput.setAttribute('type', 'password');
    confirmInput.setAttribute('id', 'confirm-password');

    emailLabel.innerHTML = 'Email:';
    userLabel.innerHTML = 'Username:';
    passwordLabel.innerHTML = 'Password:';
    confirmLabel.innerHTML = 'Confirm password:';

    proceedButton.onclick = () => {
        clearInterval(timerInterval);
        let elapsedTime = Date.now() - startTime;
        let elapsedSeconds = (elapsedTime / 1000).toFixed(2);

        let userVal = userInput.value,
            passwordVal = passwordInput.value,
            confirmVal = confirmInput.value,
            passwordsMatch,
            emailValid,
            userLength;

        if (passwordVal === confirmVal) {
            passwordsMatch = true;
        } else {
            passwordsMatch = false;
        }

        if (emailInput.validity.valid) {
            emailValid = true;
        } else {
            emailValid = false;
        }

        if (userVal.length < 4 || userVal.length > 30) {
            userLength = false;
        } else {
            userLength = true;
        }

        for (let element of game1Elements) {
            element.remove();
        }
        timerDisplay.remove();

        paragraph.style.display = 'block';
        if (passwordsMatch && emailValid && userLength) {
            paragraph.innerHTML = `Congrats, you have beat the game in ${elapsedSeconds} seconds.`;
        } else {
            paragraph.innerHTML = `You have failed. Time taken: ${elapsedSeconds} seconds.`;
        }
    };
}

document.getElementById('start').onclick = () => {
    document.getElementById('start').remove();
    game();
};
