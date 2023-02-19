function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor( Math.random() * (max - min) + min );
}

function aguarde(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== "string") reject(new TypeError("Não é do tipo string"));
    setTimeout(() => {
      resolve(msg);
    }, tempo)
  })
}



aguarde("Finalizou.", rand(1 ,3))
  .then((response) => {
    console.log(response);
    return aguarde(123565555, rand(1, 3))
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })