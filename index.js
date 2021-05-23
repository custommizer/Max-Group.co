function sendMail() {

    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sadstorystudios.85@gmail.com",
        Password: "9B8CD41E019FAAFF5E4E170DF5536513612F",
        To: "sadstorystudios.85@gmail.com",
        From: "sadstorystudios.85@gmail.com",
        Mail: `${mail}`,
        Subject: `${name}`,
        Body: `${number}`,
    }).then(
        message => alert('Ваша заявка успешно принята ;)')
    );
}

function closeMenu() {
    $('.menu').toggleClass('menu_active');
}

function splitMenu() {
    $('.menu').toggleClass('menu_active');


}