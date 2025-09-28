import { twMerge } from 'tailwind-merge'
import Colores from './colores.js'; 

export default class Contador {
  constructor(element) {
    this.element = element;
    this.color = new Colores();
    element.addEventListener('click', () => {
      this.increment();
     });
     document.addEventListener('click', (event) => {
      if (!element.contains(event.target)) {
        // El clic fue fuera del elemento
        // Tu acción aquí
        this.changeColor();
      }
    });
   
}
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
  }
  addClass(className) {
    this.element.className = twMerge(this.element.className, className);
  }
  changeColor() {
    this.addClass(this.color.getColor());
  }
}

