let dropdownButton = document.querySelector(".menu-icon");
let dropdownUl = document.querySelector("nav ul");

dropdownButton.addEventListener("click", function () {
    // Metoda toggle adauga o clasa daca nu exista, respectiv o sterge, daca exista.
    dropdownUl.classList.toggle("dropdown-visible");
});