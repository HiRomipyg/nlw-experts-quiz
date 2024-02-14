//criar variavel com const chamada perguntas que contem as perguntas e respostas do quiz
const perguntas = [
  {
    pergunta: "Qual biblioteca é usada para criar jogos em Python?",
    respostas: [
      "PyGame",
      "PyGraphics",
      "PyPlay"
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para carregar uma imagem em PyGame?",
    respostas: [
      "load_image()",
      "load()",
      "pygame.load_image()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para desenhar um retângulo em uma tela em PyGame?",
    respostas: [
      "draw.rect()",
      "pygame.draw.rect()",
      "pygame.rect.draw()"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'flip()' em PyGame?",
    respostas: [
      "Virar a tela para o lado oposto",
      "Alternar entre as superfícies frontal e traseira da tela",
      "Inverter uma imagem"
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para definir a taxa de quadros por segundo em PyGame?",
    respostas: [
      "set_fps()",
      "set_frame_rate()",
      "Clock.tick()"
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'blit()' faz em PyGame?",
    respostas: [
      "Desenha um retângulo",
      "Desenha um círculo",
      "Desenha uma imagem em uma superfície"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do método 'get_rect()' em PyGame?",
    respostas: [
      "Obter o tamanho da tela",
      "Obter o retângulo que contém a imagem",
      "Obter a posição do mouse"
    ],
    correta: 1
  },
  {
    pergunta: "Como você pode verificar se duas sprites colidiram em PyGame?",
    respostas: [
      "Usando a função 'collision.detect()'",
      "Usando a função 'collide()'",
      "Usando o método 'colliderect()'"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do método 'quit()' em PyGame?",
    respostas: [
      "Finaliza o jogo",
      "Fecha a janela do jogo",
      "Pausa o jogo"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a classe base para todas as sprites em PyGame?",
    respostas: [
      "Sprite",
      "BaseSprite",
      "PySprite"
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