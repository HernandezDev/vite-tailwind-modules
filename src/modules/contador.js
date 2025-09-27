import twclass from './twclass.js';
export default class Contador {
  constructor(element) {
    this.element = element;
    this.twclass = new twclass(this.element);
    element.addEventListener('click', () => {
      this.increment();
     });
    }
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
    this.twclass.addClass('bg-green-500 hover:bg-green-700');
  }
}

