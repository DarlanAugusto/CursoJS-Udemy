function soma(x, y) {
    if(isNaN(x) || isNaN(y)) {
        throw new Error('x e y devem ser números');
    }

    return x + y;
}


try {
    console.log(soma('a', 9));
} catch(err) {
    console.log('Um erro inesperado Ocorreu!');
}