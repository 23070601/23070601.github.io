function calculate () {
    var a = parseFloat(document.frmCal.txta.value);
    var b = parseFloat(document.frmCal.txtb.value);
    var operator = document.frmCal.slto.value;
    var result;

    if (operator === "+") {
    result = a + b;
    } else if (operator === "-"){
        result = a - b;
    } else if (operator === "*"){
        result = a * b;
    } else if (operator === "/"){
        result = a / b;
    } else if (operator === "%"){
        result = a % b;
    } else {
        result = "Invalid operator";
    }
    // getElementById to set the result
    document.getElementById ("lblResult").innerText = result;
}