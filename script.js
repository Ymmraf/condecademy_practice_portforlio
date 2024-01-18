function aboutAlert() {
    document.getElementById('button').innerHTML = "Sorry, under renovation!"
}

let btn = document.getElementById('button')
btn.addEventListener('click', aboutAlert)