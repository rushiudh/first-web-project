let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpg') {
      myImage.setAttribute('src','images/cat1.jpg');
    } else {
      myImage.setAttribute('src','images/cat.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName()
{
  let myName = prompt('Enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Cats Are Cool' + myName;
}
