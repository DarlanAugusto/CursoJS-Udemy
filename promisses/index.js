function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;

  return Math.floor( Math.random() * (max - min) + min );
}

function aguarde(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== "string") {
        reject(new TypeError("Não é do tipo string"));
        return;
      } 
      
      resolve(msg);
      return;
    }, tempo)
  })
}



// aguarde("Finalizou.", rand(1 ,3))
//   .then((response) => {
//     console.log(response);
//     return aguarde(123565555, rand(1, 3))
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })


async function executaPromises() {
  try {
    for(let i = 0; i <= 100; i++) {
      if(i < 10) i = `0${i}`;
      
      const fase = await aguarde(`${i}%`, rand(0, .050));
      console.log(fase);
    }
    console.log("Concluido!");
  } 
  catch(error) {
    console.log(error);
    return;
    
  }

}

executaPromises();
