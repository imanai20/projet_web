
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });

    const navbarLinks = document.querySelectorAll('.navbar__link a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navbar.classList.toggle('show-nav');
        });
    })
}
toggleMenu();


function afficherEvenements(date) {
    var concerts = document.querySelectorAll('.concert');
    var noConcertMessage = document.getElementById('message');
    var concertsFound = false;

    concerts.forEach(function (concert) {
        var concertDate = concert.getAttribute('data-date');
        if (concertDate === date) {
            concert.style.display = 'block';
            concertsFound = true;
        } else {
            concert.style.display = 'none';
        }
    });

    if (!concertsFound) {
        noConcertMessage.style.display = 'block';
    } else {
        noConcertMessage.style.display = 'none';
    }
}

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();




    document.getElementById('confirmation').style.display = 'block';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var dateNaissance = document.getElementById('dateNaissance').value;
    var message = document.getElementById('message').value;

    document.getElementById('nomAffiche').textContent = 'Nom : ' + nom;
    document.getElementById('prenomAffiche').textContent = 'Prénom : ' + prenom;
    document.getElementById('dateNaissanceAffiche').textContent = 'Date de naissance : ' + dateNaissance;
    document.getElementById('messageAffiche').textContent = 'Message : ' + message;

    document.getElementById('informations').style.display = 'block';
});
