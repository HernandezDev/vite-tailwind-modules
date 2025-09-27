import { twMerge } from 'tailwind-merge'
export default class Contador {
  constructor(element) {
    this.element = element;
    element.addEventListener('click', () => {
      this.increment();
     });
    }
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
    this.addClass('bg-green-500 hover:bg-green-700');
  }
  addClass(className) {
    this.element.className = twMerge(this.element.className, className);
  }
}

