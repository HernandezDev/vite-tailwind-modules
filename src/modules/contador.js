export default class Contador {
  constructor(element) {
    this.element = element;
    element.addEventListener('click', () => {
      this.increment();
     });
    }
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
  }
}

