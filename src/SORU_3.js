function perfectNumbers() {
    let perfectNumbers = []
    for (let num = 1; num <= 1000; num++) {
        let total = 0
        for (let j = 0; j < num; j++) {
            if(num % j == 0){
                total += j
            }
        }
       if (total == num) {
            perfectNumbers.push(num)
       }
    }
    console.log("List of perfect numbers from 1 to 1000 = " , perfectNumbers)
}
perfectNumbers()