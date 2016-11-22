// globals
var inventory = [];
var verbose = true;

var addItem = function( color, name, size ){
  if( verbose ) console.log( 'in addItem:', color, name, size );
  // create new item object
  var newItem = {
    color: color,
    name: name,
    size: size
  }; // end newItem
  // push newItem into the inventory array
  inventory.push( newItem );
}; // end addItem

var getUserInput = function(){
  // get user input
  var newName = document.getElementById( 'nameIn' ).value;
  if( verbose ) console.log( 'newName:', newName );
  var newColor = document.getElementById( 'colorIn' ).value;
  if( verbose ) console.log( 'newColor:', newColor );
  var newSize = document.getElementById( 'sizeIn' ).value;
  if( verbose ) console.log( 'newSize:', newSize );
  // send user input to addItem
  addItem( newColor, newName, newSize );
}; // end getUserInput

var searchForItem = function( searchColor, searchSize ){
  if( verbose ) console.log( 'in searchForItem' );
  // loop through inventory and see if we have a match for this color & size combo
  for (var i = 0; i < inventory.length; i++) {
    if( inventory[ i ].color == searchColor && inventory[ i ].size == searchSize ){
      return inventory[ i ];
    } // end if
  } // end for
  return false;
}; // searchForItem

var userSearch = function(){
  if( verbose ) console.log( 'in userSearch' );
  var searchColor = document.getElementById( 'searchColorIn' ).value;
  if( verbose ) console.log( 'searchColor:', searchColor );
  var searchSize = document.getElementById( 'searchSizeIn' ).value;
  if( verbose ) console.log( 'searchSize:', searchSize );
  var match = searchForItem( searchColor, searchSize );
  if( !match ){
    document.getElementById( 'outputP' ).innerHTML = 'Nothing of that size/color found';
  }
  else{
    document.getElementById( 'outputP' ).innerHTML = 'How about: ' + match.name;
  }
}; // end userSearch
