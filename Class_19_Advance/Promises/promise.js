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

// 

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Danish", email: "muhammad.danish1015@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Muhammad Danish", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });
