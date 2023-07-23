const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];

const soni = document.getElementById("question")
const a = document.getElementById("a")
const b = document.getElementById("b")
var certa = 0; // Declaramos a variável certa no escopo glob
const timerElement = document.querySelector(".timerm"); // Seleciona a span com a classe "timerm"


      


const characters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',    
]




const createElement =(tag, className)=>{

    const element = document.createElement(tag)
    element.className = className
    return element

}

let firstCard =''
let secondCard=''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        
    }
}




const checkCards = () => {

const firstCharacter = firstCard.getAttribute('data-character')
const secondCharacter = secondCard.getAttribute('data-character')


if (firstCharacter == secondCharacter) {
    
firstCard.firstChild.classList.add('disabled-card')
secondCard.firstChild.classList.add('disabled-card')





firstCard =''
secondCard=''

checkEndGame()



const exibirModal = () => {
    modal.style.display = "block";

      
    switch (firstCharacter) {
        case "1":
            soni.innerHTML = '<p>Foi a primeira mulher brasileira a obter o título de doutora em?</p>';
           a.innerHTML=`fisica`;
           b.innerHTML=`quimica`;
           certa = 0;
            
           
            
            break;
        case "2":
            soni.innerHTML = '<p>Qual é o objetivo do Coletivo Negro Sonia Guimarães na Universidade de São Paulo?</p>';
            a.innerHTML=`Realizar eventos culturais na universidade.`;
            b.innerHTML=`Promover a equidade e a inclusão racial no âmbito acadêmico, oferecendo suporte emocional e orientação aos estudantes negros.`;
             certa = 1
            break;
        case "3":
            soni.innerHTML = '<p>Qual foi a área acadêmica em que Sônia se destacou e que a levou a cursar na Universidade Federal de São Carlos?</p>';
            a.innerHTML=`Matemática.`;
            b.innerHTML=` História`;
             certa = 0
            break;
        case "4":
            soni.innerHTML = '<p>Além de suas conquistas acadêmicas, qual é o papel ativo desempenhado por Sônia?</p>';
            a.innerHTML=`Ela é uma renomada artista de teatro.`;
            b.innerHTML=` Luta pela inclusão de mulheres e negros no ambiente acadêmico, fundadora da Faculdade Zumbi dos Palmares e envolvida em projetos de oportunidades para estudantes de áreas carentes e marginalizadas.`;
             certa = 1
            break;
        case "5":
            soni.innerHTML = '<p>Qual foi a conquista histórica de Sônia Guimarães no Instituto Tecnológico de Aeronáutica (ITA)?</p>';
            a.innerHTML=`Tornar-se a primeira mulher a dar aulas no ITA, abrindo caminho para mais inclusão e diversidade nas ciências exatas.`;
           b.innerHTML=`Tornar-se a primeira mulher a dar aulas em uma escola de dança renomada.`;
            certa = 0
            break;
        case "6":
            soni.innerHTML = '<p>Qual foi o interesse que surgiu em Sônia Guimarães durante sua jornada acadêmica?</p>';
            a.innerHTML=`Física, após suas aulas sobre materiais sólidos despertarem seu interesse.`;
           b.innerHTML=` Biologia, após suas aulas de matemática.`;
            certa = 0
            break;
        case "7":
            soni.innerHTML = '<p>Em que país Sônia Guimarães teve a oportunidade de realizar pesquisa em 1986?</p>';
            a.innerHTML=` França.`;
           b.innerHTML=` Itália.`;
            certa = 1
            break;
        case "8":
            soni.innerHTML = '<p>Onde Sônia Guimarães concluiu seu doutorado e se tornou a primeira mulher negra brasileira a obter esse título?</p>';
            a.innerHTML=`The University of Manchester Institute of Science and Technology, na Inglaterra.`;
           b.innerHTML=` Universidade de São Paulo, no Brasil.`;
            certa = 0
            break;
        case "9":
            soni.innerHTML = '<p>Como foi a educação de Sônia Guimarães durante sua infância e adolescência?</p>';
            a.innerHTML=` Ela estudou em escolas públicas e trabalhou para investir em sua educação.`;
           b.innerHTML=` Ela frequentou escolas particulares e não precisou trabalhar para investir em sua educação.`;
            certa = 0
            break;
        default:
            soni.innerHTML = '<p>Qual marco histórico Sônia Guimarães alcançou na ciência?</p>';
            a.innerHTML=`Tornou-se a primeira mulher doutorada em Física no Brasil.`;
           b.innerHTML=`Foi a primeira mulher a receber o Prêmio Nobel em Física.`;
            certa = 0
            break;
    }
    
    
    
    
    
  }
  
  exibirModal();
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    butaoclicado = false;
   
  });
  
 

}else{

setTimeout(()=>{

firstCard.classList.remove('reveal-card')
secondCard.classList.remove('reveal-card')
firstCard =''
secondCard=''
},500)
}

}

