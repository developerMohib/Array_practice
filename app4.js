/**
 * Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

// Let Check The Array 

let books = [ 'Bangla ', ' English ', 'Farsi ', 'Urdu ', 'Math '];
let mans = `[ ' bookacda', 'calakcda', 'mathamootha', ' faulsala']`;

document.write( '<br> is books array? == '+  Array.isArray(books));
document.write('<br> is mans array? == ' + Array.isArray(mans));

// concate two array

let writer = ['me', 'metoo'];
let add_data = books.concat(writer);
document.write('<br> concate two data == '+ add_data);