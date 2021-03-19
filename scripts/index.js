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
import UserInfo from "./UserInfo.js";


//instances
const profileFormValidator = new FormValidator(config, document.querySelector(".form"));
const cardFormValidator = new FormValidator(config, document.querySelector(".form_type_card-input"));
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

const userInfo = new UserInfo ({
  userName: profileTitle, 
  userJob: profileSubtitle,
});

const cardList = new Section ({
  items:initialCards,
  renderer: (cardItem) => {
    const card = new Card({
      data: cardItem, 
      handleCardClick: (name, link) => {
        imagePopup.open(name, link);
      }}, ".card-template");
    const cardElement = card.cardsCreation();

    cardList.addItem(cardElement);
  }
}, ".elements__cards");

cardList.renderItems();


const imagePopup = new PopupWithImage('.popup_type_figure-card');
imagePopup.setEventListener();

const editCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_create-card",
  handleFormSubmit: (items) => {
    
    const newCardElement = new Card({data: items, handleCardClick: (name, link) => { imagePopup.open(name, link);}}, '.card-template').cardsCreation();
    cardList.addItem(newCardElement);
  }
})

editCardPopup.setEventListener();
addCardButton.addEventListener('click', () => {
  editCardPopup.open();
});

const editProfilePopup = new PopupWithForm ({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: ({name, job}) => {
    userInfo.setUserInfo(name, job);
  }
})

editProfilePopup.setEventListener();
editButton.addEventListener("click", () => {
  editProfilePopup.open();
  fieldName.value = userInfo.getUserInfo().name;
  fieldAbout.value = userInfo.getUserInfo().job;
  
});


//functions
// function addCardSubmit (evt) {
//   //add-extra-form-card
//   evt.preventDefault();
//   const formAdd = cardsCreation({name: cardCreateName.value, link: cardUrlLink.value});
//   list.prepend(formAdd);
//   togglePopup(addCardPopup);
// }



// function handleFormSubmit (evt){
//   //change-profile-info
//   evt.preventDefault();

//   profileTitle.textContent = fieldName.value;
//   profileSubtitle.textContent = fieldAbout.value;

//   togglePopup(editProfileWindow);
// }

// function togglePopup(modal) {
//       //toggle-popups
//     modal.classList.toggle('popup_open');
//     if(modal.classList.contains("popup_open")){
//       document.addEventListener("keydown", escRemove);
//     } else {
//       document.removeEventListener("keydown", escRemove);
//     }
// }

// function profileValues (){
//   if (!editProfileWindow.classList.contains(`popup_open`)){
//     fieldName.value = profileTitle.textContent;
//     fieldAbout.value = profileSubtitle.textContent;
//   }
//   togglePopup(editProfileWindow);
// }



//Events
// formCardElement.addEventListener("submit", addCardSubmit);
// formElement.addEventListener("submit", handleFormSubmit);



