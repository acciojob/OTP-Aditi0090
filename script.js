const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const nextInput = codes[index + 1];

        if (e.target.value.match(/[0-9]/)) {
            input.classList.add("focused"); // Mark the field as focused
            if (nextInput) {
                nextInput.focus();
                nextInput.classList.add("focused");
            }
        } else {
            e.target.value = "";
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            input.classList.remove("focused"); // Remove focus class

            if (input.value === "" && index > 0) {
                codes[index - 1].focus();
                codes[index - 1].classList.add("focused");
            }
        }
    });

    input.addEventListener("focus", () => {
        input.classList.add("focused");
    });

    input.addEventListener("blur", () => {
        input.classList.remove("focused");
    });
});
