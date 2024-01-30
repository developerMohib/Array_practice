/*
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output

*/

let picnicSpot = [ ' CoxsBazar', ' Bandarban', ' Rangamati' ];
document.write( '<br> All picnic Spot = ' + picnicSpot);
let add_spot = picnicSpot.push(' Sylhet');
document.write( '<br> add spot and new array = ' + picnicSpot);

// add two in middle 
add_spot = picnicSpot.unshift(' Khulna');
document.write( '<br> add spot and new array = ' + picnicSpot);

add_spot = picnicSpot.push( `Rajshahi `, `Rangpur` );
document.write( '<br> add spot and new array = ' + picnicSpot);

picnicSpot[2] = ` Maymensingh`
document.write( '<br> add spot and new array = ' + picnicSpot);

// remove last one

picnicSpot.pop();
document.write( '<br> add spot and new array = ' + picnicSpot);