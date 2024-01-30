/*
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array

*/

let fruits = [ ' jam', ' amm', ' peara', ' komola', ' licu' ];

document.write(fruits);


document.write('<br> the lenth of array .' + fruits.length );

let theThirdNum = fruits[3];
document.write( '<br> the third num of array .' + theThirdNum);

let lastOneOut = fruits.pop();
document.write( '<br> remove last one from array .' + lastOneOut);

document.write('<br> ' +fruits);

// add two element

let add_last_one = fruits.push(' jamboora' , ' koola');

document.write('<br> ' + fruits);

// Change the 3rd Number Value

let serial = fruits.indexOf(' koola');
document.write('<br> koolar serial number = ' + serial);

fruits[2] = ' Pepe';

let add_pepe = fruits;

document.write('<br> pepe added = ' + add_pepe);

