//buttons
export const editButton = document.querySelector(".edit");
export const addCardButton = document.querySelector(".add-button");
export const openFigureButton = document.querySelector(".popup_type_figure-card");

//close-buttons
export const closeButton = document.querySelector(".close-icon");
export const closeCreateButton = document.querySelector(".close-icon_type_close-card");
export const figureCloseButton = document.querySelector(".close-icon_type_figure-image");


export const overlayPopupEdit = document.querySelector(".popup_overlay-profile");
export const overlayPopupCard = document.querySelector(".popup_overlay-card");
export const overlayPopupFigure = document.querySelector(".popup_overlay-figure");

//forms
export const formElement = document.querySelector(".form");
export const formCardElement = document.querySelector(".form_type_card-input");

//popoup-containers
export const addCardPopup = document.querySelector(".popup_type_create-card");
export const editProfileWindow = document.querySelector(".popup_type_edit-profile");

//profile
export const profileTitle = document.querySelector(".profile-info__title");
export const profileSubtitle = document.querySelector(".profile-info__subtitle");

export const figureImage = openFigureButton.querySelector(".popup__figure-image");
export const figureTitle = openFigureButton.querySelector(".popup__figure-title");

//inputs
export const fieldName = document.querySelector(".field-name");
export const fieldAbout = document.querySelector(".field-about");
export const cardCreateName = document.querySelector(".field-name_type_card-title");
export const cardUrlLink = document.querySelector(".field-about_type_url");

//template
export const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
export const list = document.querySelector(".elements__cards");

export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};