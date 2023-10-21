const buttons = document.querySelectorAll('.button');
const classes = document.querySelectorAll('.spec');

buttons.forEach((button, count) => {
    button.addEventListener("click", () => {
        
        const selectedButton = document.querySelector(".button.selected");
        selectedButton.classList.remove("selected");

    
        button.classList.add("selected");

        const selectedSpec = document.querySelector(".spec.active");
        selectedSpec.classList.remove("active");
        classes[count].classList.add("active");

    })
})