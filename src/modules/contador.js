import { twMerge } from 'tailwind-merge'

export default class Contador {
  constructor(element, context) {
    this.element = element;
    this.color = context.colores;
    element.addEventListener('click', () => {
      this.increment();
     });
     document.addEventListener('click', (event) => {
      // si el clic fue fuera del elemento
      if (!element.contains(event.target)) {
        // o si el clic fue fuera de un contador
        //!event.target.closest('[data-module="contador"]')
        this.changeColor();
      }
    });
    window.addEventListener('colorChange', () => { // Cambia document por window
      this.setColor();
    });

  }
  increment() {
    this.element.textContent = parseInt(this.element.textContent) + 1;
  }
  
  changeColor() {
    this.color.changeColor();
  }
  setColor() {
    const bg = this.color.getColor().bg;
    const hover = this.color.getColor().hover;
    this.element.className = twMerge(this.element.className, bg, hover);
  }
}

