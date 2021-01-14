# Project 4: Around The U.S.

* [Link to project](https://bis-sonido.github.io/web_project_4/)

### Overview

* Header
* Profile
  * Form
* Elements
* Footer

**Header**

Simple svg. file as the logo with a solid line underneath it for a sense of separation on the black-background page.

**Profile**

This is where most of the magic happens in regards to button functionality. The profile block consists of three parts: image, profile-info block and a button, this button is yet to have functionality. In the profile-info block, there is an edit button that gives interactivity to the page. it opens a form block that allows you to change the text-content of the profile-info block.

  **form**

The form block is controlled, in terms of display, by using a bit of javascript to allow it to show to the user. This form block has a name input block, an about input block and a save button that allows the user to change the text of the profile-info block. it also has a closing icon to toggle the form out of display.

**Elements**

list of of 6 places around U.S composed of a background color, an image of the place, title of the place, and a heart icon that changes color when is clicked upon. the change of color is accomplished by the use of selectors by changing the image to a similar one.

**footer**

copyright text.

### JavaScript

Javascript was used to display a form that would show by clicking a button in the profile section. Variables were created to accomodate certain events by "click". 

### Two functions were created:

* formSubmit - to change the values of the field-name and field-about.
* togglePopup - to enable the edit button to display or close the form.
