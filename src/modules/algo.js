export default class Algo {
  constructor(element) {
    element.addEventListener('click', () => {
      this.alert();
     });
    }
  alert() {
    alert('Alerta desde el módulo Algo!');
  }
}

