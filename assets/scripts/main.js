const forms = document.querySelector("#form-contato");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const label = document.querySelector(".contato-label")

function fixeLabel() {
    if(nome.value != "") {
        label.setAttribute("class", "label-fixed")
        nome.setAttribute("class", "input-fixed")
    }
    if(email.value != "") {
        label.setAttribute("class", "label-fixed")
        email.setAttribute("class", "input-fixed")
    }
    if(assunto.value != "") {
        label.setAttribute("class", "label-fixed")
        assunto.setAttribute("class", "input-fixed")
    }
    if(mensagem.value != "") {
        label.setAttribute("class", "label-fixed")
        mensagem.setAttribute("class", "input-fixed")
    }
}







nome.addEventListener("focusout", fixeLabel);
email.addEventListener("focusout", fixeLabel);
assunto.addEventListener("focusout", fixeLabel);
mensagem.addEventListener("focusout", fixeLabel);



forms.addEventListener('submit', (event) => {
    event.preventDefault()

    if (nome.value === ""){
        nome.setAttribute("class", "erro-campo")
        alert("Por favor, digite o seu nome.");
        return;     
    } else if (nome.value.length > 50) {
        nome.setAttribute("class", "erro-campo")
        alert("Por favor, digite o seu nome com no máximo 50 caracteres.");
        return;  
    } else {
        nome.removeAttribute("class");
    }

    if (email.value === "" || !emailValidate(email.value)){
        email.setAttribute("class", "erro-campo")
        alert("Digite o seu e-mail.");
        return;
    } else {
        email.removeAttribute("class");
    }

    if (assunto.value === ""){
        assunto.setAttribute("class", "erro-campo")
        alert("Por favor, digite o assunto.");
        return;     
    } else if (assunto.value.length > 50) {
        assunto.setAttribute("class", "erro-campo")
        alert("Por favor, digite o assunto com no máximo 50 caracteres.");
        return;  
    } else {
        assunto.removeAttribute("class");
    }

    if (mensagem.value === ""){
        mensagem.setAttribute("class", "erro-campo")
        alert("Por favor, digite uma mensagem.");
        return;     
    } else if (mensagem.value.length > 300) {
        mensagem.setAttribute("class", "erro-campo")
        alert("Por favor, digite sua mensagem com no máximo 300 caracteres.");
        return;  
    } else {
        mensagem.removeAttribute("class");
    }

    forms.submit();

});

function emailValidate(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}