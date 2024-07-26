class MyPromise {
  // Constructor to initialize the promise
  constructor(executor) {
    // Initial state of the promise
    this.state = 'pending';
    // Value to be resolved or rejected with
    this.value = undefined;
    this.reason = undefined;
    // Arrays to hold success and failure callbacks
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // Function to handle promise resolution
    const resolve = (value) => {
      if (this.state === 'pending') {  // Only resolve if the state is pending
        this.state = 'fulfilled';  // Update state to fulfilled
        this.value = value;  // Store the resolved value
        // Execute all stored success callbacks with the resolved value
        this.onFulfilledCallbacks.forEach(callback => callback(this.value));
      }
    };

    // Function to handle promise rejection
    const reject = (reason) => {
      if (this.state === 'pending') {  // Only reject if the state is pending
        this.state = 'rejected';  // Update state to rejected
        this.reason = reason;  // Store the rejection reason
        // Execute all stored failure callbacks with the rejection reason
        this.onRejectedCallbacks.forEach(callback => callback(this.reason));
      }
    };

    // Execute the executor function with resolve and reject functions
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);  // If an error occurs, reject the promise
    }
  }

  // Method to handle 'then' chaining
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {  // If the promise is already fulfilled
      onFulfilled(this.value);  // Execute the success callback with the resolved value
    } else if (this.state === 'rejected') {  // If the promise is already rejected
      onRejected(this.reason);  // Execute the failure callback with the rejection reason
    } else {  // If the promise is still pending
      // Store the callbacks to be executed later
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }

  // Method to handle 'catch' chaining
  catch(onRejected) {
    return this.then(null, onRejected);  // Use 'then' with a null success handler
  }

  // Method to handle 'finally' chaining
  finally(callback) {
    return this.then(
      value => {
        callback();  // Execute the callback regardless of the promise state
        return value;  // Return the resolved value
      },
      reason => {
        callback();  // Execute the callback regardless of the promise state
        throw reason;  // Re-throw the rejection reason
      }
    );
  }
}

// Example Usage:

// Create a new MyPromise instance
const myPromise = new MyPromise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve('Promise resolved!');  // Resolve the promise after 1 second
    // reject('Promise rejected!');  // Uncomment to test rejection
  }, 1000);
});

// Chain methods to handle the promise resolution or rejection
myPromise
  .then(result => {
    console.log(result);  // Log the resolved value
  })
  .catch(error => {
    console.log(error);  // Log the rejection reason
  })
  .finally(() => {
    console.log('Promise is settled.');  // Log when the promise is settled
  });
