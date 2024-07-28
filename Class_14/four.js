const array1 = [1, 2, 3];
const total = array1.reduce(function (acc, currval) {
  console.log(`Acc: ${acc} and Currval: ${currval}`);
  return acc + currval;
}, 0);
console.log(total);

const array2 = [1, 2, 3, 5, 6];

const myTotal = array2.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 1299,
  },
  {
    itemName: "web dev course",
    price: 5999,
  },
  {
    itemName: "mobile dev course",
    price: 7999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
