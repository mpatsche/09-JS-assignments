/**
 * Assignments: Play with event listeners
 * 
 * 1: Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * 
 * 2: Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * 
 * 3: ADVANCED - Add an event listener to each grid cell to change its background color when it is clicked.
 * 
 * 4: ADVANCED - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 * 
 * LINK TO SOLUTIONS: http://malenekjeldsen.dk/2sem/09-JS-assignments/index.html 
 * 
 */

// Assignment 1:

// DOM query the ul with class=grid:

// Add an event listener on the grid - type: mouseenter and mouseleave



// Assignment 2:

// DOM query all list items (cells) with querySelectorAll()

// Use a forEach() to add an event listener to each cell - type: mouseenter and mouseleave 



// Assignment 3 - ADVANCED: You can add another event listener in the forEach() in assignment 2 and listen for a click event. Then if the backgroundColor is set, then remove it, otherwise set a random backgroundColor on the cell.


// a function to generat a random hex color:
const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};


// Assignment 4 - ADVANCED: 

// DOM query on the body element

// Add an event listener to the body and listen for the 'keydown' event

// if the event.code === KeyD - 
// then find out if the body.style.backgroundColor === ""
// if true set: body.style.backgroundColor = "hsl(201, 34%, 13%)"
// else set: body.style.backgroundColor === ""