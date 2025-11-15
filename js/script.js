// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const apiUri = "https://flynn.boolean.careers/exercises/api/random/mail";
const email = [];
const container = document.getElementById("email-list-container")
const totalEmails = 10;
let counter = 0;

function fatchEmail() {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (resp) {
            email.push(resp.data.response)
            counter++
            if(counter === totalEmails){
                displayContent()
            }
        
        })

}

function displayContent() {
    let htmlContent = '<ul class="list-group list-group-flush">';
    email.forEach(element => {
        htmlContent += `<li class="list-group-item text-primary fw-semibold">` + element + `</li>`;
    });
    htmlContent += '</ul>';
    container.innerHTML = htmlContent;
}

for (let i = 0; i < totalEmails; i++) {
    fatchEmail()
};