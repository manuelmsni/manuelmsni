
/* To add or remove a specific class to the first children by clicking in an onclick handler
onclick="AddOrRemoveClass(this, 'classToGiveOrRemove')"
Change classToGiveOrRemove for your class
*/

function AddOrRemoveClass(el, thisClass){
  cls= thisClass;
  child= el.children[0];
  $(child).toggleClass(cls);
};

/* 
Shows a class and hide anotherone 
onclick="ShowHide('classToShow', 'classToHide')"
Change classToShow and classToHide for your desired classes
*/

function ShowHide(ShowClass, HideClass) {
  $(`.${ShowClass}`).fadeIn('slow');
  $(`.${HideClass}`).hide();
}

/*
Sets the src of an specific image
onclick="SrcSet('ImageId', 'desiredSRC')"
Change ImageId for the Id of the image to be changed and desiredSRC for the desired URL of the image
*/

function SrcSet(ImageId, ThisElementSRC) {
  var element = document.getElementById(ImageId);
  element.src = ThisElementSRC;
}


//Disable cut, copy & paste
function dCCP(){
  $('body').bind('cut copy paste', function (e) {
   e.preventDefault();
  });
};
 
//Disable right click
function dRC(){
  $("body").on("contextmenu",function(e){
   return false;
  });
};
