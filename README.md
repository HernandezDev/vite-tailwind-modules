# Vite-tailwind-modules

Proyecto base con Vite, TailwindCSS y Clases en ESModules. Pensado para POO en frontend.

## Características

- Vite como bundler y servidor de desarrollo.
- TailwindCSS para estilos.
- Importación dinámica de módulos JS según el DOM (`data-module`).
- Ejemplo de modularidad: solo se cargan los módulos necesarios.
- Uso de **clases de POO (Programación Orientada a Objetos)** para organizar la lógica en módulos ESModules.
- Uso de [tailwind-merge](https://github.com/dcastil/tailwind-merge) para fusionar y gestionar clases de Tailwind de forma inteligente.
- Incluye [Prettier](https://prettier.io/) y el plugin [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) para formateo automático de código y clases de Tailwind.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Build para producción

```bash
npm run build
```

## Estructura de módulos

Coloca tus módulos JS en `src/modules/`.  
Cada módulo debe exportar una clase por defecto.

### Ejemplo de módulo y manipulación del elemento con una clase

```js
// src/modules/contador.js
export default class Contador {
  constructor(element) {
    // Puedes crear propiedades en cualquier método usando "this.propiedad"
    // Todas las propiedades creadas con "this" son accesibles desde cualquier método de la instancia
    this.element = element;
    element.addEventListener("click", () => {
      this.increment();
    });
  }
  increment() {
    // Acceso a la propiedad "element" desde otro método
    this.element.textContent = parseInt(this.element.textContent) + 1;
    this.element.classList.add("bg-green-500"); // Manipulación del elemento: añade una clase de Tailwind
  }
}
```

En las clases de JavaScript, puedes crear propiedades en cualquier método usando `this.propiedad = valor;`.  
Todas las propiedades creadas con `this` son accesibles desde cualquier método de la instancia, lo que permite compartir y manipular datos o referencias entre los distintos métodos de la clase.

## Uso en HTML

Agrega un elemento con el atributo `data-module="nombreModulo"` para que se instancie automáticamente:

```html
<button data-module="algo">Probar Algo</button>
```

## Formateo de código

Este proyecto incluye Prettier y el plugin prettier-plugin-tailwindcss.  
El código y las clases de Tailwind se ordenan automáticamente al guardar los archivos.

## Uso de tailwind-merge

Este proyecto utiliza la librería [tailwind-merge](https://github.com/dcastil/tailwind-merge) para gestionar y fusionar clases de Tailwind de forma inteligente.  
`tailwind-merge` elimina clases duplicadas y resuelve conflictos, asegurando que solo se aplique la clase más relevante (por ejemplo, si tienes `bg-red-500 bg-blue-500`, solo se aplicará `bg-blue-500`)

En el módulo `twClass`, se expone el método `addClass` que utiliza `twMerge` para añadir clases al elemento evitando duplicados y conflictos:

```js
import { twMerge } from "tailwind-merge";

export default class twClass {
  constructor(element) {
    this.element = element;
  }
  addClass(newClasses) {
    this.element.className = twMerge(this.element.className, newClasses);
  }
}
```
