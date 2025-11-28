const toggleBtnDisplay = document.getElementById("toggle-btn"); //get display toggle button
const navLinks = document.getElementById("nav-wrapper"); //get navbar links container
const toggleBtnRemove = document.getElementById("toggle-remove"); //get remove display toggle button


// listen to an event on those buttons, then toggle class List
toggleBtnDisplay.addEventListener("click", ()=>{
    navLinks.classList.toggle("move");
});

toggleBtnRemove.addEventListener("click", ()=>{
    navLinks.classList.toggle("move");
})