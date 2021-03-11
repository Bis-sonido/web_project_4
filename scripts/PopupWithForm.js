import Popup from "./Popup.js";

class PopupWithForm extends Popup{
  constructor(handleFormSubmit, popupSelector){
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit;
    
  }
  _getInputValues(){
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners(){
    this._popupElement.addEventListeners('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues);
      this.close();
    })
  }
  close(){
    this.reset();
  }
}

export default PopupWithForm 