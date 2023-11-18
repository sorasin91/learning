
// Function to reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
}
//using split() to return a new array, using reverse() to reverse the new created array, using join() to join all elements of the array.

// Test the function
console.log(reverseString('Hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greeting from Anudiip & Sora'))