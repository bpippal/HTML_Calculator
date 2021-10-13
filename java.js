const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const clear = document.querySelector("#clear");
const solve = document.querySelector("#solve");

const updateInput = (event) => {

    //Update the input area
    input.value += event.target.innerText;
};

buttons.forEach(button => {
    button.onclick = updateInput;
})

//Over writing the 'CLEAR' and '=' button

clear.onclick = () =>{
    input.value = "";
}

solve.onclick = () =>{
    //Use eval function

    const ans = eval(input.value);

    input.value = ans;
}