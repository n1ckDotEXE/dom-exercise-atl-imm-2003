const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

const navLinks = document.createElement('ul');
const navContainer = document.querySelector('nav.js-link-container');

navContainer.appendChild(navLinks);

// Alternate loop method: //
// for (let index = 0; index < addresses.length; index++) {
//    const address = addresses[index];
//    createLink(address);
// }

// Alternate loop method: //
// addresses.forEach(function(VALUE, INDEX, ORIGINAL ARRAY) { //
// addresses.forEach(function(address) {
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.setAttribute('href', address);
//     link.textContent = address;
//     listItem.appendChild(link); //added link to to list item
//     navLinks.appendChild(listItem);// add list item to navLinks element

// })

function createLink (address) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.textContent = address;
    listItem.appendChild(link); //added link to to list item
    navLinks.appendChild(listItem);// add list item to navLinks element
}

addresses.forEach(createLink);