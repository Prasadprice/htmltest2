var display = document.querySelector("#display")
var button = document.querySelectorAll(".button")
var operand1 = 0;
var operand2 = null;
var operator = null;
for(var i = 0; i<button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value')
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == "="){
            if(operator == "%"){
                operand2 = parseFloat(display.textContent)
                let newOutput = (Number(operand1)/100)*Number(operand2);
                display.innerHTML = newOutput
            }else{
                operand2 = parseFloat(display.textContent)
                let text = operand1+" "+operator+" "+operand2
                let output = eval(text)
                display.innerHTML = output
            }
            
        }else if(value == "AC"){
            display.innerHTML = ""
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else{
            display.innerHTML +=value;
        }
    })
}
