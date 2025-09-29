import { twMerge } from 'tailwind-merge'
export default class TituloColorido {
  constructor(element, context) {
    this.element = element;
    this.contex = context;
    window.addEventListener('colorChange', (event) => {
      this.changeColor(event.detail);
    });
  }
  changeColor(color) {
    this.element.className = twMerge(this.element.className, color);
  }
}