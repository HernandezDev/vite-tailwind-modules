import { twMerge } from 'tailwind-merge'
export default class twclass {
  constructor(element) {
    this.element = element;
  }
    addClass(newClasses) {
    this.element.className = twMerge(this.element.className, newClasses);
  }
}