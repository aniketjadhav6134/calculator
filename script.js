let string = "";
const operator = document.querySelectorAll('.op');
const num = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const calculate=()=>{
    Array.from(num).forEach(element =>{
        element.addEventListener('click',(e)=>{
            console.log(e.target.value);
            string = string + e.target.value;
            display.value = string;
        });
    });
    Array.from(operator).forEach(element =>{
        element.addEventListener('click',(e)=>{
            if(isOperator()){
                string = string.slice(0,-1) + e.target.value;
                display.value = string;
            }
            else{
                console.log(e.target.value);
                string = string + e.target.value;
                display.value = string;
            }
        });
    });
    
}
calculate();

const isOperator=()=>{
    let op = string.toString().charAt(string.length-1);
    if(op == '.'||op == '+'||op == '-'||op == '*'||op == '/'){
        return true;
    }
    else{
        return false;
    }

}

const clearAll=()=>{
    string = "";
    display.value = string;    
}

const Delete=()=>{
    string = string.toString().slice(0,-1);
    display.value = string;
}
const result=()=>{
    string = eval(string);
    display.value = string;
}
