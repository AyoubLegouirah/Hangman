import './style.css';

document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("myModal");
    const closeModalBtn = document.querySelector(".close");


    modal.style.display = "block";


    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });


    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

