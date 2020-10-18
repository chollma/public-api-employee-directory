// SEARCH -- doesn't interact at all with JSON response

// Create form
const searchContainer = document.querySelector('.search-container');
const form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'get');

// Add search box
const searchBox = document.createElement('input');
searchBox.setAttribute('type', 'search');
searchBox.setAttribute('id', 'search-input');
searchBox.setAttribute('class', 'search-input');
searchBox.setAttribute('placeholder', 'Search...');
// Add go button
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Go');
submit.setAttribute('id', 'search-submit');
submit.setAttribute('class', 'search-submit');
// Add button and search box to DOM
form.appendChild(searchBox);
form.appendChild(submit);

// Add it to the page
searchContainer.appendChild(form);

// --------------------------------------------------------

// Fetch Request

fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => generateCard(data.results)); // push data into a helper function that will create the card


function generateCard(data) {
    for (i = 0; i < data.length; i++) {
        // Create the card to hold the info
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        // Get thumbnail image
        console.log();
        // Create the image container
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'card-img-container');
        const img = document.createElement('img');
        img.setAttribute('class', 'card-img');
        img.setAttribute('src', data[i].picture.large);
        img.setAttribute('alt', 'profile picture');
        imageContainer.appendChild(img);

        const infoContainer = document.createElement('div');
        infoContainer.setAttribute('class', 'card-info-container');
        const h = document.createElement('h3');
        h.setAttribute('id', 'name');
        h.setAttribute('class', 'card-name cap');
        h.innerHTML = data[i].name.first + ' ' + data[i].name.last;
        const cardText = document.createElement('p');
        cardText.setAttribute('class', 'card-text');
        cardText.innerHTML = data[i].email;
        const cardTextCap = document.createElement('p');
        cardTextCap.setAttribute('class', 'card-text cap');
        cardTextCap.innerHTML = data[i].location.city + ', ' + data[i].location.state;
        infoContainer.appendChild(h);
        infoContainer.appendChild(cardText);
        infoContainer.appendChild(cardTextCap);
        const gallery = document.getElementById('gallery');




        gallery.appendChild(card);
        card.appendChild(imageContainer);
        card.appendChild(infoContainer);




    }

}


// MODAL

const modalContainer = document.createElement('div');
modalContainer.setAttribute('class', 'modal-container');
modalContainer.hidden = true;
const modalObject = document.createElement('div');
modalObject.setAttribute('class', 'modal');
const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.setAttribute('id', 'modal-close-btn');
closeButton.setAttribute('class', 'modal-close-btn');
closeButton.innerHTML = '<strong>X</strong>';
closeButton.addEventListener('click', () => {
    modalContainer.hidden = true;
})
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

// EXCEEDS
// TODO Modal Button Container
const prevNextContainer = document.createElement('div');
prevNextContainer.setAttribute('class', 'modal-btn-container');
const modalPrevBtn = document.createElement('button');
modalPrevBtn.setAttribute('type', 'button');
modalPrevBtn.setAttribute('id', 'modal-prev');
modalPrevBtn.setAttribute('class', 'modal-prev btn');
modalPrevBtn.innerHTML = 'Prev';
const modalNextBtn = document.createElement('button');
modalNextBtn.setAttribute('type', 'button');
modalNextBtn.setAttribute('id', 'modal-next');
modalNextBtn.setAttribute('class', 'modal-next btn');
modalNextBtn.innerHTML = 'Next';



// Assembly
const modalElements = [modalImage, modalH, modalPEmail, modalPCity, modalHR, modalPPhone, modalPAddress, modalPBirthday];
for (i = 0; i < modalElements.length; i++) {
    modalInfoContainer.appendChild(modalElements[i]);
}

prevNextContainer.appendChild(modalPrevBtn);
prevNextContainer.appendChild(modalNextBtn);

modalObject.appendChild(modalInfoContainer);
modalObject.appendChild(closeButton);

modalContainer.appendChild(modalObject);
modalContainer.appendChild(prevNextContainer);



// TODO Add it to the page
gallery.after(modalContainer);