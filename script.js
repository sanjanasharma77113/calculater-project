const display =documnet.queryselector(".display");
const buttons = document.queryselector("button");
const specialChars =["%"  , "*", "/", "-", "+","=",];
let output ="";

//Define function to calculate based on buttons clicked.
const calculate (btnValue) => {
    if (btnValue === "=" && output !== "") {
        //if output has '%' , replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        //If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        //if button is special.
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

    //add event listener to buttons , call calculate() on click.
    buttons.forEach((button) =>{
        //Button click listener calls calculate () with dataset value as argument.
        button.assEventListener("click", (e) => calculate(e.target.dataset.value));

   });
