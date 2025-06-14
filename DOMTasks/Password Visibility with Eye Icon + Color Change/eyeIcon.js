let eyeIcon = document.getElementById("visible-icon");
let inputType = document.getElementById("password");
eyeIcon.addEventListener("click",() => {
    inputType.type = "text";
    inputType.style.borderColor = 'red';
    inputType.style.color = 'red';
})