

const form = document.querySelector('form')
const inputName = document.querySelector('input[name="name"]')
const inputLastName = document.querySelector('input[name="lastName"]')
const inputCellphone = document.querySelector('input[name="cellphone"]')
const conclusion = document.querySelector('.conclusion')
const formArea = document.querySelector('.formArea')
const agreeCheck = document.querySelector('input[name="agreeCheck"]')
const inputPlate = document.querySelector('input[name="plate"]')


var isValidForm = false;

const invalidField = (elem) => {
    elem.classList.add('invalid');
    elem.nextElementSibling.classList.remove('hidden');
}

const invalidCheck = (elem) => {
    elem.parentElement.nextElementSibling.classList.remove('hidden');
}



const inputValidation = () =>{
// ! pra representar input diferente de value ou seja sem valor inserido
    if (!inputName.value){
        invalidField(inputName)
    }

    else if (!inputLastName.value){
        invalidField(inputLastName)
    } 

    else if (!inputCellphone.value){
        invalidField(inputCellphone)
    }

    else if(!agreeCheck.checked){
        invalidCheck(agreeCheck)
    }

    else{
        isValidForm = true;
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    inputValidation()

    if (isValidForm){
        const lead = {
            name: inputName.value,
            lastName: inputLastName.value,
            phone: inputCellphone.value,
            plate: inputPlate.value
        };
        JSON.stringify(lead);
        formArea.remove();
        conclusion.classList.remove('hidden');
        console.log('Formulário enviado');
        console.log(lead);
    }
})

inputName.addEventListener('input', () => {
    inputName.classList.remove('invalid')
    inputName.nextElementSibling.classList.add('hidden')
})