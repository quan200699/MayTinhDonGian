var number = "";
var operator = "";
var Array = []  ;
function Number(Value) {
    number = document.getElementById("result").value;
    document.getElementById("result").value = number+""+ Value;
    number = Value;
    Array.push(number);
}
function Operator(Value) {
    operator = document.getElementById("result").value;
    document.getElementById("result").value = operator +""+Value;
    operator = Value;
    Array.push(operator);
}
function Result() {
     var result = 0;
    for(var i = 0;i<Array.length;i++)
    {
        result+=Array[i];
    }
    result = eval(result);
    document.getElementById("result").value=result;
}
function Clear() {
    number = "";
    operator = "";
    Array = [];
    document.getElementById("result").value="";
}