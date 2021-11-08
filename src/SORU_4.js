function primesOf1000(){
    let primesOf1000 = []
    for (let num = 1; num <= 1000; num++){
        let count = 0
        for (let j = 1; j <= num; j++){
            if (num % j == 0)
            {
            count++
            }
        }
        if (count == 2) 
        {
            primesOf1000.push(num)
        } 
    }
    console.log("List of prime numbers from 1 to 1000 = " , primesOf1000)
}
primesOf1000()