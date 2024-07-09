
const form = document.querySelector('form')
const inputName = document.querySelector('input[name="name"]')
const inputLastName = document.querySelector('input[name="lastName"]')
const inputCellphone = document.querySelector('input[name="cellphone"]')
const conclusion = document.querySelector('.conclusion')
const formArea = document.querySelector('.formArea')

const invalidField = (elem) => {
    elem.classList.add('invalid');
    elem.nextElementSibling.classList.remove('hidden');
}


const inputValidation = () =>{
// ! pra representar input diferente de value ou seja sem valor inserido
    if (!inputName.value){
        invalidField(inputName)
    }

    if (!inputLastName.value){
        invalidField(inputLastName)
    }

    if (!inputCellphone.value){
        invalidField(inputCellphone)
    }

    else{
        isValidForm = true;
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    inputValidation()

    if (isValidForm){
        formArea.remove()
        conclusion.classList.remove('hidden')        
        console.log('Formulário enviado')
    }
})

inputName.addEventListener('input', () => {
    inputName.classList.remove('invalid')
    inputName.nextElementSibling.classList.add('hidden')
})