export default class Colores {
  constructor() {
    this.indice = 0;
    this.colorObj = null;
    this.colors = {
      rojo: {
        text: 'text-red-500',
        bg: 'bg-red-500',
        hover: 'hover:bg-red-700'
      },
      azul: {
        text: 'text-blue-500',
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-700'
      },
      verde: {
        text: 'text-green-500',
        bg: 'bg-green-500',
        hover: 'hover:bg-green-700'
      },
      amarillo: {
        text: 'text-yellow-500',
        bg: 'bg-yellow-500',
        hover: 'hover:bg-yellow-700'
      }
    };
  }
  
  changeColor() {
    const keys = Object.keys(this.colors);
    this.indice++;
    const indice = parseInt(this.indice % keys.length);
    const colorObj = this.colors[keys[indice]];
    this.colorObj = colorObj;
    window.dispatchEvent(new CustomEvent('colorChange'));
  }
  getColor() {
    if (!this.colorObj) {
      this.colorObj = this.colors[Object.keys(this.colors)[this.indice]];
    }
    return this.colorObj
  }
}