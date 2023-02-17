function returnHour(date) {
    if(date && !(date instanceof Date)) {
        throw new TypeError('O Argumento deve ser do Tipo Date.');
    }

    if(!date) {
        date = new Date;
    }

    return date.toLocaleTimeString("pt-BR");
}

try {
    console.log(returnHour());
} 
catch(err) {
    console.log(err);
}
finally {
    console.log('FINALY: Independente se deu erro, serei executado.');
}