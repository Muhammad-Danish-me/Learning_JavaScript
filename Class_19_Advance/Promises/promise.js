const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task completed");
  }, 1000);
  return resolve();
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});
