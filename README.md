# Learning JavaScript Promises: A Structured Process

To learn JavaScript promises from the beginning, we'll go through a structured process. Here are the steps:

## Understanding the Basics of Promises:

1. Learn what a promise is.
2. Understand the states of a promise.
3. Learn how to create a basic promise.

## Using `then()`, `catch()`, and `finally()`:

1. Understand how to handle fulfilled promises using `then()`.
2. Learn how to handle rejected promises using `catch()`.
3. Learn how to execute code regardless of promise outcome using `finally()`.

## Chaining Promises:

1. Learn how to chain multiple promises together.

## Using `Promise.all()` and `Promise.race()`:

1. Learn how to handle multiple promises concurrently with `Promise.all()`.
2. Learn how to handle the first settled promise with `Promise.race()`.

## Error Handling in Promises:

1. Understand best practices for error handling.

## Practical Examples and Exercises:

1. Work through practical examples to solidify understanding.
2. Complete exercises to practice what you've learned.

---

## Step 1: Understanding the Basics of Promises

### What is a Promise?

- A promise is an object representing the eventual completion or failure of an asynchronous operation.
- It provides a way to handle asynchronous operations more gracefully compared to traditional callback functions.

### States of a Promise:

- **Pending:** The initial state, neither fulfilled nor rejected.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

### Creating a Basic Promise:

```javascript
let promise = new Promise(function(resolve, reject) {
  // asynchronous operation goes here
  if (/* operation successful check goes here */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});
```
--  or just use async await.. Wait!!

## Real-World Applications Using Promises

### Airbnb

- Fetching Listings

### Netflix

- Video Streaming

### Spotify

- Fetching Music Tracks

### Slack

- Real-Time Messaging

### Instagram

- Fetching User Posts

### I guess rideshare is no longer a thing -robot talking..

