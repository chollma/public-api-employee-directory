// SEARCH -- doesn't interact at all with JSON response

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

// GALLERY -- will need data from JSON + iteration

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

// MODAL

// TODO Modal Container
const modalContainer = document.createElement('div');
modalContainer.setAttribute('class', 'modal-container');
const modalObject = document.createElement('div');
modalObject.setAttribute('class', 'modal');
const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.setAttribute('id', 'modal-close-btn');
closeButton.setAttribute('class', 'modal-close-btn');
closeButton.innerHTML = '<strong>X</strong>';
const modalInfoContainer = document.createElement('div');
modalInfoContainer.setAttribute('class', 'modal-info-container');

// TODO img
const modalImage = document.createElement('img');
modalImage.setAttribute('class', 'modal-img');
modalImage.setAttribute('src', 'https://placehold.it/125x125');
modalImage.setAttribute('alt', 'profile picture');
// TODO h3
const modalH = document.createElement('h3');
modalH.setAttribute('id', 'name');
modalH.setAttribute('class', 'modal-name cap');
modalH.innerHTML = 'name';
// TODO p
const modalPEmail = document.createElement('p');
modalPEmail.setAttribute('class', 'modal-text');
modalPEmail.innerHTML = 'email';
// TODO p
const modalPCity = document.createElement('p');
modalPCity.setAttribute('class', 'modal-text cap');
modalPCity.innerHTML = 'city';
// TODO hr
const modalHR = document.createElement('hr');
// TODO p
const modalPPhone = document.createElement('p');
modalPPhone.setAttribute('class', 'modal-text');
modalPPhone.innerHTML = '(555) 555-5555';
// TODO p
const modalPAddress = document.createElement('p');
modalPAddress.setAttribute('class', 'modal-text');
modalPAddress.innerHTML = '123 Portland Ave., Portland, OR 97204';
// TODO p
const modalPBirthday = document.createElement('p');
modalPBirthday.setAttribute('class', 'modal-text');
modalPBirthday.innerHTML = 'Birthday: 10/21/2015';
// Assembly
modalInfoContainer.appendChild(modalImage);
modalInfoContainer.appendChild(modalH);
modalInfoContainer.appendChild(modalPEmail);
modalInfoContainer.appendChild(modalPCity);
modalInfoContainer.appendChild(modalHR);
modalInfoContainer.appendChild(modalPPhone);
modalInfoContainer.appendChild(modalPAddress);
modalInfoContainer.appendChild(modalPBirthday);

modalObject.appendChild(modalInfoContainer);
modalObject.appendChild(closeButton);

modalContainer.appendChild(modalObject);

// TODO Add it to the page
gallery.after(modalContainer);


// use after()



// EXCEEDS
// TODO Modal Button Container
// TODO Previous Button
// TODO Next Button