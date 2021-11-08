function friendNumbers(number1,number2) {
    let total1 = 0
    let total2 = 0
    
    for (let i = 1; i < number1; i++) {
        if(number1 % i == 0){
            total1 += i
        }
    }
    for (let i = 1; i < number2; i++) {
        if(number2 % i == 0){
            total2 += i
        }
    }

    if(number1 == total2 && number2 == total1){
        console.log(number1 + " and " + number2 + " are friend numbers.")
    }
    else{
        console.log(number1 + " and " + number2 + " aren't friend numbers.")
    }
}
friendNumbers(10,30)
friendNumbers(220,284)