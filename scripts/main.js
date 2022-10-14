// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myHTML = document.querySelector('h1');
myHTML.onclick = function() {
    alert('功德 +999999999')
    alert('金钱 +999999999')
    alert('长寿 +999999999')
    alert('快乐 +999999999')
};

let myImage = document.querySelector('img.mainpicture');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_1825.JPG') {
      myImage.setAttribute('src', 'images/IMG_1821.JPG');
    } else {
      myImage.setAttribute('src', 'images/IMG_1825.JPG');
    }
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('type in your nick name.');
//     if (myName !== null) {
//         localStorage.setItem('name', myName);
//     } else {
//         myName = prompt('type in your nick name.');
//         localStorage.setItem('name', myName);
//     }
//     myHeading.textContent = 'Welcome to my boring website!!! ' + myName;
//   }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     // let storedName = localStorage.getItem('name');
//     // myHeading.textContent = 'Welcome to my boring website!!! ' + storedName;
//     setUserName()
// }

// myButton.onclick = function() {
//     setUserName();
// }