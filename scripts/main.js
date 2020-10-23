let myImage = document.querySelector('img');

myImage.onclick = function() { //code Starts
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
      myImage.setAttribute('src','images/cat1.jpg');
    } else {
      myImage.setAttribute('src','images/cat.jpg');
    }
} //till now the code is about changing images
let myButton = document.querySelector('button');//code starts
let myHeading = document.querySelector('h1');
function setUserName()
{
  let myName = prompt('Enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Cats Are Cool ' + myName;
}
if(!localStorage.getItem('name'))
{
  setUserName();
}
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cats Are Cool '+ storedName;
}
myButton.onclick = function()
{
  setUserName();
}//at end the code selects button created in html and assign the change of
//detail to heading called h1
