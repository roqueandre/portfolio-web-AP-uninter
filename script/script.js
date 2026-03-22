function validadeFields() {
// Valida se os campos foram preenchidos corretamente
    let fName = document.forms['myForm']['name'].value;
    let fEmail= document.forms['myForm']['email'].value;
    let fMsg= document.forms['myForm']['msg'].value;
    let text = document.getElementById("modalMsg");

    if (fName == "" || fEmail == "" || fMsg == "") {
        text.textContent = "Gentileza preencher todos os campos.";
    } else {
        text.textContent = "Mensagem enviada com sucesso!"
    }
};

function toggleDarkMode () {
    let element = document.body;
    element.classList.toggle('dark-mode')
}

const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");

//Mostra um modal de feedback e apaga os campos preenchidos.
btn.addEventListener("click", ()=> {   
    validadeFields(); 
    modal.showModal();
    document.getElementById("formReset").reset();
})

