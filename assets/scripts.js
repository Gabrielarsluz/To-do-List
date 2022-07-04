//	Crie um campo de input de texto e um botão para adicionar a tarefa à lista;
// -----Done-----
//Quando o botão for pressionado, o texto deve aparecer na lista com um checkbox ao lado;
//
//Quando o usuário selecionar o checkbox, o item correspondente deve ficar com o texto riscado. 
//(ex.: tarefa completa. dica: você pode resolver isso facilmente com CSS)

// var texto = document.createElement(nomeDaTag);

// // function saveValue = {
// //     if (condição) {
// //         instrução1
// //      } else {
// //         instrução2
// //      }
// // }

// document.body.onload = adcElemento;

// function adcElemento () {
//   // cria um novo elemento div
//   // e dá à ele conteúdo
//   var divNova = document.createElement("div");
//   var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
//   divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

//   // adiciona o novo elemento criado e seu conteúdo ao DOM
//   var divAtual = document.getElementById("div1");
//   document.body.insertBefore(divNova, divAtual);
// }


var input = document.querySelector("#name");

function saveValue(a) {
  a.preventdefault()
  const inputField = document.getElementById('name');    
  addTarefs(inputField.value);
  form.reset();
}


function enviar(){
 // var valor = document.getElementsByClassName("name").value; 
 //alert("Você digitou: " + valor);


}