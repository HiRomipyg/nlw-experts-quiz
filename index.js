//criar variavel com const chamada perguntas que contem as perguntas e respostas do quiz
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método em JavaScript usado para imprimir algo no console?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var",
        "variable",
        "v",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores",
        "Atribuição",
        "Compara valores e tipos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
        "for i = 0; i < 5; i++",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função JavaScript é usada para arredondar um número para o inteiro mais próximo?",
      respostas: [
        "round()",
        "ceil()",
        "floor()",
      ],
      correta: 0
    }
  ];
  
  //com const cria a variavel chamada quiz que contem a tag com id 'quiz'
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector("template");
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
     
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    //seleciona no template a tag dt em dl e remove a 'Resposta A'
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  