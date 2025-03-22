// trim - remove espaços em verificações.

function validarcadastro(){

    let nome = document.getElementById("txtUsuario").value.trim();
    let email = document.getElementById("txtemail").value.trim();
    let date1 = document.getElementById("date").value;
    let telefone = document.getElementById("telefone").value.trim();
    let conta = document.getElementById("sellConta").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let endereco  = document.getElementById("endereco").value.trim();
    let popMessage = document.getElementById("popmessage");
    let confirmar = document.getElementById("confirmsenha").value.trim();

    if (nome == "" || email == "" || conta == "" || date1 == "" || telefone == "" || senha == "" || endereco =="" || confirmar == ""){
        popMessage.textContent = "todos os campos devem ser preenchidos";
        popMessage.style.color = "red";
    } else {
        validardata(date1);
        popMessage.textContent = "Cadastro realizado com sucesso";
        popMessage.style.color = "blue";
        localStorage.setItem("nomeLogado", nome);   //sessionStorage.setItem
        localStorage.setItem("emailLogado", email); //sessionStorage.setItem
        localStorage.setItem("senhaLogada", senha); //sessionStorage.setItem
        window.location.href = "login.html";
    }

}

//loccalStorage - armazena dados inseridos e lidos pelo javascript na maquina

function validardata(date) {
    let dataAtual = new Date();
    let dataNasc = new Date(date);

    if (isNaN(dataNasc.getTime())) {
        alert("Data de nascimento inválida!");
        return false;
    }

    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let mesNasc = dataNasc.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && dataAtual.getDate() < dataNasc.getDate())) {
        idade--;
    }

    console.log("Idade calculada:", idade);

    if (idade < 18) {
        alert("Você não pode utilizar este site!");
        return false;
    }

    return true;
}

function verifylogin(){

    let usuariologin = document.getElementById("LoginUsuario").value.trim();
    let senhalogin = document.getElementById("loginSenha").value.trim();
    let messagePop = document.getElementById("popmessage");
    let usuarioNome = localStorage.getItem("nomeLogado"); //sessionStorage.getItem
    let usuarioEmail = localStorage.getItem("emailLogado"); //sessionStorage.getItem
    let usuarioSenha = localStorage.getItem("senhaLogada"); //sessionStorage.getItem

    if((usuariologin == usuarioNome || usuariologin == usuarioEmail) && senhalogin == usuarioSenha){
        console.log(localStorage.getItem("nomeLogado"), localStorage.getItem("emailLogado"), localStorage.getItem("senhaLogada"))
        messagePop.textContent = "Login realizado com sucesso";
        messagePop.style.color = "blue";
        alert("Login realizado com sucesso");
        window.location.href = "index.html";

    } else {
        messagePop.textContent = "Usuario ou senha incorretos";
        messagePop.style.color = "red";
    }

}

//sessionStorage - funciona igual ao LocalStorage, entretando quando fechar o navegador, as informações guardadas serão apagadas


function logout (){
    localStorage.removeItem("nomeLogado");
    localStorage.removeItem("emailLogado");
    localStorage.removeItem("senhaLogada");
    window.location.href = "login.html";
}