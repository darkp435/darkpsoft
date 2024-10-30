let bati = document.getElementById('bat')
let q = document.getElementById('question')
let baseballb = document.getElementById('baseball')
let game = document.getElementById('captchatitle')
let homepg = document.getElementById('homepg')

function complete() {
    bati.remove()
    baseballb.remove()
    q.textContent = 'Please select glass.'
    // creation of glass elements
    let glass1 = document.createElement('input')
    let glass2 = document.createElement('input')
    let glass3 = document.createElement('input')
    let glass4 = document.createElement('input')
    let glass5 = document.createElement('input')
    let real_glass = document.createElement('p')
    glass1.type = 'image'
    glass1.style.border = '2px, solid white'
    glass1.style.padding = '2px'
    glass2.type = 'image'
    glass2.style.border = '2px, solid white'
    glass2.style.padding = '2px'
    glass3.type = 'image'
    glass3.style.border = '2px, solid white'
    glass3.style.padding = '2px'
    glass4.type = 'image'
    glass4.style.border = '2px, solid white'
    glass4.style.padding = '2px'
    glass5.type = 'image'
    glass5.style.border = '2px, solid white'
    glass5.style.padding = '2px'
    real_glass.textContent = 'glass'
    real_glass.id = 'real_glass'
    glass1.src = 'glass_cup.png'
    glass2.src = 'flat_glass.png'
    glass3.src = 'shattered.png'
    glass4.src = 'lowiron.png'
    glass5.src = 'rainbow.png'
    glass1.id = 'glass1'
    glass2.id = 'glass2'
    glass3.id = 'glass3'
    glass4.id = 'glass4'
    glass5.id = 'glass5'
    document.querySelector('.container-img').appendChild(glass1)
    document.querySelector('.container-img').appendChild(glass2)
    document.querySelector('.container-img').appendChild(glass3)
    document.querySelector('.container-img').appendChild(glass4)
    document.querySelector('.container-img').appendChild(glass5)
    document.querySelector('.hidden-glass').appendChild(real_glass)
    // how the glass elements react
    glass1.onclick = fail
    glass2.onclick = fail
    glass3.onclick = fail
    glass4.onclick = fail
    glass5.onclick = fail
    real_glass.onclick = succeed

    function fail() {
        q.textContent = "You failed the captcha on confirmation 2. You are a robot!"
        glass1.remove(); glass2.remove(); glass3.remove(); glass4.remove(); glass5.remove(); real_glass.remove()
        let back = document.createElement('a')
        back.textContent = 'Try again'
        back.setAttribute('href', 'captcha.html')
        document.querySelector(".container-img").appendChild(back)
    }

    function succeed() {
        q.textContent = "Select the game."
        glass1.remove(); glass2.remove(); glass3.remove(); glass4.remove(); glass5.remove(); real_glass.remove()
        let game1 = document.createElement('p')
        let game2 = document.createElement('span')
        let game3 = document.createElement('span')
        let game4 = document.createElement('p')
        game4.textContent = 'game'
        game3.textContent = 'game'
        game2.textContent = 'game'
        game1.textContent = 'game'
        game2.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        game2.style.color = 'green'
        game3.style.color = 'red'
        game4.style.color = 'blue'
        game4.style.fontFamily = 'Times New Roman'
        document.querySelector('.container-img').appendChild(game1)
        document.querySelector('.container-img').appendChild(game4)
        game1.insertAdjacentElement('afterend', game2)
        game1.insertAdjacentElement('beforeend', game3)
        game1.onclick = fail2
        game2.onclick = fail2
        game3.onclick = fail2
        game4.onclick = fail2
        function fail2() {
            game1.remove(); game2.remove(); game3.remove(); game4.remove()
            q.textContent = 'Incorrect. You failed the captcha on level 3. You are a robot!'
            game.onclick = next
            let back = document.createElement('a')
            back.textContent = 'Try again'
            back.setAttribute('href', 'captcha.html')
            document.querySelector(".container-img").appendChild(back)
            function next() {
                back.remove()
                game.onclick = null
                q.textContent = 'Please agree to the terms and conditions.'
                terms = document.createElement('pre')
                terms.textContent = `
    1. Introduction
    
    Welcome to darkpsoft! These Terms and Conditions ("Terms") govern your use of our website, products, and services provided by darkp ("we," "us," "our"). By accessing or 
    using our website, applications, or services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website or 
    services. These Terms constitute a not legal agreement between you and darkpsoft, and by using our services, you acknowledge that you have read, understood, and agreed 
    to be bound by them. We may update these Terms from time to time, and your continued use of our services after any changes signifies your acceptance of the revised 
    Terms. If you have any questions or concerns about these Terms, please contact us at [REDACTED]. If you notice any bugs, please go into the console to get the details
    and provide it to us. Violation of these terms will give you +1 strike and limit some functionalities of the product or website.
    
    2. Privacy policy
    
    Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah b2ah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah foo bar foo bar foo bar foo bar foo bar foo bar foo bar.
    
    3. Use of products
    
    Blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah foo bar. 
    
    4. Blah blah blah
    
    Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                            
    5. Foo bar
    
    Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah b1ah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    
    6. Use of data
    
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef Dead b4ef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    
    7. Other legal stuff
    
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef De3d beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef 
    dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    
    8. General advice

    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 
    Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef dead beef Dead beef dead beef 

    9. Conclusion

    If you have painstakingly read the terms and conditions, you must hereby agree to it in order to continue using this product.
                `
                agree = document.createElement('button')
                agree.textContent = 'I have painstakingly read the terms and conditions, and hereby sign it with my blood.'
                agree.onclick = code
                document.querySelector('.container-img').appendChild(terms)
                document.querySelector('.agreed').appendChild(agree)
                function code() {
                    terms.remove()
                    agree.remove()
                    q.textContent = 'Please enter the verification code.'
                    verify = document.createElement('input')
                    verify.type = 'text'
                    verify.placeholder = 'Enter your verification code here'
                    verify.style.color = 'green'    
                    verify.style.fontFamily = 'Times New Roman'
                    verify.style.padding = '15px'
                    verify.style.margin = '20px'
                    verify.style.fontSize = '15px'
                    document.querySelector('.container-img').appendChild(verify)
                    // entering the code to proceed
                    verify.addEventListener("keydown", function(event) {
                        if (event.key === 'Enter') {
                            if (this.value === "5277") {
                                verify.remove()
                                q.textContent = 'What is the value for 1, in hexadecimal?'
                                hex1 = document.createElement('p')
                                hex2 = document.createElement('p')
                                hex3 = document.createElement('p')
                                hex4 = document.createElement('p')
                                skip = document.createElement('p')
                                skip.id = 'skip'
                                hex1.id = 'hex1'
                                hex2.id = 'hex2'
                                hex3.id = 'hex3'
                                hex4.id = 'hex4'
                                hex1.textContent = '31'
                                hex2.textContent = "I don't knooowwwww"
                                hex3.textContent = '*uses chatgpt for the answer*'
                                hex4.textContent = 'HOW THE F**K DOES THIS PROVE...'
                                homepg.style.marginBottom = '1000000px'
                                skip.textContent = 'Skip'
                                skip.style.fontSize = '5px'
                                document.querySelector('.container-img').appendChild(hex1)
                                document.querySelector('.container-img').appendChild(hex2)
                                document.querySelector('.container-img').appendChild(hex3)
                                document.querySelector('.container-img').appendChild(hex4)
                                document.querySelector('.hidden-glass').appendChild(skip)
                                hex1.onclick = correctans
                                hex2.onclick = dontknow
                                hex3.onclick = ai
                                hex4.onclick = complain
                                skip.onclick = finish
                                function correctans() {
                                    hex1.remove(); hex2.remove(); hex3.remove(), hex4.remove(), skip.remove()
                                    q.textContent = 'Correct. You failed on level 5 because only robots know hexadecimal.'
                                    let back = document.createElement('a')
                                    back.textContent = 'Try again'
                                    back.setAttribute('href', 'captcha.html')
                                    document.querySelector(".container-img").appendChild(back)
                                }
                                
                                function dontknow() {
                                    hex1.remove(); hex2.remove(); hex3.remove(), hex4.remove(), skip.remove()
                                    q.textContent = "You can't just not know the answer! You failed on level 5!"
                                    let back = document.createElement('a')
                                    back.textContent = 'Try again'
                                    back.setAttribute('href', 'captcha.html')
                                    document.querySelector(".container-img").appendChild(back)
                                }

                                function complain() {
                                    hex1.remove(); hex2.remove(); hex3.remove(), hex4.remove(), skip.remove()
                                    q.textContent = "Complaining doesn't do anything! You failed on level 5!"
                                    let back = document.createElement('a')
                                    back.textContent = 'Try again'
                                    back.setAttribute('href', 'captcha.html')
                                    document.querySelector(".container-img").appendChild(back)
                                }

                                function ai() {
                                    hex1.remove(); hex2.remove(); hex3.remove(), hex4.remove(), skip.remove()
                                    q.textContent = "You can't just use AI for the answer, only robots do that! Level 5 fail!"
                                    let back = document.createElement('a')
                                    back.textContent = 'Try again'
                                    back.setAttribute('href', 'captcha.html')
                                    document.querySelector(".container-img").appendChild(back)
                                }

                                function finish() {
                                    q.textContent = 'To confirm that you are not a robot, enter the secondary confirmatory code.'
                                    hex1.remove(); hex2.remove(); hex3.remove(), hex4.remove(), skip.remove()
                                    concode = document.createElement('input')
                                    concode.type = 'text'
                                    concode.placeholder = 'Enter your verification code here'
                                    concode.style.color = 'green'    
                                    concode.style.fontFamily = 'Times New Roman'
                                    concode.style.padding = '15px'
                                    concode.style.margin = '20px'
                                    concode.style.fontSize = '15px'
                                    document.querySelector('.container-img').appendChild(concode)
                                    rancode = Math.random()
                                    console.log(rancode)
                                    concode.addEventListener("keydown", function(event2) {
                                        if (event2.key == 'Enter') {
                                            if (this.value == rancode) {
                                                concode.remove()
                                                q.textContent = 'Congratulations! You are now a human. Feedback of the captcha will be piped straight to /dev/null.'
                                                bee = document.createElement('img')
                                                bee.src = 'bee.png'
                                                bee.id = 'bee'
                                                document.querySelector('.container-img').appendChild(bee)
                                            } else {
                                                concode.remove()
                                                q.textContent = 'You failed on the last level!'
                                            }
                                        }
                                    })
                                }

                            } else if (this.value === "dead beef"){
                                alert("Nice try, but that's not the code, that's just the hexadecimal placeholder.")
                            } else {
                                verify.remove()
                                q.textContent = 'Incorrect, you failed the captcha on level 4 and you are a robot!'
                                let back = document.createElement('a')
                                back.textContent = 'Try again'
                                back.setAttribute('href', 'captcha.html')
                            }
                        }
                    })
                }         
            }
    
        }
    }
}

function incorrect() {
    bati.remove()
    baseballb.remove()
    q.textContent = 'Incorrect. You failed the test. You are a robot.'
    let back = document.createElement('a')
    back.textContent = 'Try again'
    back.setAttribute('href', 'captcha.html')
    document.querySelector(".container-img").appendChild(back)
}
