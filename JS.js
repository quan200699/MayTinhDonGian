var number = "";
var operator = "";
function Number(Value) {
    number = document.getElementById("result").value;
    document.getElementById("result").value = number+""+ Value;
    number = Value;
}
function Operator(Value) {
    operator = document.getElementById("result").value;
    document.getElementById("result").value = operator +""+Value;
    operator = Value;
}
function Result() {
    var result = 0;
        switch (operator) {
            case "+":
            {
                result = parseInt(document.getElementById("result").value)+parseInt(number);
                break;
            }
            case "-":
            {
                result = parseInt(document.getElementById("result").value)-parseInt(number);
                break;
            }
            case "*":
            {
                result = parseInt(document.getElementById("result").value)*parseInt(number);
                break;
            }
            case "/":
            {
                result =parseInt(document.getElementById("result").value)/ parseInt(number);
                break;
            }
        }
    document.getElementById("result").value=result;
}
function Clear() {
    number = "";
    operator = "";
    document.getElementById("result").value="";
}