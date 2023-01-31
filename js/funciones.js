
function changeNumero(){
    document.getElementById("telefono").innerHTML = "(926) 840-3160"
}

function changeMail(){
    document.getElementById("mail").innerHTML = "levi.franklin@example.com"
}

function changeFecha(){
    document.getElementById("fecha").innerHTML = "08/04/1988"
}

function changeDoc(){
    document.getElementById("documento").innerHTML = "94.245.546"
}

function changeAdress(){
    document.getElementById("adress").innerHTML = "537 E North St"
}

const $form = document.querySelector("#form")
const $buttonMailto = document.querySelector("#sender")

$form.addEventListener("submit", handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute("href", `mailto:levi.franklin@example.com?subject=CV Página Web  Nombre:${form.get('name')} Correo:${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}