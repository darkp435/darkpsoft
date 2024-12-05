let q = document.getElementById('question'),
    game = document.getElementById('captchatitle'),
    homepg = document.getElementById('homepg'),
    containerImg = document.querySelector('.container-img')

function complete(back) {
    document.querySelector('h1').className = 'text-lg'
    document.querySelector('p').className = 'hidden'
    homepg.className = 'hidden'
    document.getElementById('bat').remove()
    document.getElementById('baseball').remove()
    q.innerHTML = 'Please select glass.'
    // creation of glass elements
    let glass1 = document.createElement('input'),
        glass2 = document.createElement('input'),
        glass3 = document.createElement('input'),
        glass4 = document.createElement('input'),
        glass5 = document.createElement('input'),
        real_glass = document.createElement('p')
    glasses = [glass1, glass2, glass3, glass4, glass5]
    let index = 1
    for (let i of glasses) {
        i.type = 'image'
        i.style.border = '2px solid white'
        i.style.padding = '2px'
        i.onclick = () => fail()
        containerImg.appendChild(i)
        i.src = 'assets/glass' + index + '.png'
        i.id = 'glass' + index
        index++
    }
    real_glass.innerHTML = 'glass'
    real_glass.id = 'real_glass'
    document.querySelector('.hidden-glass').appendChild(real_glass)
    real_glass.onclick = () => succeed()

    function fail() {
        glass1.remove(); glass2.remove(); glass3.remove(); glass4.remove(); glass5.remove(); real_glass.remove()
        q.innerHTML = "You failed the captcha on confirmation 2. You are a robot!"
        back.style.display = 'block'
    }
}

function incorrect(back) {
    document.getElementById('bat').remove()
    document.getElementById('baseball').remove()
    q.innerHTML = 'Incorrect. You failed the test. You are a robot.'
    back.style.display = 'block'
}

function succeed() {
    q.innerHTML = "Select the game."
    glass1.remove(); glass2.remove(); glass3.remove(); glass4.remove(); glass5.remove(); real_glass.remove()
    let game1 = document.createElement('p'),
        game2 = document.createElement('p'),
        game3 = document.createElement('p'),
        game4 = document.createElement('p')
    let games = [game1, game2, game3, game4]

    for (let x of games) {
        x.innerHTML = 'game'
        x.onclick = () => fail2()
        containerImg.appendChild(x)
    }
    game2.style.color = 'green'
    game3.style.color = 'red'
    game4.style.color = 'blue'
    function fail2() {
        game1.remove(); game2.remove(); game3.remove(); game4.remove()
        q.innerHTML = 'Incorrect. You failed the captcha on level 3. You are a robot!'
        game.onclick = next
        back.style.display = 'block'
        function next() {
            back.style.display = 'none'
            game.onclick = null
            q.innerHTML = 'Please agree to the terms and conditions.'
            terms = document.getElementById('terms')
            terms.className = 'block'
            agree = document.createElement('button')
            agree.innerHTML = 'I have painstakingly read the terms and conditions, and hereby sign it with my blood.'
            agree.onclick = () => agree.remove()
            terms.onclick = () => code()
            document.querySelector('.agreed').appendChild(agree)
            function code() {
                terms.remove()
                agree.remove()
                q.innerHTML = 'Please enter the verification code.'
                verify = document.createElement('input')
                verify.type = 'text'
                verify.placeholder = 'Enter your verification code here' 
                verify.className = 'bg-black text-white border border-white'
                verify.style.padding = '15px'
                verify.style.margin = '20px'
                verify.style.fontSize = '15px'
                containerImg.appendChild(verify)
                // entering the code to proceed
                verify.addEventListener("keydown", function(event) {
                    if (event.key === 'Enter') {
                        if (verify.value === "5277") {
                            verify.remove()
                            q.innerHTML = 'What is the value for 1, in hexadecimal?'
                            let hex1 = document.createElement('p'),
                                hex2 = document.createElement('p'),
                                hex3 = document.createElement('p'),
                                hex4 = document.createElement('p'),
                                skip = document.createElement('p')
                            skip.id = 'skip'
                            hex1.id = 'hex1'
                            hex2.id = 'hex2'
                            hex3.id = 'hex3'
                            hex4.id = 'hex4'
                            hex1.innerHTML = '31'
                            hex2.innerHTML = "I don't knooowwwww"
                            hex3.innerHTML = '*uses chatgpt for the answer*'
                            hex4.innerHTML = 'This is pointless.'
                            homepg.style.marginBottom = '1000000px'
                            skip.innerHTML = 'Skip'
                            skip.style.fontSize = '5px'
                            containerImg.appendChild(hex1)
                            containerImg.appendChild(hex2)
                            containerImg.appendChild(hex3)
                            containerImg.appendChild(hex4)
                            document.querySelector('.hidden-glass').appendChild(skip)
                            hex1.onclick = () => answers("Correct, but only robots know hexadecimal, which means you failed.")
                            hex2.onclick = () => answers("Not knowing the answer is an obvious fail.")
                            hex3.onclick = () => answers("Using AI for the answer? I don't think so, you failed.")
                            hex4.onclick = () => answers("Complaining does absolutely nothing, cry about your captcha failure now.")
                            skip.onclick = () => finish()

                            function answers(message) {
                                hex1.remove(); hex2.remove(); hex3.remove(); hex4.remove(); skip.remove()
                                q.innerHTML = message
                                back.style.display = 'block'
                            }

                            function finish() {
                                q.innerHTML = 'To confirm that you are not a robot, enter the secondary confirmatory code.'
                                hex1.remove(); hex2.remove(); hex3.remove(); hex4.remove(); skip.remove()
                                let concode = document.createElement('input')
                                concode.type = 'text'
                                concode.placeholder = 'Enter your verification code here'
                                concode.style.color = 'green'
                                concode.style.padding = '15px'
                                concode.style.margin = '20px'
                                concode.style.fontSize = '15px'
                                containerImg.appendChild(concode)
                                rancode = Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
                                console.log(Number.MIN_SAFE_INTEGER)
                                console.log(Number.MAX_SAFE_INTEGER)
                                console.log(rancode)
                                concode.addEventListener("keydown", function(event2) {
                                    if (event2.key == 'Enter') {
                                        if (concode.value == rancode) {
                                            concode.remove()
                                            q.innerHTML = 'Success.'
                                            bee = document.createElement('img')
                                            bee.src = './assets/bee.png'
                                            bee.id = 'bee'
                                            containerImg.appendChild(bee)
                                        } else {
                                            concode.remove()
                                            q.innerHTML = 'You failed on the last level!'
                                        }
                                    }
                                })
                            }

                        } else if (this.value === "dead beef"){
                            alert("Nice try, but that's not the code, that's just the hexadecimal placeholder.")
                        } else {
                            verify.remove()
                            q.innerHTML = 'Incorrect, you failed the captcha on level 4 and you are a robot!'
                            back.style.display = 'block'
                        }
                    }
                })
            }
        }
    }
}

let back = document.createElement('a')
back.href = 'captcha.html'
back.innerHTML = 'Try again'
back.style.display = 'none'
containerImg.appendChild(back)

document.getElementById('bat').onclick = () => complete(back)
document.getElementById('baseball').onclick = () => incorrect(back)
