import { twMerge } from 'tailwind-merge'
import Colores from './colores.js'; 

export default class Contador {
  constructor(element) {
    this.element = element;
    this.color = new Colores();
    element.addEventListener('click', () => {
      this.increment();
     });
    element.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.changeColor();
     });

    // Longpress para móviles
    let longPressTimer;
    element.addEventListener('touchstart', () => {
      longPressTimer = setTimeout(() => {
        this.changeColor();
      }, 600); // 600ms para longpress
    });
    element.addEventListener('touchend', () => {
      clearTimeout(longPressTimer);
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

