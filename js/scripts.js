/******************************************
Student: Cooper Hollmaier
Project: Techdegree - Unit 5
Intended Behavior: Public API Requests
Goal: Exceeds Expecatations
******************************************/

/******************************************
SEARCH
******************************************/
const searchContainer = document.querySelector('.search-container');
const form = document.createElement('form');

setAttributes(form, {
    "action": "#",
    "method": "get"
});

const searchBox = document.createElement('input');
setAttributes(searchBox, {
    "type": "search",
    "id": "search-input",
    "class": "search-input",
    "placeholder": "Search..."
});

const submit = document.createElement('input');
setAttributes(submit, {
    "type": "submit",
    "value": "Go",
    "id": "search-submit",
    "class": "search-submit"
});

form.appendChild(searchBox);
form.appendChild(submit);
searchContainer.appendChild(form);

/******************************************
API REQUEST
******************************************/

fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => generateCard(data.results));

/******************************************
EMPLOYEE CARDS
******************************************/

// Create the HTML card for each object returned    
function generateCard(data) {
    // Put cards on the page
    for (i = 0; i < data.length; i++) {

        // Build the card
        const card = document.createElement('div');
        setAttributes(card, {
            "class": "card",
            "id": i
        });


        // Handle the image
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'card-img-container');
        const img = document.createElement('img');

        img.setAttribute('class', 'card-img');
        img.setAttribute('src', data[i].picture.large);
        img.setAttribute('alt', 'profile picture');

        imageContainer.appendChild(img);
        // Handle the user information
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
        // Assemble the information card pieces
        infoContainer.appendChild(h);
        infoContainer.appendChild(cardText);
        infoContainer.appendChild(cardTextCap);
        const gallery = document.getElementById('gallery');
        // Add the card to the page
        gallery.appendChild(card);
        card.appendChild(imageContainer);
        card.appendChild(infoContainer);

        // Add event listener for modal open
        card.addEventListener('click', () => {
            const id = card.getAttribute('id');
            const record = data[id];
            generateModal(record);
        });
    }

}

/******************************************
EMPLOYEE INFORMATION MODAL
******************************************/

// Create the container to hold the modal object
function generateModal(record) {

    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class', 'modal-container');

    // Create the modal object
    const modalObject = document.createElement('div');
    modalObject.setAttribute('class', 'modal');
    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('id', 'modal-close-btn');
    closeButton.setAttribute('class', 'modal-close-btn');
    closeButton.innerHTML = '<strong>X</strong>';

    // Add an event listener for the close modal button
    closeButton.addEventListener('click', () => {
        modalContainer.hidden = true;
    })

    // Create the modal information container
    const modalInfoContainer = document.createElement('div');
    modalInfoContainer.setAttribute('class', 'modal-info-container');

    // Create the modal image container
    const modalImage = document.createElement('img');
    modalImage.setAttribute('class', 'modal-img');
    modalImage.setAttribute('src', record.picture.large);
    modalImage.setAttribute('alt', 'profile picture');

    // Fill the container with data
    const modalH = document.createElement('h3');
    modalH.setAttribute('id', 'name');
    modalH.setAttribute('class', 'modal-name cap');
    modalH.innerHTML = record.name.first + ' ' + record.name.last;
    const modalPEmail = document.createElement('p');
    modalPEmail.setAttribute('class', 'modal-text');
    modalPEmail.innerHTML = record.email;
    const modalPCity = document.createElement('p');
    modalPCity.setAttribute('class', 'modal-text cap');
    modalPCity.innerHTML = record.location.city;
    const modalHR = document.createElement('hr');
    const modalPPhone = document.createElement('p');
    modalPPhone.setAttribute('class', 'modal-text');
    modalPPhone.innerHTML = record.phone;
    const modalPAddress = document.createElement('p');
    modalPAddress.setAttribute('class', 'modal-text');
    modalPAddress.innerHTML = record.location.street.number += ' ' + record.location.street.name + ' ' + record.location.city + ', ' + record.location.state + ' ' + record.location.postcode;
    const modalPBirthday = document.createElement('p');
    modalPBirthday.setAttribute('class', 'modal-text');

    const readable = new Date(record.dob.date)
    modalPBirthday.innerHTML = readable;

    // Create an additional div to hold prev/next buttons
    const prevNextContainer = document.createElement('div');
    prevNextContainer.setAttribute('class', 'modal-btn-container');

    // Create the previous and next buttons
    const modalPrevBtn = document.createElement('button');

    setAttributes(modalPrevBtn, {
        "type": "button",
        "id": "modal-next",
        "class": "modal-next btn",
    });
    modalPrevBtn.innerHTML = 'Prev';

    const modalNextBtn = document.createElement('button');
    setAttributes(modalNextBtn, {
        "type": "button",
        "id": "modal-next",
        "class": "modal-next btn"
    });

    modalNextBtn.innerHTML = 'Next';

    // Assemble the modal elements and add it to the page
    const modalElements = [
        modalImage,
        modalH,
        modalPEmail,
        modalPCity,
        modalHR,
        modalPPhone,
        modalPAddress,
        modalPBirthday
    ];

    for (i = 0; i < modalElements.length; i++) {
        modalInfoContainer.appendChild(modalElements[i]);
    }

    prevNextContainer.appendChild(modalPrevBtn);
    prevNextContainer.appendChild(modalNextBtn);
    modalObject.appendChild(modalInfoContainer);
    modalObject.appendChild(closeButton);
    modalContainer.appendChild(modalObject);
    modalContainer.appendChild(prevNextContainer);
    gallery.after(modalContainer);
}

/******************************************
HELPER FUNCTIONS
******************************************/
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}