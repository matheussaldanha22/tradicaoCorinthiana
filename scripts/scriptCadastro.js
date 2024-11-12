var checado = false
function checar(){
    var nome = ipt_nome.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var confirmSenha = ipt_confirmSenha.value

    var emailValido = email.includes('@') && email.includes('.') 
    if(!emailValido){
        alert('Email invalido')
    }
}