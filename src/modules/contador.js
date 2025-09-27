import twClass from './twclass.js';
export default class Contador {
  constructor(element) {
    this.element = element;
    this.twClass = new twClass(this.element);
    element.addEventListener('click', () => {
      this.increment();
     });
    }
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
    this.twClass.addClass('bg-green-500 hover:bg-green-700');
  }
}