const revealCard= ({target}) =>{
   // console.log(target.parentNode)

if (target.parentNode.className.includes('reveal-card')) {

   
return
}

if (firstCard == '') {
    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode
}else if(secondCard ==''){
    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode
    checkCards()
}

//target.parentNode.classList.add('reveal-card')
}

const createCard = (character) =>{
    const card =createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('foto/${character}.jpg')`

    //card.className = 'card'
   // front.className = 'face front'
   //back.className = 'face back'

    card.appendChild(front)
    card.appendChild(back)

   // grid.appendChild(card)

   card.addEventListener('click', revealCard)

    card.setAttribute('data-character', character)

   return card
}
//createCard()

const loadGame = () =>{

    const duplicateCharacters = [ ...characters, ...characters]

    const shuffledArdArray = duplicateCharacters.sort(()=>  Math.random()- 0.5)
    
  

    shuffledArdArray.forEach((character)=>{
        
        const card = createCard(character);
        grid.appendChild(card)
        
       
    })

    
    //console.log(characters)
}

const startTimer = () =>{

  this.loop = setInterval(()=>{

            const currentTime = Number(timer.innerHTML) 
            timer.innerHTML = currentTime + 1
            timerElement.innerHTML = currentTime + 1
    }, 1000)

}

window.onload = ()=>{
    
    spanPlayer.innerHTML =localStorage.getItem('player')
    startTimer()
    loadGame()
}


var butaoclicado = false;

  function cor() {
  const buttons = document.querySelectorAll('.choice');
  const pontuacao = document.getElementById('pontuacao');
  const clickedButton = event.target.id; // ID do botão clicado pelo usuário
  const currentTime = Number(timer.textContent);

  // Desabilita o evento de clique nos botões
  buttons.forEach((button) => {
    button.removeEventListener('click', handleChoice);
  });

  

  if (certa === 0) {
    if (!butaoclicado && clickedButton === 'a') {
      // Resposta correta clicando no botão A
      a.style.backgroundColor = "#31FF4E"; // Cor verde no botão A
      b.style.backgroundColor = "#FF0F0F"; // Cor vermelha no botão B

      // Adiciona mensagem de penalidade de tempo perdido ao campo 'pontuacao' no modal
      pontuacao.textContent = '-10 segundos!';
        
      // Subtrai 10 segundos do tempo
      timer.textContent = currentTime - 10;
      butaoclicado = true
    } else if (!butaoclicado && clickedButton === 'b') {
      // Resposta errada clicando no botão B
      a.style.backgroundColor = "#31FF4E"; // Cor verde no botão B
      b.style.backgroundColor = "#FF0F0F"; // Cor vermelha no botão A

      // Adiciona mensagem de recompensa de tempo ganho ao campo 'pontuacao' no modal
      pontuacao.textContent = '+30 segundos!';

      // Adiciona 30 segundos ao tempo
      timer.textContent = currentTime + 30;
      butaoclicado = true
    }
  } else if (certa === 1) {

      
    if (!butaoclicado & clickedButton === 'b') {
      // Resposta errada clicando no botão A
      b.style.backgroundColor = "#31FF4E"; // Cor verde no botão A
      a.style.backgroundColor = "#FF0F0F"; // Cor vermelha no botão B

      // Adiciona mensagem de recompensa de tempo ganho ao campo 'pontuacao' no modal
      pontuacao.textContent = '-10 segundos!';

      // Adiciona 30 segundos ao tempo
      timer.textContent = currentTime - 10;
      
      butaoclicado = true
    } else if (!butaoclicado && clickedButton === 'a') {
      // Resposta correta clicando no botão B
      b.style.backgroundColor = "#31FF4E"; // Cor verde no botão B
      a.style.backgroundColor = "#FF0F0F"; // Cor vermelha no botão A

      // Adiciona mensagem de penalidade de tempo perdido ao campo 'pontuacao' no modal
      pontuacao.textContent = '+30 segundos!';

      // Subtrai 10 segundos do tempo
      timer.textContent = currentTime + 30;
      butaoclicado = true
    }
  }

  // Adiciona um atraso para limpar as cores e mensagens
  setTimeout(() => {
    // Remove a mensagem de penalidade/recompensa de tempo do campo 'pontuacao' no modal
    pontuacao.textContent = "";

    // Reinicia as cores dos botões
    a.style.backgroundColor = "";
    b.style.backgroundColor = "";
  
    // Volta a adicionar o evento de clique aos botões
    buttons.forEach((button) => {
      button.addEventListener('click', handleChoice);
    });

    // Volta a ocultar as cartas somente se ambas não forem a mesma carta
    if (firstCard !== secondCard) {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');
    }

    // Limpa as variáveis firstCard e secondCard
    firstCard = '';
    secondCard = '';

    // Habilita os botões para a próxima pergunta
    enableButtons();
  }, 9000);
}





