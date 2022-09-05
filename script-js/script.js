var elSiteForm = document.querySelector(".site-form");
var elFormInput = document.querySelector(".form-input");
var elFormBtn = document.querySelector(".form-btn");
var elNatija = document.querySelector(".natija");

elSiteForm.addEventListener("submit", function(e) {
    event.preventDefault()

    var inputValue = elFormInput.value;

    if (inputValue % 3 === 0 && inputValue % 5 === 0) {
        elNatija.textContent = `Fizz/Buzz`
        elNatija.classList.add("natija-content")
    }

    else if (inputValue % 5 === 0) {
        elNatija.textContent = `Buzz`
        elNatija.classList.add("natija-content")
    }

    else if (inputValue % 3 === 0) {
        elNatija.textContent = `Fizz`
        elNatija.classList.add("natija-content")
    }

    else {
        elNatija.textContent = `Ooo Noo`
        elNatija.classList.add("natija-content")
        elNatija.stye.color = "red"
    }
});
