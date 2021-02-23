const openFigureButton = document.querySelector(".popup_type_figure-card");

const figureImage = openFigureButton.querySelector(".popup__figure-image");
const figureTitle = openFigureButton.querySelector(".popup__figure-title");

const cardCreateName = document.querySelector(".field-name_type_card-title");
const cardUrlLink = document.querySelector(".field-about_type_url");

function escRemove(evt){

  if(evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_open");
    togglePopup(popupOpen);
  }
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

class Card {
  constructor(data, cardTemplateSelector) {
    this._data = data;
    this._cardTemplateSelector = cardTemplateSelector;
  }


  _setEventListeners() {
    const cardLikeButton = this._cardElement.querySelector(".group__button");
    const cardDeleteButton = this._cardElement.querySelector(".element__remove");
    
    this._cardImage.addEventListener("click", () => {
      //popup-figure-on-click
      
      figureImage.src = this._data.link;
      figureTitle.textContent = this._data.name;
  
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
  }
  cardsCreation() {
    const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector(".element");
    this._cardElement = cardTemplate.cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".element__images");
    const cardTitle = this._cardElement.querySelector(".group__title");
    const cardBox = this._cardElement.querySelector(".group");
    const cardGroupImage = this._cardElement.querySelector(".group__image");
    

    cardTitle.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;

    this._setEventListeners();

  return this._cardElement;
  }
}

export default Card 