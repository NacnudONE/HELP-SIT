const links = document.querySelectorAll('.nav__link'); // Select all elements with the class 'nav__link'
const light = document.querySelector('.nav__light'); // Select the first element with the class 'nav__light'
// Function to move the link
function moveLight({offsetLeft, offsetWidth}) {
    light.style.left = `${offsetLeft - offsetWidth/4}px`; // Set the left position of the light element
}

function activeLink(linkActive) {
    links.forEach(link => { 
        link.classList.remove('active'); // Remove the 'active' class from all links
        // Check if the link is the one that was clicked
        linkActive.classList.add('active'); // Add the 'active' class to the clicked link
        // Check if the link is the one that was clicked
 })
}
// Function to handle the click event
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        moveLight(event.target); // Call the moveLight function with the event and target
        activeLink(link); // Call the activeLink function with the link
    });
})