export default class Colores {
  constructor() {
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
  getColor() {
    const keys = Object.keys(this.colors);
    const indice = Math.floor(Math.random() * keys.length);
    const colorObj = this.colors[keys[indice]];
    return `${colorObj.bg} ${colorObj.hover}`;
  }
}