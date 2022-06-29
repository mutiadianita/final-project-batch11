
let bgColor = document.getElementById("bg-color");
let textColor = document.getElementById("text-color");

bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = bgColor.value;
});
textColor.addEventListener("change", (event) => {
    document.body.style.color = textColor.value;
});