import './style.css';

document.addEventListener("DOMContentLoaded", function() {
    // Obtenez la référence de la modal et du bouton de fermeture
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.querySelector(".close");

    // Affichez la modal lorsque la page est chargée
    modal.style.display = "block";

    // Ajoutez un écouteur d'événement au bouton de fermeture de la modal
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fermez la modal si l'utilisateur clique en dehors de la zone de contenu de la modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

