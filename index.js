const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variable myVar;",
      "v myVar;"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para imprimir uma mensagem no console em JavaScript?",
    respostas: [
      "console.print()",
      "console.log()",
      "print.console()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador usado para comparar o valor e o tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "Como você define uma função em JavaScript?",
    respostas: [
      "function: myFunction()",
      "function = myFunction()",
      "function myFunction()"
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "addToEnd()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: [
      "5",
      "32",
      "Error"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "<!-- Este é um comentário -->",
      "// Este é um comentário",
      "/* Este é um comentário */"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o tipo de dados de uma variável que não está definida em JavaScript?",
    respostas: [
      "undefined",
      "null",
      "void"
    ],
    correta: 0
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "removeLast()",
      "pop()",
      "deleteLast()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual operador é usado para atribuição em JavaScript?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 2
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta

     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl  dt').remove()

  quiz.appendChild(quizItem)
}