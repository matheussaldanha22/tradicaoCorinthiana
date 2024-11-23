var nomeValido = false
var emailValido = false
var senhaValido = false
var confirmSenhaValido = false

function validarNome(){
    var nomeVar = ipt_nome.value;
    if(nomeVar != ''){
        nomeValido = true
        alertNome.innerHTML = ''
    }else{
        alertNome.innerHTML = 'O nome não pode ser vazio'
    }
}

function validarEmail(){
    var emailVar = ipt_email.value;
    var incluiCaracter = emailVar.includes('@') && emailVar.includes('.')

    if(emailVar == ''){
        alertEmail.innerHTML = 'O Email não pode ser vazio'
    }else if(!incluiCaracter){
        alertEmail.innerHTML = 'Email inválido, deve conter @ e .'
    }else{
        emailValido = true
        alertEmail.innerHTML = ''
    }   
}

function validarSenha(){
    var senhaVar = ipt_senha.value
    var confirmacaoSenhaVar = ipt_confirmSenha.value
    var possuiCaracterEsp = false
    var caracteresEsp = '!@#$%&*'

    //validar caracter especial na senha
    for(var i = 0; i < caracteresEsp.length; i++){
        var caracterAtual = caracteresEsp[i]
        if(senhaVar.includes(caracterAtual)){
            possuiCaracterEsp = true
        }
    }

    if(!possuiCaracterEsp){
        alertSenha.innerHTML = 'Senha não possui caracter especial'
    }else if(senhaVar.length < 8){
        alertSenha.innerHTML = 'Senha precisa ter no minimo 8 caracteres'
    }else{
        senhaValido = true
        alertSenha.innerHTML = ''
    }
    
    if(senhaVar != confirmacaoSenhaVar){
        alertConfirmSenha.innerHTML = 'Senhas não são iguais.'
    }else{
        alertConfirmSenha.innerHTML = ''
        confirmSenhaValido = true
    }


}

function cadastrar() {
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmSenha.value;
  var cadastroValido = nomeValido && emailValido && senhaValido && confirmSenhaValido

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    return;
    
  }else if(cadastroValido == true){
      // Enviando o valor da nova input
      fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar
        }),
    })
    resultadoCadastro.style.textAlign = 'left'
    resultadoCadastro.innerHTML = `<span style='color:blue'>Cadastro realizado!</span> Redirecionando para login..`
    setTimeout(function () {
                    
                        window.location.href = "login.html";
                    }, 1000)
}

}