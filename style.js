let i = 0;
function buttonClick(){
    let buttonElement = document.getElementById("button");
    if(i==0){

        buttonElement.style.backgroundColor = 'red';  
        i = 1; 
    }else{
        buttonElement.style.display = 'none';
    }
}