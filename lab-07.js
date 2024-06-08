// Define a custom error class
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  // Function to force a generic error
  function forceGenericError() {
    console.log("Force generic error");
    try {
      console.log("Generic error try block");
      throw new Error("Generic error");
    } catch (error) {
      console.log("Generic error catch block");
      console.log(`Error: ${error.message}`);
    } finally {
      console.log("Generic error finally block");
    }
  }
  
  // Function to force a custom error
  function forceCustomError() {
    console.log("Force custom error");
    try {
      console.log("Custom error try block");
      throw new CustomError("Custom error");
    } catch (error) {
      console.log("Custom error catch block");
      console.log(`${error.name}: ${error.message}`);
    } finally {
      console.log("Custom error finally block");
    }
  }
  
  // Run the functions
  forceGenericError();
  forceCustomError();
