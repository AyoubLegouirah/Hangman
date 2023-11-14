import './style1.css';

const mots = ["POMME", "CHIEN", "TABLE", "VAGUE", "PLAGE", "HACHE", "JOYAU"];
let motsecret = mots[Math.floor(Math.random() * mots.length)];
let lettresTrouvees = new Array(motsecret.length).fill(false);
let tentativesRestantes = 10;
let score = 0;
let victoiresConsecutives = 0;
const wordBlanks = document.getElementById("word-blanks");
const scoreElement = document.getElementById("Score");
const victoiresConsecutivesElement = document.getElementById("VictoireConsecutive");
const restartButton = document.getElementById("restart");


// Afficher message en Rouge
function afficherMessage(message) {
    const bulle = document.createElement("div");
    bulle.classList.add("bulle");
  

    const contenuBulle = document.createElement("p");
    contenuBulle.textContent = message;
    bulle.appendChild(contenuBulle);
  
    
    const boutonFermer = document.createElement("button");
    boutonFermer.textContent = "x";
    boutonFermer.addEventListener("click", function () {
        bulle.remove();
    });
    bulle.appendChild(boutonFermer);
  
    document.body.appendChild(bulle);
  
    setTimeout(function () {
        bulle.remove();
    }, 10000); 
}
// Afficher message en Vert
function afficherMessageV(message) {
    const bulle = document.createElement("div");
    bulle.classList.add("bulleV");
  
    
    const contenuBulle = document.createElement("p");
    contenuBulle.textContent = message;
    bulle.appendChild(contenuBulle);
  
  
    const boutonFermer = document.createElement("button");
    boutonFermer.textContent = "x";
    boutonFermer.addEventListener("click", function () {
        bulle.remove();
    });
    bulle.appendChild(boutonFermer);
  
    document.body.appendChild(bulle);
  
    setTimeout(function () {
        bulle.remove();
    }, 10000); 
}
// Afficher message en Gris
function afficherMessageG(message) {
    const bulle = document.createElement("div");
    bulle.classList.add("bulleG");
  
   
    const contenuBulle = document.createElement("p");
    contenuBulle.textContent = message;
    bulle.appendChild(contenuBulle);
  
    
    const boutonFermer = document.createElement("button");
    boutonFermer.textContent = "x";
    boutonFermer.addEventListener("click", function () {
        bulle.remove();
    });
    bulle.appendChild(boutonFermer);
  
    document.body.appendChild(bulle);
  
    setTimeout(function () {
        bulle.remove();
    }, 10000); 
}





// Boutique
const buyHintButton = document.getElementById("buyHint");

buyHintButton.addEventListener("click", function() {
    
    if (score >= 5) { 
        
        score -= 5;
        scoreElement.textContent = "Score: " + score;
        
        
        let index = lettresTrouvees.indexOf(false);
        if (index !== -1) {
            lettresTrouvees[index] = true;
            updateWordDisplay();
        }
    } else {
   
        afficherMessageG("Score insuffisant pour acheter un indice.");
    }
});




function updateWordDisplay() {
    let motAffiche = "";
    for (let i = 0; i < motsecret.length; i++) {
        if (lettresTrouvees[i]) {
            motAffiche += motsecret[i];
        } else {
            motAffiche += "_";
        }
    }

    wordBlanks.textContent = motAffiche;
}

function handleLetterClick(letterButton, letter) {
    if (lettresTrouvees.includes(false)) {
        if (motsecret.includes(letter)) {
            motsecret.split('').forEach((lettre, index) => {
                if (lettre === letter && !lettresTrouvees[index]) {
                    lettresTrouvees[index] = true;
                    updateWordDisplay();
                    letterButton.style.backgroundColor = "#56f3bc";
                    // Mettez à jour le score si la lettre est correcte
                    score++;
                    scoreElement.textContent = "Score: " + score;
                }
            });

            if (lettresTrouvees.every(Boolean)) {
                // Le joueur a gagné
                afficherMessageV("Félicitations ! Vous avez gagné.");
                victoiresConsecutives++;
                victoiresConsecutivesElement.textContent = "Victoire consécutive: " + victoiresConsecutives;
                // Réinitialisez pour un nouveau mot
                resetGame();
            }
        } else {
            tentativesRestantes--;
            letterButton.style.backgroundColor = "#f47087";
            // Mettez à jour l'image du pendu

            if (tentativesRestantes === 0) {
                // Le joueur a perdu
                afficherMessage("Game over, vous avez perdu. Le mot était : " + motsecret);
                
                // Réinitialisez pour un nouveau mot
                resetGame();
            }
        }
    }
}



function resetGame() {
    // Réinitialisez les variables pour un nouveau mot
    motsecret = mots[Math.floor(Math.random() * mots.length)];
    lettresTrouvees = new Array(motsecret.length).fill(false);
    tentativesRestantes = 6;
    updateWordDisplay();

    // Réinitialisez les couleurs des boutons
    const lettreButtons = document.querySelectorAll(".contenair button");
    lettreButtons.forEach((button) => {
        button.style.backgroundColor = ""; // Réinitialisez la couleur à la normale
    });
}


restartButton.addEventListener("click", function () {
    // Redémarrez le jeu lorsque le bouton de redémarrage est cliqué
    resetGame();
    score = 0;
    victoiresConsecutives = 0;
    scoreElement.textContent = "Score: " + score;
    victoiresConsecutivesElement.textContent = "Victoire consécutive: " + victoiresConsecutives;
});

const lettreButtons = document.querySelectorAll(".contenair button");
lettreButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (!lettresTrouvees.includes(false)) {
            return;
        }
        const lettre = button.textContent;
        if (!lettresTrouvees[motsecret.indexOf(lettre)]) {
            handleLetterClick(button, lettre);
        }
    });
});

updateWordDisplay();



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