
function cadastrar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_nome.value;
  var senhaVar = ipt_senha.value;


  var confirmacaoSenhaVar = ipt_confirmSenha.value;


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
//     .then(function (resposta) {
//       console.log("resposta: ", resposta);

//       if (resposta.ok) {
//         cardErro.style.display = "block";

//         mensagem_erro.innerHTML =
//           "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

//         setTimeout(() => {
//           window.location = "login.html";
//         }, "2000");

//         limparFormulario();
//         finalizarAguardar();
//       } else {
//         throw "Houve um erro ao tentar realizar o cadastro!";
//       }
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//       finalizarAguardar();
//     });

//   return false;
// }

// // Listando empresas cadastradas 
// function listar() {
//   fetch("/empresas/listar", {
//     method: "GET",
//   })
//     .then(function (resposta) {
//       resposta.json().then((empresas) => {
//         empresas.forEach((empresa) => {
//           listaEmpresasCadastradas.push(empresa);

//           console.log("listaEmpresasCadastradas")
//           console.log(listaEmpresasCadastradas[0].codigo_ativacao)
//         });
//       });
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//     });
// }

// function sumirMensagem() {
//   cardErro.style.display = "none";
}