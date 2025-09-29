import { twMerge } from 'tailwind-merge'
export default class TituloColorido {
  constructor(element, context) {
    this.element = element;
    this.color = context.colores;
    window.addEventListener('colorChange', () => {
      this.setColor();
  
    });
  }
  setColor() {
    const color = this.color.getColor().text;
    this.element.className = twMerge(this.element.className, color);
  }
}