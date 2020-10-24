/******************************************
Student: Cooper Hollmaier
Project: Techdegree - Unit 5
Intended Behavior: Public API Requests
Goal: Exceeds Expecatations
******************************************/

/******************************************
CREATE SEARCH BOX - Build form for search functionality
******************************************/
const searchDiv = document.querySelector(".search-container");
const form = document.createElement("form");

setAttributes(form, {
  action: "#",
  method: "get",
  onsubmit: "search(searchBox.value)",
});

const searchBox = document.createElement("input");
setAttributes(searchBox, {
  type: "search",
  id: "search-input",
  class: "search-input",
  placeholder: "Search...",
});

const searchSubmit = document.createElement("input");
setAttributes(searchSubmit, {
  type: "submit",
  value: "Go",
  id: "search-submit",
  class: "search-submit",
});

searchBox.addEventListener('keyup', (event)=> {
  if (event.keyCode === 13){
    event.preventDefault();
    searchSubmit.click();
  } 
  });

form.appendChild(searchBox);
form.appendChild(searchSubmit);
searchDiv.appendChild(form);

/******************************************
MAKE API REQUEST - Request 12 records from the US
******************************************/

fetch("https://randomuser.me/api/?results=12&nat=us&noinfo")
  .then((response) => response.json())
  .then((data) => generateCard(data.results))
  .catch((error) => {
    const header = document.querySelector("header");
    header.insertAdjacentHTML("afterend", "<p>An error has occurred</p>");
  });

/******************************************
CREATE EMPLOYEE CARDS - Iterate through fetch response object and build HTML
******************************************/

function generateCard(data) {
  for (i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    setAttributes(card, {
      class: "card",
      id: i,
    });

    const cardImgDiv = document.createElement("div");
    setAttributes(cardImgDiv, {
      class: "card-img-container",
    });

    const cardImg = document.createElement("img");
    setAttributes(cardImg, {
      class: "card-img",
      src: data[i].picture.large,
      alt: "profile picture",
    });
    cardImgDiv.appendChild(cardImg);

    const cardInfoContainer = document.createElement("div");
    setAttributes(cardInfoContainer, {
      class: "card-info-container",
    });

    const cardHeader = document.createElement("h3");
    setAttributes(cardHeader, {
      id: "name",
      class: "card-name cap",
    });
    cardHeader.insertAdjacentHTML(
      "beforeend",
      data[i].name.first + " " + data[i].name.last
    );

    const cardFirst = document.createElement("p");
    setAttributes(cardFirst, {
      class: "card-text",
    });
    cardFirst.insertAdjacentHTML("beforeend", data[i].email);

    const cardSecond = document.createElement("p");
    setAttributes(cardSecond, {
      class: "card-text cap",
    });
    cardSecond.insertAdjacentHTML(
      "beforeend",
      data[i].location.city + ", " + data[i].location.state
    );

    cardInfoContainer.appendChild(cardHeader);
    cardInfoContainer.appendChild(cardFirst);
    cardInfoContainer.appendChild(cardSecond);

    const gallery = document.getElementById("gallery");
    gallery.appendChild(card);
    card.appendChild(cardImgDiv);
    card.appendChild(cardInfoContainer);

    card.addEventListener("click", () => {
      const id = card.getAttribute("id");
      pushData(data, id);
      modalDiv.hidden = false;
    });
  }
}

/******************************************
CREATE EMPLOYEE MODAL - Build an empty modal object that's hidden by default
******************************************/
const modalDiv = document.createElement("div");
setAttributes(modalDiv, {
  class: "modal-container",
});

const modal = document.createElement("div");
setAttributes(modal, {
  class: "modal",
});

const modalClose = document.createElement("button");
setAttributes(modalClose, {
  type: "button",
  id: "modal-close-btn",
  class: "modal-close-btn",
});
modalClose.insertAdjacentHTML("beforeend", "<strong>X</strong>");
modalClose.addEventListener("click", () => {
  modalDiv.hidden = true;
});

const modalInfoContainer = document.createElement("div");
setAttributes(modalInfoContainer, {
  class: "modal-info-container",
});

const modalImg = document.createElement("img");
setAttributes(modalImg, {
  class: "modal-img",
  alt: "profile picture",
});

