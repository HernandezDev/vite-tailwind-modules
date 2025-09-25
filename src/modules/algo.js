export default class Algo {
  constructor(element) {
    if (element) {
      element.addEventListener('click', () => {
        alert('Algo module instanciado y clickeado!');
      });
    }
  }
}
