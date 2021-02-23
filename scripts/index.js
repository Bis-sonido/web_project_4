//imports
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

//buttons
const editButton = document.querySelector(".edit");
const addCardButton = document.querySelector(".add-button");
const openFigureButton = document.querySelector(".popup_type_figure-card");

//close-buttons
const closeButton = document.querySelector(".close-icon");
const closeCreateButton = document.querySelector(".close-icon_type_close-card");
const figureCloseButton = document.querySelector(".close-icon_type_figure-image");


const overlayPopupEdit = document.querySelector(".popup_overlay-profile");
const overlayPopupCard = document.querySelector(".popup_overlay-card");
const overlayPopupFigure = document.querySelector(".popup_overlay-figure");

//forms
const formElement = document.querySelector(".form");
const formCardElement = document.querySelector(".form_type_card-input");

//popoup-containers
const addCardPopup = document.querySelector(".popup_type_create-card");
const editProfileWindow = document.querySelector(".popup_type_edit-profile");

//profile
const profileTitle = document.querySelector(".profile-info__title");
const profileSubtitle = document.querySelector(".profile-info__subtitle");

const figureImage = openFigureButton.querySelector(".popup__figure-image");
const figureTitle = openFigureButton.querySelector(".popup__figure-title");

//inputs
const fieldName = document.querySelector(".field-name");
const fieldAbout = document.querySelector(".field-about");
const cardCreateName = document.querySelector(".field-name_type_card-title");
const cardUrlLink = document.querySelector(".field-about_type_url");

//template
const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
const list = document.querySelector(".elements__cards");

const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}; 

const profileFormValidator = new FormValidator(config, document.querySelector(".form"));
const cardFormValidator = new FormValidator(config, document.querySelector(".form_type_card-input"));
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();



//functions
/*function cardsCreation(name, link) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".element__images");
  const cardTitle = cardElement.querySelector(".group__title");
  const cardBox = cardElement.querySelector(".group");
  const cardLikeButton = cardElement.querySelector(".group__button");
  const cardGroupImage = cardElement.querySelector(".group__image");
  const cardDeleteButton = cardElement.querySelector(".element__remove");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardImage.addEventListener("click", () => {
    //popup-figure-on-click
    
    figureImage.src = link;
    figureTitle.textContent = name;

    togglePopup(openFigureButton);
  });

  cardLikeButton.addEventListener("click", () => {
    //toggle-like-on-card
    cardLikeButton.classList.toggle("group__button_like");

  });

  cardDeleteButton.addEventListener("click", () => {
    //remove card
    const removeCard = document.querySelector(".element");

    removeCard.remove();
  });

  return cardElement;
}*/


initialCards.forEach(data => {
  //initial-cards
  const newCardsCreations = new Card(data, ".card-template");
  list.prepend(newCardsCreations.cardsCreation(data.name, data.link));
});

function addCardSubmit (evt) {
  //add-extra-form-card
  evt.preventDefault();
  cardsCreation();
  const formAdd = cardsCreation(cardCreateName.value, cardUrlLink.value);
  list.prepend(formAdd);
  togglePopup(addCardPopup);
}



function handleFormSubmit (evt){
  //change-profile-info
  evt.preventDefault();

  profileTitle.textContent = fieldName.value;
  profileSubtitle.textContent = fieldAbout.value;

  togglePopup(editProfileWindow);
}

function togglePopup(modal) {
      //toggle-popups
    modal.classList.toggle('popup_open');
    if(modal.classList.contains("popup_open")){
      document.addEventListener("keydown", escRemove);
    } else {
      document.removeEventListener("keydown", escRemove);
    }
}

function profileValues (){
  if (!editProfileWindow.classList.contains(`popup_open`)){
    fieldName.value = profileTitle.textContent;
    fieldAbout.value = profileSubtitle.textContent;
  }
  togglePopup(editProfileWindow);
}

function escRemove(evt){

  if(evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_open");
    togglePopup(popupOpen);
  }
}



//Events
formCardElement.addEventListener("submit", addCardSubmit);
formElement.addEventListener("submit", handleFormSubmit);
editButton.addEventListener("click", () => {
  profileValues();
});
closeButton.addEventListener("click", () => {
  togglePopup(editProfileWindow);
  
});
addCardButton.addEventListener('click', () => {
  togglePopup(addCardPopup)
});
closeCreateButton.addEventListener("click", () => {
  togglePopup(addCardPopup);
  
});
figureCloseButton.addEventListener("click", () => {
  togglePopup(openFigureButton);
  
});
overlayPopupEdit.addEventListener("click", (evt) => {
  if(evt.target.classList.contains("popup_open")){
    togglePopup(evt.target);
  };
});
overlayPopupCard.addEventListener("click", (evt) => {
  if(evt.target.classList.contains("popup_open")){
    togglePopup(evt.target);
  }
});
overlayPopupFigure.addEventListener("click", (evt) => {
  if(evt.target.classList.contains("popup_open")){
    togglePopup(evt.target);
  }
});


