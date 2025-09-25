export default class Algo {
  constructor(element) {
    this.element = element;
    element.addEventListener('click', () => {
      this.alert();
     });
    }
  alert() {
    alert('Alerta desde el módulo Algo!');
    this.element.classList.add('bg-green-500');
  }
}

