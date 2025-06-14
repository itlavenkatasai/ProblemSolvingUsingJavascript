window.onload = () => {

    const textBox = document.getElementById("txt-box");
    const charCount = document.getElementById("char-count");
    textBox.addEventListener("input",() => {
        const length = textBox.value.length;
        charCount.textContent = `count : ${length}`;
    })
}