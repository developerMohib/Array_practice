/*
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.
*/

let book_list = [' Bangla ', ' English ', ' Farsi ', ' Urdu '];
document.write(`<br> The Book list of Array = ` + book_list);

let farsi_ace = book_list.includes(' Farsi ');
document.write(' <br> Farsi ace kina. takle true = ' + farsi_ace);
let javascript_ace = book_list.includes(' Javascript ');
document.write(' <br> javascript ace kina. takle true. na takle add koro = ' + javascript_ace);

let add_js = book_list.push( ' Javascript ')
document.write(`<br> The Book list of Array = ` + book_list);
