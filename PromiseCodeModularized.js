// // Initial implementation of the promise
// let promise = new Promise((resolve, reject) => {
//   // Some asynchronous operation, 
//   //for now we simply resolve with 
//   //a string value as the answer
//   resolve('First');
// }).then(result => {
//   // Handle the result and chain another promise
//   return result + ' Second';
// }).then(result => {
//   // Handle the result and chain another promise
//   return result + ' Third';
// });

// // Example of how you might use 
// //the promise in your application
// promise.then(result => {
// // Expected output: 'First Second Third'
//   console.log(result); 
// }).catch(error => {
//   console.error('Error:', error);
// });

//no need to export for the tests
// module.exports = { createChainedPromise };