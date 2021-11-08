function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++){
        let count = 0
        for (let j = 1; j <= numbers[i]; j++){
            if (numbers[i] % j == 0)
            {
            count++
            }
        }
        if (count == 2) 
        {
            console.log(numbers[i] + " is a prime number.")
        } 
        else 
        {
            console.log(numbers[i] + " isn't a prime number.")
        }
    }
}
findPrime(1,2,3,4,5,6,7,8,9,10,13,15,29,30,40,109,331)