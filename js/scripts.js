// SEARCH 

// Create form
const searchContainer = document.querySelector('.search-container');
const form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'get');

// Add inputs
const searchBox = document.createElement('input');
searchBox.setAttribute('type', 'search');
searchBox.setAttribute('id', 'search-input');
searchBox.setAttribute('class', 'search-input');
searchBox.setAttribute('placeholder', 'Search...');
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Go');
submit.setAttribute('id', 'search-submit');
submit.setAttribute('class', 'search-submit');
form.appendChild(searchBox);
form.appendChild(submit);

// Add it to the page
searchContainer.appendChild(form);

// GALLERY

// Create holding container
const card = document.createElement('div');
card.setAttribute('class', 'card');

// Create child image container
const imageContainer = document.createElement('div');
imageContainer.setAttribute('class', 'card-img-container');
const img = document.createElement('img');
img.setAttribute('src', 'https://placehold.it/90x90');
img.setAttribute('alt', 'profile picture');
imageContainer.appendChild(img);

// Create an information container
const infoContainer = document.createElement('div');
infoContainer.setAttribute('class', 'card-info-container');
const h = document.createElement('h3');
h.setAttribute('id', 'name');
h.setAttribute('class', 'card-name cap');
h.innerHTML = 'first last';
const cardText = document.createElement('p');
cardText.setAttribute('class', 'card-text');
cardText.innerHTML = 'email';
const cardTextCap = document.createElement('p');
cardTextCap.setAttribute('class', 'card-text cap');
cardTextCap.innerHTML = 'city, state';
infoContainer.appendChild(h);
infoContainer.appendChild(cardText);
infoContainer.appendChild(cardTextCap);
const gallery = document.getElementById('gallery');

// Add it to the page
gallery.appendChild(card);
card.appendChild(imageContainer);
card.appendChild(infoContainer);