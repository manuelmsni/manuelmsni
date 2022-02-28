
/*
To add or remove a specific class to the first children by clicking in an onclick handler

onclick="AddOrRemoveClass(this, 'desiredClass')"

Change desiredclass for your class
*/

function AddOrRemoveClass(el, thisClass){
  cls= thisClass;
  child= el.children[0];
  $(child).toggleClass(cls);
};

//Disable cut, copy & paste
function dCCP(){
  $('body').bind('cut copy paste', function (e) {
   e.preventDefault();
  });
};
 
//Disable click derecho
function dRC(){
  $("body").on("contextmenu",function(e){
   return false;
  });
};
