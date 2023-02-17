for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}

function fizzBuzz(num) {
    if(isNaN(num)) return num;

    if(!(num % 3) && !(num % 5)) return "FizzBuzz";

    if(!(num % 5)) return "Buzz";

    if(!(num % 3)) return "Fizz";

    return num;
}