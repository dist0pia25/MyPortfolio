const menuBtn= document.getElementById('menuBtn'); // Get the menu button element
menuBtn.addEventListener('click', toggleMenu); // Add click event listener to the button

// Function to toggle the menu visibility


function toggleMenu() 
{
    const menu = document.getElementById('sideMenu'); // Get the menu element
    menu.classList.toggle('active'); // Toggle the 'active' class on the menu
}


