import Popup from "./Popup.js";

class PopupWithForm extends Popup{
  constructor({handleFormSubmit, popupSelector}){
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".form"); 
    
  }
  _getInputValues(){
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListener(){
    
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
      
    });

    //super.setEventListener();
  }
  close(){
    //reset();
    super.close();
    this._form.reset();

  }
}

export default PopupWithForm 