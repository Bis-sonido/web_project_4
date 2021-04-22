//imports
import "../pages/index.css";

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

} from "../scripts/utils/constants.js";

import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";

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
      handleCardClick: (link, caption) => {
        imagePopup.open(link, caption);
      }}, ".card-template");
    const cardElement = card.cardsCreation();

    cardList.addItem(cardElement);
  }
}, ".elements__cards");

cardList.renderItems();


const imagePopup = new PopupWithImage('.popup_type_figure-card');
imagePopup.setEventListener();

const editProfilePopup = new PopupWithForm ({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: ({data}) => {
    userInfo.setUserInfo(data);
  }
});

editProfilePopup.setEventListener();
editButton.addEventListener("click", () => {
  editProfilePopup.open();
  fieldName.value = userInfo.getUserInfo().name;
  fieldAbout.value = userInfo.getUserInfo().job;
  
});

const editCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_create-card",
  handleFormSubmit: ({link, name}) => {
    
    const newCardElement = new Card({data: {link, name}, handleCardClick: (link, name) => { imagePopup.open(link, name);}}, '.card-template')
    const newCard = newCardElement.cardsCreation();
    
    cardList.addItem(newCard);
  }
}, '.elements__cards');

editCardPopup.setEventListener();
addCardButton.addEventListener('click', () => {
  editCardPopup.open();
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