const modalHeader = document.createElement("h3");
setAttributes(modalHeader, {
  id: "name",
  class: "modal-name cap",
});

const modalEmail = document.createElement("p");
setAttributes(modalEmail, {
  class: "modal-text",
});

const modalCity = document.createElement("p");
setAttributes(modalCity, {
  class: "modal-text cap",
});
const modalHR = document.createElement("hr");
const modalPhone = document.createElement("p");
setAttributes(modalPhone, {
  class: "modal-text",
});

const modalAddress = document.createElement("p");
setAttributes(modalAddress, {
  class: "modal-text",
});

const modalBirthday = document.createElement("p");
setAttributes(modalBirthday, {
  class: "modal-text",
});

const prevNextContainer = document.createElement("div");
setAttributes(prevNextContainer, {
  class: "modal-btn-container",
});

const modalPrevBtn = document.createElement("button");
setAttributes(modalPrevBtn, {
  type: "button",
  id: "modal-prev",
  class: "modal-next btn",
});
modalPrevBtn.insertAdjacentHTML("beforeend", "Prev");

const modalNextBtn = document.createElement("button");
setAttributes(modalNextBtn, {
  type: "button",
  id: "modal-next",
  class: "modal-next btn",
});

modalNextBtn.insertAdjacentHTML("beforeend", "Next");
const modalElements = [
  modalImg,
  modalHeader,
  modalEmail,
  modalCity,
  modalHR,
  modalPhone,
  modalAddress,
  modalBirthday,
];

for (i = 0; i < modalElements.length; i++) {
  modalInfoContainer.appendChild(modalElements[i]);
}

prevNextContainer.appendChild(modalPrevBtn);
prevNextContainer.appendChild(modalNextBtn);
modal.appendChild(modalInfoContainer);
modal.appendChild(modalClose);
modalDiv.appendChild(modal);
modalDiv.appendChild(prevNextContainer);
gallery.after(modalDiv);

modalDiv.hidden = true;

/******************************************
SWAP MODAL DATA - Push response data into empty modal elements
******************************************/

function pushData(data, id) {
  modal.setAttribute("id", id);
  mData = data;
  modalImg.setAttribute("src", data[id].picture.large);
  modalHeader.innerHTML = data[id].name.first + " " + data[id].name.last;
  modalEmail.innerHTML = data[id].email;
  modalCity.innerHTML = data[id].location.city;

  const dirty = data[id].phone;
  const clean = dirty.replace(/-/, " ");
  modalPhone.innerHTML = clean;

  modalAddress.innerHTML =
    data[id].location.street.number +
    " " +
    data[id].location.street.name +
    "<br>" +
    data[id].location.city +
    ", " +
    data[id].location.state;

  const birthday = new Date(data[id].dob.date);
  const cleanBirthday = birthday.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  modalBirthday.innerHTML = "Birthday: " + cleanBirthday;
}

/******************************************
PREV/NEXT - Swap records without erroring out in the console
******************************************/
modalPrevBtn.addEventListener("click", () => {
  let current = modal.getAttribute("id");
  let next = document.getElementById("modal-next");
  next.style.display = null;
  if (current != 0) {
    current--;
    pushData(mData, current);
    console.log(current);
  } else if (current == 0) {
    modalPrevBtn.style.display = "none";
  }
});

modalNextBtn.addEventListener("click", () => {
  let current = modal.getAttribute("id");
  let prev = document.getElementById("modal-prev");
  prev.style.display = null;
  if (current != 11) {
    current++;
    pushData(mData, current);
  } else if (current == 11) {
    modalNextBtn.style.display = "none";
  }
});

/******************************************
SWAP CARDS - When search form is submitted hide/show cards based on input
******************************************/
function search(query) {
  const names = gallery.querySelectorAll("#name");

  for (i = 0; i < names.length; i++) {
    if (
      query.length != 0 &&
      !names[i].textContent.toLowerCase().includes(query.toLowerCase())
    ) {
      names[i].parentNode.parentNode.style.display = "none";
    } else {
      names[i].parentNode.parentNode.style.display = null;
    }
  }
}

/******************************************
HELPER FUNCTIONS
******************************************/
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
