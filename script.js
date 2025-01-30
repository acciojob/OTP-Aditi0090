//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const nextInput = codes[index + 1];

        if (e.target.value.match(/[0-9]/)) {
            if (nextInput) nextInput.focus();
        } else {
            e.target.value = "";
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});
