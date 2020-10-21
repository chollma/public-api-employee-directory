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

fetch('https://randomuser.me/api/?results=12&nat=us&noinfo')
    .then(response => response.json())
    .then(data => generateCard(data.results))
    .catch(error => {
        const header = document.querySelector('header');
        header.insertAdjacentHTML('afterend', '<p>An error has occurred</p>');
    });

/******************************************
EMPLOYEE CARDS
******************************************/

function generateCard(data) {
    for (i = 0; i < data.length; i++) {

        const card = document.createElement('div');
        setAttributes(card, {
            "class": "card",
            "id": i
        });

        const imageContainer = document.createElement('div');
        setAttributes(imageContainer, {
            "class": "card-img-container"
        });

        const img = document.createElement('img');
        setAttributes(img, {
            "class": "card-img",
            "src": data[i].picture.large,
            "alt": "profile picture"
        });

        imageContainer.appendChild(img);

        const infoContainer = document.createElement('div');
        setAttributes(infoContainer, {
            "class": "card-info-container"
        });

        const h = document.createElement('h3');
        setAttributes(h, {
            "id": "name",
            "class": "card-name cap"
        });

        h.innerHTML = data[i].name.first + ' ' + data[i].name.last;
        const cardText = document.createElement('p');

        setAttributes(cardText, {
            "class": "card-text"
        });

        cardText.innerHTML = data[i].email;
        const cardTextCap = document.createElement('p');
        setAttributes(cardTextCap, {
            "class": "card-text cap"
        });

        cardTextCap.innerHTML = data[i].location.city + ', ' + data[i].location.state;

        infoContainer.appendChild(h);
        infoContainer.appendChild(cardText);
        infoContainer.appendChild(cardTextCap);

        const gallery = document.getElementById('gallery');
        gallery.appendChild(card);
        card.appendChild(imageContainer);
        card.appendChild(infoContainer);

        card.addEventListener('click', () => {
            const id = card.getAttribute('id');
            pushData(data, id);
            modalContainer.hidden = false;

            // TODO overwrite the HTML with the clicked record's data (need to pass in the data and the current id)
            // TODO make modal hidden = false
          
        });
    }
}

function pushData (data, id) {
    modalImage.setAttribute('src',data[id].picture.large);
    modalH.innerHTML = data[id].name.first + ' ' + data[id].name.last;
    modalPEmail.innerHTML = data[id].email;
    modalPCity.innerHTML = data[id].location.city;
    const dirty = data[id].phone;
    const clean = dirty.replace(/-/, ' ');
    modalPPhone.innerHTML = clean;
    modalPAddress.innerHTML = data[id].location.street.number + ' ' + data[id].location.street.name + '<br>' + data[id].location.city + ', ' + data[id].location.state;
    const birthday = new Date(data[id].dob.date);
    const cleanBirthday = birthday.toLocaleDateString('en-us', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    modalPBirthday.innerHTML = 'Birthday: ' + cleanBirthday;

    modalPrevBtn.addEventListener('click', () => {
     id--;
        pushData(data,id);
    });

    modalNextBtn.addEventListener('click', () => {
            
            id++;
            pushData(data,id);
            
    
    });

}

// bug - every time I click I add a new modal to the HTML. Need to only add one modal and swap out the data. This will enable the prev/next to work.

/******************************************
EMPLOYEE INFORMATION MODAL
******************************************/



    const modalContainer = document.createElement('div');
    setAttributes(modalContainer, {
        "class": "modal-container"
    });

    const modalObject = document.createElement('div');
    setAttributes(modalObject, {
        "class": "modal"
    });

    const closeButton = document.createElement('button');
    setAttributes(closeButton, {
        "type": "button",
        "id": "modal-close-btn",
        "class": "modal-close-btn"
    });

    closeButton.innerHTML = '<strong>X</strong>';

    closeButton.addEventListener('click', () => {
        modalContainer.hidden = true;
    })

    const modalInfoContainer = document.createElement('div');
    setAttributes(modalInfoContainer, {
        "class": "modal-info-container"
    });

    const modalImage = document.createElement('img');
    setAttributes(modalImage, {
        "class": "modal-img",
        "src": "",
        "alt": "profile picture"
    });

    const modalH = document.createElement('h3');
    setAttributes(modalH, {
        "id": "name",
        "class": "modal-name cap"
    });

    modalH.innerHTML = "";
    const modalPEmail = document.createElement('p');
    setAttributes(modalPEmail, {
        "class": "modal-text"
    });

    modalPEmail.innerHTML = "";
    const modalPCity = document.createElement('p');
    setAttributes(modalPCity, {
        "class": "modal-text cap"
    });

    modalPCity.innerHTML = "";
    const modalHR = document.createElement('hr');
    const modalPPhone = document.createElement('p');
    setAttributes(modalPPhone, {
        "class": "modal-text"
    });

   
    const modalPAddress = document.createElement('p');
    setAttributes(modalPAddress, {
        "class": "modal-text"
    });

    modalPAddress.innerHTML = "";
    const modalPBirthday = document.createElement('p');
    setAttributes(modalPBirthday, {
        "class": "modal-text"
    });
    
    const prevNextContainer = document.createElement('div');
    setAttributes(prevNextContainer, {
        "class": "modal-btn-container"
    });

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

    modalContainer.hidden = true;


/******************************************
HELPER FUNCTIONS
******************************************/
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}