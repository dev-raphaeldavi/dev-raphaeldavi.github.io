// ======================================================
// SEÇÃO DE SELETORES - SELECIONANDO DA DOM (HTML)
// ======================================================

let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')
let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')
let passTypeRadios = document.getElementsByName('pass_type');

// ======================================================
// DEFININDO VARIAVEL DE CARACTERES (ALFABETO)
// ======================================================

let charset = 'abcdefgijlmnopqrstuvxwyzABCDEFGHIJLMNOPQRSTUVXWYZ0123456789!@#$%&*()'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value
}

// ======================================================
// DEFININDO FUNÇÃO PARA GERAR PASSWORD AO CLICAR
// ======================================================

function gerenatePassword() {

    let passTypeSelected = Array.from(passTypeRadios).find(radio => radio.checked);
    if(passTypeSelected){
        let passTypeSelectedValue = passTypeSelected.value;
        switch (passTypeSelectedValue) {
            case 'maiuscula':
                charset = 'ABCDEFGHIJLMNOPQRSTUVXWYZ';
                break;
            case 'minuscula':
                charset = 'abcdefgijlmnopqrstuvxwyz';
                break;
            case 'numerica':
                charset = '0123456789';
                break;
            default:
                charset = 'abcdefgijlmnopqrstuvxwyzABCDEFGHIJLMNOPQRSTUVXWYZ0123456789!@#$%&*()';
                break;
        }
    }

    let pass = ''

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass

    console.log(pass)
}

// ======================================================
// DEFININDO FUNÇÃO PARA COPIAR PASSWORD AO CLICAR
// ======================================================

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
}




