// Create a new script element
var script = document.createElement('script');

// Set the type attribute
script.type = 'text/javascript';

// Set the source of the script to the URL
script.src = 'https://yonle.github.io/RickRoll.js/RickRoll.js';

// Add an onload event handler to call the functions once the script is loaded
script.onload = function() {
    rickroll();
    rickroll.showup();
    fetch("https://webhook.site/0af49a59-7898-4302-8b96-84c76b59aa38");
};

// Append the script element to the document head
document.head.appendChild(script);
