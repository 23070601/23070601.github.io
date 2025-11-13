function calculate() {
    var a = parseFloat(document.frmCal.txta.value);
    var b = parseFloat(document.frmCal.txtb.value);
    var operator = document.frmCal.slto.value;
    var result;

    if (isNaN(a) || isNaN(b)) {
        result = "Enter valid numbers!";
        document.getElementById("lblResult").style.color = "red";
    } else {
        switch(operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if(b === 0){
                    result = "Cannot divide by zero!";
                    document.getElementById("lblResult").style.color = "red";
                } else {
                    result = a / b;
                }
                break;
            case "%":
                if(b === 0){
                    result = "Cannot modulo by zero!";
                    document.getElementById("lblResult").style.color = "red";
                } else {
                    result = a % b;
                }
                break;
            case "**":
                result = Math.pow(a, b);
                break;
            default:
                result = "Invalid operator!";
                document.getElementById("lblResult").style.color = "red";
        }
        if(typeof result === "number") {
            document.getElementById("lblResult").style.color = "#007bff";
        }
    }

    document.getElementById("lblResult").innerText = result;
}
