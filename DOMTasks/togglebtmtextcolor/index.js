// let i =0;
// function toggleButton(){
//     let buttonElement =document.getElementById("start-btn");
//     if(i%2 == 0){
//         buttonElement.textContent = "Stop";
//         buttonElement.style.backgroundColor = 'red';
//         i++;
//     }else{
//         buttonElement.textContent = "Start";
//         buttonElement.style.backgroundColor = "";
//         i++;
//     }
// }

function toggleButton(){
    const buttonElement = document.getElementById("start-btn");
    if(buttonElement.textContent == "Start"){
        buttonElement.textContent = "Stop";
        buttonElement.style.backgroundColor = "red"
    }else{
        buttonElement.textContent = "Start";
        buttonElement.style.backgroundColor = "";
    }
}