const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 Resolved");
});
