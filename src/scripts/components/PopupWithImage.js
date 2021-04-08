import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
  }
  open(link, caption){
    const figureImageUp = this._popupElement.querySelector(".popup__figure-image")
    const figureTextUp = this._popupElement.querySelector(".popup__figure-title")

    figureImageUp.src = link;
    figureTextUp.textContent = caption;

    super.open();
  }
}

export default PopupWithImage