

window.addEventListener('load', function() {
    if (window.innerWidth >= 980) { // Ajuste o breakpoint conforme necessário
        document.getElementById('warning-message').style.display = 'flex';
        document.getElementById('original-content').classList.add('blurred');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputName = document.querySelector('input[name="name"]');
    const inputLastName = document.querySelector('input[name="lastName"]');
    const inputCellphone = document.querySelector('input[name="cellphone"]');
    const conclusion = document.querySelector('.conclusion');
    const formArea = document.querySelector('.formArea');
    const agreeCheck = document.querySelector('input[name="agreeCheck"]');
    const inputPlate = document.querySelector('input[name="plate"]');

    // Aplicando a máscara ao input
    Inputmask({
        mask: '+55 (99) 99999-9999',
        placeholder: '+55 (__) _____-____',
        clearIncomplete: true
    }).mask(inputCellphone);

    // Regex para validar o formato do número de telefone
    const phoneRegex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;

    // Função para validar o valor do input
    function validatePhoneNumber(phone) {
        return phoneRegex.test(phone);
    }

    var isValidForm = false;

    const invalidField = (elem) => {
        elem.classList.add('invalid');
        elem.nextElementSibling.classList.remove('hidden');
    }

    const invalidCheck = (elem) => {
        elem.parentElement.nextElementSibling.classList.remove('hidden');
    }

    const inputValidation = () => {
        // ! pra representar input diferente de value ou seja sem valor inserido
        if (!inputName.value) {
            invalidField(inputName);
        } else if (!inputLastName.value) {
            invalidField(inputLastName);
        } else if (!inputCellphone.value || !validatePhoneNumber(inputCellphone.value)) {
            invalidField(inputCellphone);
        } else if (!agreeCheck.checked) {
            invalidCheck(agreeCheck);
        } else {
            isValidForm = true;
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        inputValidation();

        if (isValidForm) {
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
    });

    inputName.addEventListener('input', () => {
        inputName.classList.remove('invalid');
        inputName.nextElementSibling.classList.add('hidden');
    });

    inputLastName.addEventListener('input', () => {
        inputLastName.classList.remove('invalid');
        inputLastName.nextElementSibling.classList.add('hidden');
    });

    inputCellphone.addEventListener('input', () => {
        inputCellphone.classList.remove('invalid');
        inputCellphone.nextElementSibling.classList.add('hidden');
    });

    agreeCheck.addEventListener('change', () => {
        agreeCheck.parentElement.nextElementSibling.classList.add('hidden');
    });
});


