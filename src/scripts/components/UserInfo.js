import {fieldName, fieldAbout} from "../utils/constants.js";

class UserInfo {
  constructor({userName, userJob}) {
    this._userName = userName,
    this._userJob = userJob
  }
  getUserInfo(){
    return { 
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
  }
  setUserInfo(){
    this._userNameField = document.querySelector(".profile-info__title");
    this._userJobField = document.querySelector(".profile-info__subtitle");

    this._userNameField.innerText = fieldName.value;
    this._userJobField.innerText = fieldAbout.value;
  }
}

export default UserInfo