const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(number of numbers) {

    if(number === 5) {
        console.log('Pulei o 5...');
        continue;
    }

    if(number === 6) {
        console.log('Parei no 6!');
        break;
    }

    console.log(number);
}