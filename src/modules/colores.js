export default class Colores {
  constructor() {
    this.colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
    this.colorsHover = ['hover:bg-red-700', 'hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-yellow-700'];
    }
    getColor() {
    const indice = Math.floor(Math.random() * 4);
    const colorAleatorio = this.colors[indice];
    const colorHoverAleatorio = this.colorsHover[indice];
    return `${colorAleatorio} ${colorHoverAleatorio}`;
    }
}