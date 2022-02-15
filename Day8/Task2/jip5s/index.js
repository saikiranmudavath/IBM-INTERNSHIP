let newPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject("The promise is not resolved");
  }, 4000);
});

async function asynFunc() {
  let result = await newPromise
    .then((result) => {
      return result;
    })
    .catch((result) => {
      return result;
    });

  console.log(result);
}
asynFunc();
