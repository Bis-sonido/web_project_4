
class Card {
  constructor({data, handleCardClick}, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }
  _setEventListeners() {
    const cardLikeButton = this._cardElement.querySelector(".group__button");
    const cardDeleteButton = this._cardElement.querySelector(".element__remove");
    
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    // this._cardImage.addEventListener("click", () => {
    //   //popup-figure-on-click
      
    //   figureImage.src = this._link;
    //   figureTitle.textContent = this._name;
  
    //   togglePopup(openFigureButton);
    // });
  
      cardLikeButton.addEventListener("click", () => {
      //toggle-like-on-card
      cardLikeButton.classList.toggle("group__button_like");
  
    });
  
      cardDeleteButton.addEventListener("click", () => {
      //remove card
      this._cardElement.remove();
    });
  }
  _getCardTemplate(){
    const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(true);
    return cardTemplate;
  }

  cardsCreation() {
    this._cardElement = this._getCardTemplate();

    this._cardImage = this._cardElement.querySelector(".element__images");
    this._cardTitle = this._cardElement.querySelector(".group__title");
    const cardBox = this._cardElement.querySelector(".group");
    const cardGroupImage = this._cardElement.querySelector(".group__image");
    

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

  return this._cardElement;
  }
}

export default Card 