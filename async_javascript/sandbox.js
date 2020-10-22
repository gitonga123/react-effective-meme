console.log(1);
console.log(2);
setTimeout(() => {
    console.log(`Callback function fired.`);
}, 2000);
console.log(3);
console.log(4);
setTimeout(() => {
    console.log(`Callback function fired second.`);
}, 3000);
console.log(5);
console.log(6);
