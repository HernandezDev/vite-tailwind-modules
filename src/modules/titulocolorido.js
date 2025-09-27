import { twMerge } from 'tailwind-merge'
export default class TituloColorido {
  constructor(element) {
    this.element = element;
    window.addEventListener('colorChange', (event) => {
      this.changeColor(event.detail);
    });
  }
  changeColor(color) {
    this.element.className = twMerge(this.element.className, color);
  }
}