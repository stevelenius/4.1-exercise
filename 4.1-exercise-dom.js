// 4.1-exercise-dom.js
//
// manipulate DOM with javascript
// 

// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h3 inside of it
// create a new element
const heading = document.createElement('h3');
// add text to innerHTML
heading.innerHTML = 'Llamas are cute and lanolin-free';
// change cursor to show h3 is clickable
heading.style.cursor = 'pointer';
// add event listener for click on h3
heading.addEventListener('click', handleHeadingClick);
// add h3 element to empty div
myEmptyDiv.appendChild(heading);
// change background color when head is clicked
function handleHeadingClick() {
    document.body.style.backgroundColor = '#BADA55';
    }