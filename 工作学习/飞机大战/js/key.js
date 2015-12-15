function noNumbers(e)
{
var keynum
var keychar
var numcheck

if(window.event) // IE
  {
  keynum = e.keyCode
  }
else if(e.which) // Netscape/Firefox/Opera
  {
  keynum = e.which
  console.log(keynum);
  }

keychar = String.fromCharCode(keynum)
numcheck = /\d/
return !numcheck.test(keychar)
}