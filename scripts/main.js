var myHeading = document.querySelector('h1');
var myImage = document.querySelector('#myimage');
var image1 = "images/mest.jpeg";
var image2 = "images/firefox2.jpg";

myImage.onclick = function() {
    var mySrc = myimage.getAttribute('src');
    if(mySrc === 'image1') {
      myImage.setAttribute ('src','image2');
    } else {
      myImage.setAttribute ('src','image1');
    }
}
var myButton = document.querySelector('#lulu');
var myHeading = document.querySelector('#header1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
