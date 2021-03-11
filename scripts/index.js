//imports
import {
  editButton,
  addCardButton,
  openFigureButton,
  closeButton,
  closeCreateButton,
  figureCloseButton,
  overlayPopupCard,
  overlayPopupEdit,
  overlayPopupFigure,
  formElement,
  formCardElement, 
  addCardPopup,
  editProfileWindow,
  profileTitle,
  profileSubtitle,
  fieldName,
  fieldAbout,
  cardCreateName,
  cardUrlLink,
  list,
  config,

} from "./utils/constants.js";

import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

//instances
const profileFormValidator = new FormValidator(config, document.querySelector(".form"));
const cardFormValidator = new FormValidator(config, document.querySelector(".form_type_card-input"));
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const cardList = new Section ({
  items:initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, ".card-template");
    const cardElement = card.cardsCreation();

    cardList.addItem(cardElement);
  }
}, list);

const editProfilePopup = new PopupWithForm('popup_type_edit-profile');
editProfilePopup.setEventListener();

const editCardPopup = new PopupWithForm('popup_type_create-card');
editCardPopup.setEventListener();

const imagePopup = new PopupWithImage('popup_type_figure-card');
imagePopup.setEventListener();

cardList.renderItems();


//functions
/*initialCards.forEach(data => {
  //initial-cards
  list.prepend(cardsCreation(data));
});*/

function cardsCreation(data) {
  const newCard = new Card(data, ".card-template");
  return newCard.cardsCreation()
}


function addCardSubmit (evt) {
  //add-extra-form-card
  evt.preventDefault();
  const formAdd = cardsCreation({name: cardCreateName.value, link: cardUrlLink.value});
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


