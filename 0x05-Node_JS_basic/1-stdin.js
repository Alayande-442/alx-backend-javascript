// 1-stdin.js

// Display the welcome message
console.log('Welcome to ALX, what is your name?');

// Set up stdin to accept user input
process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Get the input and remove extra whitespace

  // Display the entered name
  console.log(`Your name is: ${name}`);

  // Display the closing message when user input is received
  console.log('This important software is now closing');

  // Exit the program
  process.exit();
});
