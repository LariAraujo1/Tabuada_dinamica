// Seleção de elementos

// 01 - Selecionando o formulário
const multiplicationForm = document.querySelector("#multiplication-form");
// 02 - Numero da tabuada
const numberInput = document.querySelector("#number");
// 03 - Quanta vezes desejamos multiplicar
const multiplicationInput = document.querySelector("#multiplicator");


// 05 - Limpando os campos "#multiplication-title span" e #multiplication-operations"
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Funções

// 06 - Criando a função que  cria tabela
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""; // Acesso o conteudo de texto e subtituo por string vazia

  //criando a tabuada
  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser(); // Obejto que permite transferir um string em html
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};


// Eventos


// 04
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault(); //Quando clicar no botção calcular, não quero que ele recarregue a página

  const multiplicationNumber = numberInput.value; // numero inserido da tabuada

  const multiplicatorNumber = +multiplicationInput.value; // Quantas vezes eu vou calcular o número inserido

  if (!multiplicationNumber || !multiplicatorNumber) return; // Só será executado se ambos os campos estiverem preenchidos

  createTable(multiplicationNumber, multiplicatorNumber); // vamos criar a função que cria a tabela mas para isso, precisamos garantir  que o campos "#multiplication-title span" e "#multiplication-operations" estejam vazios..... vá para o 05
});