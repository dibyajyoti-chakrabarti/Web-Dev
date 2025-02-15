let a,b,c
let operators=["+","-","*","/"]


function generateNumber(){
    return parseInt(Math.random()*100)
}

while(true){
    while (true){
        a=prompt("Enter 1st Number")
        b=prompt("Enter 2nd Number")
        if (Number.isInteger(parseInt(a)) && Number.isInteger(parseInt(b))){
            while (true){
                c=prompt("Enter Operator")
                if (operators.includes(c)){
                    break
                }
                else{
                    alert("That's not an operator")
                }
            }
            break;
        }
        else{
            alert("Either or Both of Inputs violate Input Format")
        }
    }
    let decider=generateNumber();
    a=parseInt(a)
    b=parseInt(b)
    if (decider>=50 && decider<=60){
        switch (c){
            case "+":
                c="-"
                break
            case "-":
                c="/"
                break
            case "*":
                c="+"
                break
            case "/":
                c="**"
                break
        }
    }
    switch(c){
        case "+":
            alert(a+b);
            break;
        case "-":
            alert(a-b);
            break;
        case "*":
            alert(a*b);
            break;
        case "/":
            alert(a/b);
            break;
        case "**":
            alert(a**b);
            break;
    }
}