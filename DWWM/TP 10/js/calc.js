let mathInput = "0"; // expression en cours d'entrée
let numInput = "0"; // nombre en cours d'entrée, utile pour éviter les '.' à répétition

function connectBtn(id, fn) {
    const elem = document.getElementById(id);    
    if (!elem) {
        console.error(`Couldn't find id ${id}!`);
        return;
    }

    elem.onclick = fn;
    console.log(`[calc] Registered button id '${id}'.`);
}

/* https://stackoverflow.com/a/8935675 */
function isNumeric(str){
    return /^\d+$/.test(str);
}

function update(showResult) {
    const elem = document.getElementById("math_output");    
    if (!elem) {
        console.error(`Couldn't find math_output!`);
        return;
    }

    mathInput = mathInput.replace(/^0+/, ''); /* https://stackoverflow.com/a/6676498 */
    if (mathInput.length <= 0) mathInput = "0";

    if (showResult) {
        let result = eval(mathInput).toString();
        elem.innerHTML = result;
        
        mathInput = result;
        numInput = "";
    }
    else
        elem.innerHTML = mathInput;
}

function lazyConnectDigit(id) {
    return connectBtn(id, () => { 
        mathInput += id; 
        numInput += id;
        update(false); 
    });
}

function lazyConnectOp(id) {
    return connectBtn(id, () => { 
        let lastIndex = mathInput.length - 1;
        let char = mathInput.charAt(lastIndex);
        if (!isNumeric(char)) 
            return; 
    
        mathInput += id; 
        numInput = "";
        update(false); 
    });
}

/* main */
let lazyDigitRegistrations = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
lazyDigitRegistrations.forEach(element => {
    lazyConnectDigit(element);    
});

let lazyOpRegistrations = ["+", "-", "/", "*"];
lazyOpRegistrations.forEach(element => {
    lazyConnectOp(element);    
});

connectBtn(".", () => {
    if (numInput.indexOf(".") != -1) 
        return; 
    mathInput += '.'; 
    numInput += '.'; 
    update(false); 
});

connectBtn("AC", () => { 
    mathInput = "0"; 
    update(false); 
});

connectBtn("DEL", () => { 
    let len = mathInput.length; 
    mathInput = mathInput.slice(0, len-1); 
    update(false); 
});

connectBtn("=", () => {
    update(true);
});

console.log("Calculator is ready!");