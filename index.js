// trim - remove espaços em verificações.
//sessionStorage - funciona igual ao LocalStorage, entretando quando fechar o navegador, as informações guardadas serão apagadas
//localStorage - armazena dados inseridos e lidos pelo javascript na maquina

function validarcadastro() {

    let nome = document.getElementById("txtUsuario").value.trim();
    let email1 = document.getElementById("txtemail").value.trim();
    let date1 = document.getElementById("date").value;
    let telefone = document.getElementById("telefone").value.trim();
    let conta = document.getElementById("sellConta").value.trim();
    let senha1 = document.getElementById("senha").value;
    let endereco = document.getElementById("endereco").value.trim();
    let popMessage = document.getElementById("popmessage");
    let confirmar = document.getElementById("confirmsenha").value.trim();

    if (nome === "" || email1 == "" || conta == "" || date1 === "" || telefone == "" || senha1 == "" || endereco == "" || confirmar == "") {
        popMessage.textContent = "todos os campos devem ser preenchidos";
        popMessage.style.color = "red";

        return;
    } if (senha1 !== confirmar) {
        popMessage.textContent = "Senhas não coincidem";
        popMessage.style.color = "red";
        return false;
    } else {

    let dateteste = false; 
    let emailteste = false;
    let senhateste = false;
    
    if (validardata(date1)) {
        dateteste = true;
    }
    if (validarEmail(email1)) {
        emailteste = true;
    }
    if (validarSenha(senha1)) {
        senhateste = true;
    }

    if (dateteste == true && emailteste == true && senhateste == true) {

        localStorage.setItem("nomeLogado", nome);
        localStorage.setItem("emailLogado", email1);
        localStorage.setItem("senhaLogada", senha1);

        popMessage.textContent = "Login aprovado";
        popMessage.style.color = "blue";
        window.location.href = "index.html";
        return;
    }

}

}



function validarSenha(senha) {
    let messagePop = document.getElementById("popmessage");
    let carateresNumeros = "0123456789";
    let carateresMaiusculos = "ABCDEFGHIJLMNOPQRSTUVWXYZ";

    let maisc = false;
    let num = false;

    for (let i = 0; i < senha.length; i++) {

        let verificar = senha.charAt(i);

        if (carateresMaiusculos.indexOf(verificar) !== -1) {
            maisc = true;
        } if (carateresNumeros.indexOf(verificar) !== -1) {
            num = true;
        }
    }

    if (!maisc) {
        messagePop.textContent = "A senha deve conter ao menos uma letra maiscula";
        messagePop.style.color = "red";

        return false;
    } else if (!num) {
        messagePop.textContent = "A senha deve conter ao menos um numero";
        messagePop.style.color = "red";

        return false;
    }

    if(maisc == true && num == true){
        return true;
    }
}



function validarEmail(txtemail) {

    let messagePop = document.getElementById("popmessage");
    var webMail1 = ["gmail.com", "hotmail.com", "outlook.com", "icloud.com", "yahoo.com"];

    if (webMail1.includes(txtemail)) {
        return true;
    } else {
        messagePop.textContent = "Tipo de email inválido!";
        messagePop.style.color = "red";
        return false;
    }
}



function validardata(date) {

    let messagePop = document.getElementById("popmessage");
    let dataAtual = new Date();
    let dataNasc = new Date(date);

    if (isNaN(dataNasc.getTime())) {
        messagePop.textContent = "Data de nascimento inválida!";
        messagePop.style.color = "red";
        return false;
    }

    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let mesNasc = dataNasc.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && dataAtual.getDate() < dataNasc.getDate())) {
        idade--;
    }

    if (idade < 18) {
        messagePop.textContent = "Você não pode utilizar este site!";
        messagePop.style.color = "red";

        return false;
    }

    return true;
}



function verifylogin() {

    let usuariologin = document.getElementById("LoginUsuario").value.trim();
    let senhalogin = document.getElementById("loginSenha").value.trim();
    let messagePop = document.getElementById("popmessage");
    let usuarioNome = localStorage.getItem("nomeLogado"); //sessionStorage.getItem
    let usuarioEmail = localStorage.getItem("emailLogado"); //sessionStorage.getItem
    let usuarioSenha = localStorage.getItem("senhaLogada"); //sessionStorage.getItem

    if ((usuariologin == usuarioNome || usuariologin == usuarioEmail) && senhalogin == usuarioSenha) {
        console.log(localStorage.getItem("nomeLogado"), localStorage.getItem("emailLogado"), localStorage.getItem("senhaLogada"))
        messagePop.textContent = "Login realizado com sucesso";
        messagePop.style.color = "blue";
        window.location.href = "index.html";

    } else {
        messagePop.textContent = "Usuario ou senha incorretos";
        messagePop.style.color = "red";
    }

}



function logout() {
    localStorage.removeItem("nomeLogado");
    localStorage.removeItem("emailLogado");
    localStorage.removeItem("senhaLogada");
    
    let usu = document.getElementById("nomeLogado");
    let mail = document.getElementById("emailLogado");
    let pass = document.getElementById("senhaLogada");

    console.log(usu);
    console.log(mail);
    console.log(pass);    
    
    window.location.href = "cadastro.html";
}