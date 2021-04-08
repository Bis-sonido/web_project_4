
class Popup {
  constructor(popupSelector){
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
    this.close = this.close.bind(this);
  }
  open(){
    this._popupElement.classList.add('popup_open');
    document.addEventListener("keydown", this._handleEscClose)
  }
  close(){
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener("keydown", this._handleEscClose)
  }
  _handleEscClose(e){
    if(e.key === "Escape"){
      this.close();
    }
  }
  setEventListener(){
    // const closeButton = this._popupElement.querySelector(".close-icon");
    //closeButton.addEventListener("click", e => {
      //this.close();
    //});
    
    this._popupElement.addEventListener("click", (e) =>{
      if(e.target.classList.contains('close-icon') || (e.target.classList.contains('popup'))){
        this.close();
      }
    });
  }
}

export default Popup