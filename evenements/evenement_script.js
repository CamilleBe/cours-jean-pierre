/**
 * Event click
 */

document.querySelector('#monBtn').addEventListener('click', function () {
    alert('test addEventListener');
});

function w3c() {
    let optionReponse = document.querySelector("select");

    if (optionReponse.value !== "1994") {
        alert("Mauvais réponse la W3C à été créé par Tim en 1994");
    } else {
        alert("Bonne réponse ! Elle a été créé par Tim");
    }
}

