const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];

const soni = document.getElementById("texto")

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
            soni.innerHTML = '<p>Sônia Guimarães foi a primeira mulher brasileira a obter o título de doutora em Física.</p>';
            break;
        case "2":
            soni.innerHTML = '<p>Em 2017, foi criado dentro do Instituto de Física da Universidade de São Paulo o Coletivo Negro Sonia Guimarães. Esse coletivo tem como objetivo principal ser um ambiente de acolhimento e apoio aos estudantes negros da instituição. Ele busca promover a equidade e a inclusão racial no âmbito acadêmico, oferecendo suporte emocional, orientação e incentivo aos estudantes negros que enfrentam desafios e enfrentam questões relacionadas à representatividade e ao acesso igualitário à educação.</p>';
            break;
        case "3":
            soni.innerHTML = '<p>Sônia sempre se destacou academicamente, especialmente em matemática, e seu amor pela ciência a levou a cursar Física na Universidade Federal de São Carlos.</p>';
            break;
        case "4":
            soni.innerHTML = '<p>Além de suas conquistas acadêmicas, Sônia também desempenha um papel ativo na luta pela inclusão de mulheres e negros no ambiente acadêmico. Ela é uma das fundadoras da Faculdade Zumbi dos Palmares e está envolvida em projetos que visam proporcionar oportunidades para estudantes de áreas carentes e marginalizadas.</p>';
            break;
        case "5":
            soni.innerHTML = '<p>Ao retornar ao Brasil, Sônia Guimarães fez história ao se tornar a primeira mulher a dar aulas no Instituto Tecnológico de Aeronáutica (ITA). Ela enfrentou desafios como a falta de representatividade feminina na área de exatas, mas sua dedicação e perseverança abriram caminho para mais inclusão e diversidade nas ciências exatas.</p>';
            break;
        case "6":
            soni.innerHTML = '<p>Durante sua jornada acadêmica, Sônia inicialmente planejava seguir a carreira de Engenharia Civil, mas suas aulas sobre materiais sólidos despertaram seu interesse pela Física. Após concluir a graduação, ela prosseguiu para o mestrado em Física Aplicada, onde se dedicou ao estudo da técnica elipsométrica para caracterização ótica de filmes finos.</p>';
            break;
        case "7":
            soni.innerHTML = '<p>Em 1986, Sônia Guimarães teve a oportunidade de realizar um breve período de pesquisa no Istituto LAMEL do CNR em Bologna, na Itália. Essa experiência permitiu que ela expandisse seus conhecimentos e estabelecesse conexões com outros pesquisadores renomados na área. Durante sua estadia no instituto, Sônia teve a oportunidade de aprofundar seus estudos e explorar novas perspectivas em sua área de pesquisa. Essa experiência internacional contribuiu para o seu crescimento acadêmico e enriqueceu seu repertório científico, fortalecendo ainda mais sua trajetória profissional na Física.</p>';
            break;
        case "8":
            soni.innerHTML = '<p>O caminho de Sônia a levou além das fronteiras do Brasil, conduzindo-a a um doutorado na área de materiais eletrônicos na The University of Manchester Institute of Science and Technology, na Inglaterra. Em 1989, ela concluiu seu pós-doutorado, tornando-se a primeira mulher negra brasileira a obter esse título.</p>';
            break;
        case "9":
            soni.innerHTML = '<p>Ela cresceu em meio a desafios, estudando em escolas públicas e trabalhando para investir em sua educação.</p>';
            break;
        default:
            soni.innerHTML = '<p>Sônia Guimarães é uma física brasileira que se tornou um marco na história da ciência ao se tornar a primeira mulher doutorada em Física no Brasil. Nascida em São Paulo, no dia 26 de junho de 1957.</p>';
            break;
    }
    
    
  }
  
  exibirModal();
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
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

    }, 1000)

}

window.onload = ()=>{
    
    spanPlayer.innerHTML =localStorage.getItem('player')
    startTimer()
    loadGame()
}



