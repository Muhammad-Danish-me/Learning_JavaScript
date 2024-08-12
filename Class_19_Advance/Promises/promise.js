const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});
