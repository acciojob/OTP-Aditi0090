// document.addEventListener("DOMContentLoaded", () => {
//     const codes = document.querySelectorAll(".code");

//     codes.forEach((input, index) => {
//         input.addEventListener("input", (e) => {
//             if (e.target.value.match(/[0-9]/)) {
//                 e.target.classList.add("focused");
//                 const nextInput = codes[index + 1];

//                 if (nextInput) {
//                     nextInput.focus();
//                 }
//             } else {
//                 e.target.value = ""; // Clear invalid input
//             }
//         });

//         input.addEventListener("keydown", (e) => {
//             if (e.key === "Backspace") {
//                 if (e.target.value === "") {
//                     const prevInput = codes[index - 1];
//                     if (prevInput) {
//                         prevInput.focus();
//                         prevInput.classList.add("focused");
//                     }
//                 }
//             }
//         });

//         input.addEventListener("focus", () => {
//             input.classList.add("focused");
//         });

//         input.addEventListener("blur", () => {
//             input.classList.remove("focused");
//         });
//     });
// });
