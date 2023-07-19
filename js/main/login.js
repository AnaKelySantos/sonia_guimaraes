const input = document.querySelector('.login__input1')
const button = document.querySelector('.login__button1')
const form = document.querySelector('.login-form-biografia')

const validateInput = ({target})=>{
//console.log(event.target.value)
if (target.value.length>2) {
    button.removeAttribute('disabled')
    return
}

button.setAttribute('disabled','')

}

const handleSubmit = (event)=>{

    event.preventDefault()
   // console.log('logando...')
   //console.log(input.value)
   localStorage.setItem('player', input.value)
   window.location = 'game.html'

}

input.addEventListener('input', validateInput)

form.addEventListener('submit', handleSubmit)