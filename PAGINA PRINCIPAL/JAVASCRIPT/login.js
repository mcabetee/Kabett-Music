function butLogin() {

    
    let input_usuario = document.getElementById('usuario').value

    let input_senha = Number(document.getElementById('senha').value);

    let usuario = "administrador123"
    let senha = 12345

    if (input_usuario === usuario && input_senha === senha) {

        window.location.href = 'Primeiro.html'

    } else {

        alert('Usuario ou senha estão incorretos')

    }

}

function enter(event){

    if(event.key === "Enter"){

        butLogin();

    }

}