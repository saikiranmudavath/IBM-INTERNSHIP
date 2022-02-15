let num = true;
let count = new Promise((resolve, reject) => {
  if (num) {
    resolve("fulfilled");
  } else {
    reject("Rejected");
  }
});

count
  .then((result) => {
    console.log(result);
  })
  .catch((errMsg) => {
    console.error(errMsg);
  })
  .finally(() => {
    console.log("final msg");
  });
