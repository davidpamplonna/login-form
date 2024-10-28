// seção input
const inputs = document.querySelectorAll('.input-item input'); 
const inputItems = document.querySelectorAll('.input-item');
const icons = document.querySelectorAll('.input-box i');

inputs.forEach((input, index) => {
    const inputItem = inputItems[index];

    const icon = icons[index];

    input.addEventListener('focus', () => {
        inputItem.classList.add('focused');
        icon.classList.add('focused-icon');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            inputItem.classList.remove('focused'); 
            icon.classList.remove('focused-icon');
        }
    });

    
});

// seção dark mode

const mode = document.getElementById('mode-icon');
const formdark = document.getElementById('login-form');

if (formdark) {
    mode.addEventListener('click', () => {
        if (mode.classList.contains('bxs-moon')) {
            // Muda o icone para sol
            mode.classList.remove('bxs-moon');
            mode.classList.add('bxs-sun');
            
            // Adiciona a class dark
            formdark.classList.add('dark');
        } else {
            // Muda o ícone para lua
            mode.classList.remove('bxs-sun');
            mode.classList.add('bxs-moon');

            // Remove a classe 'dark' do formulário
            formdark.classList.remove('dark');
        }
    });
} 




// campos de input 
const form = document.querySelector('#login-form');
const  inputname = document.querySelector('#name');
const inputemail = document.querySelector('#email')
const inputpassword = document.querySelector('#password')


// mensagens de erros
const msgemail = document.querySelector('#erroemail')
const msgname = document.querySelector('#erroname')
const msgpassword = document.querySelector('#erropassword')


form.addEventListener('submit', function(event){
    
    event.preventDefault();

    validinput();    
})


function validinput (){

    const nameinput = inputname.value.trim();
    const emailinput = inputemail.value.trim();
   
    

    msgname.textContent = ''
    msgemail.textContent = ''



    if (nameinput === '') {
        msgname.textContent = 'Preencha o campo corretamente.';
        valid = false;
    }

    if (emailinput === '') {
        msgemail.textContent = 'Preencha o campo corretamente.';
        valid = false;
    } else if (!validemail(emailinput)) {
        msgemail.textContent = 'Por favor, insira um email válido.';
        valid = false;
    }
    
    else {
        alert('Login realizado com sucesso');
        location.reload();
    }
}


function validemail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



