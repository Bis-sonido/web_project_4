class Section {
  constructor({items, renderer}, ClassSelector){
    this._renderedItems = items;
    this._container = document.querySelector(ClassSelector);
    this._renderer = renderer;
  }
  renderItems(){
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(element){
    this._container.append(element);
  }
}

export default Section