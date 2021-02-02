//buttons
let editButton = document.querySelector(".edit");
let addCardButton = document.querySelector(".add-button");
let openFigureButton = document.querySelector(".popup_type_figure-card");

//close-buttons
let closeButton = document.querySelector(".close-icon");
let closeCreateButton = document.querySelector(".close-icon_type_close-card");
let figureCloseButton = document.querySelector(".close-icon_type_figure-image");

//forms
let formElement = document.querySelector(".form");
let formCardElement = document.querySelector(".form_type_card-input");

//popoup-containers
let addCardPopup = document.querySelector(".popup_type_create-card");
let editProfileWindow = document.querySelector(".popup_type_edit-profile");

//profile
let profileTitle = document.querySelector(".profile-info__title");
let profileSubtitle = document.querySelector(".profile-info__subtitle");

//inputs
let fieldName = document.querySelector(".field-name");
let fieldAbout = document.querySelector(".field-about");
let cardCreateName = document.querySelector(".field-name_type_card-title");
let cardUrlLink = document.querySelector(".field-about_type_url");

//template
let cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
let list = document.querySelector(".elements__cards");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 




function addCardSubmit (evt) {
  //add-extra-cards
  evt.preventDefault();

  let cardFormElement = cardTemplate.cloneNode(true);

  let cardFormImage = cardFormElement.querySelector(".element__images");
  let cardFormTitle = cardFormElement.querySelector(".group__title");
  let cardFormBox = cardFormElement.querySelector(".group");
  let cardFormLikeButton = cardFormElement.querySelector(".group__button");
  let cardFormGroupImage = cardFormElement.querySelector(".group__image");
  let cardFormDeleteButton = cardFormElement.querySelector(".element__remove");


  cardFormTitle.textContent = cardCreateName.value;
  cardFormImage.src = cardUrlLink.value;

  list.prepend(cardFormElement);

  togglePopup(addCardPopup);

  cardFormLikeButton.addEventListener("click", () =>{

    let likeExtraCards = cardFormLikeButton.classList.toggle("group__button_like");

  });

  cardFormDeleteButton.addEventListener("click", () =>{

    let removeExtraCards = document.querySelector(".element");

    removeExtraCards.remove();

  });

  cardFormImage.addEventListener("click", () => {
    //popup-figure-on-click
    let figureExtraImages = openFigureButton.querySelector(".popup__figure-image");
    let figureExtraTitles = openFigureButton.querySelector(".popup__figure-title");

    figureExtraImages.src = cardFormImage.src;
    figureExtraTitles.textContent = cardFormTitle.textContent;

    togglePopup(openFigureButton);
  });

};



function handleFormSubmit (evt){
  evt.preventDefault();

  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;

  togglePopup(editProfileWindow);
}

function togglePopup(modal) {

    if (!editProfileWindow.classList.contains('popup_open')) {
      fieldName.value = profileTitle.textContent;
      fieldAbout.value = profileSubtitle.textContent;

    }
    modal.classList.toggle('popup_open');
}




initialCards.forEach(data => {
  //create cards
  
  let cardElement = cardTemplate.cloneNode(true);

  let cardImage = cardElement.querySelector(".element__images");
  let cardTitle = cardElement.querySelector(".group__title");
  let cardBox = cardElement.querySelector(".group");
  let cardLikeButton = cardElement.querySelector(".group__button");
  let cardGroupImage = cardElement.querySelector(".group__image");
  let cardDeleteButton = cardElement.querySelector(".element__remove");

  
  cardTitle.textContent = data.name;
  cardImage.src = data.link;

  cardImage.addEventListener("click", () => {
    //popup-figure-on-click
    let figureImage = openFigureButton.querySelector(".popup__figure-image");
    let figureTitle = openFigureButton.querySelector(".popup__figure-title");

    figureImage.src = data.link;
    figureTitle.textContent = data.name;

    togglePopup(openFigureButton);
  });

  cardLikeButton.addEventListener("click", () => {
    //toggle-like-on-card
    let likeToggle = cardLikeButton.classList.toggle("group__button_like");

  });

  cardDeleteButton.addEventListener("click", () =>{
    //remove card
    let removeCard = document.querySelector(".element");

    removeCard.remove();
  });

  list.prepend(cardElement);

});


//Events
formCardElement.addEventListener("submit", addCardSubmit);
formElement.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", () => {
  togglePopup(editProfileWindow);
});
closeButton.addEventListener("click", () => {
  togglePopup(editProfileWindow);
});
addCardButton.addEventListener('click', () => {
  togglePopup(addCardPopup)
  addCardPopup.classList.add("popup_open");
});
closeCreateButton.addEventListener("click", () => {
  togglePopup(addCardPopup);
});
figureCloseButton.addEventListener("click", () => {
  togglePopup(openFigureButton);
});

