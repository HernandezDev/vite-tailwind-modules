# Vite-tailwind-modules

Proyecto base con Vite, TailwindCSS y módulos dinámicos ESModule.

## Características

- Vite como bundler y servidor de desarrollo.
- TailwindCSS para estilos.
- Importación dinámica de módulos JS según el DOM (`data-module`).
- Ejemplo de modularidad: solo se cargan los módulos necesarios.
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

### Ejemplo de módulo y cómo añadir un listener en el constructor

```js
// src/modules/algo.js
export default class Algo {
  constructor(element) {
    if (element) {
      // Añadir un listener al elemento
      element.addEventListener("click", () => {
        alert("Algo module instanciado y clickeado!");
      });
    }
  }
}
```

## Uso en HTML

Agrega un elemento con el atributo `data-module="nombreModulo"` para que se instancie automáticamente:

```html
<button data-module="algo">Probar Algo</button>
```

## Formateo de código

Este proyecto incluye Prettier y el plugin prettier-plugin-tailwindcss.  
El código y las clases de Tailwind se ordenan automáticamente al guardar los archivos.

## Uso de Esmodules como clases
| Tipo        | Uso principal                                             | Ejemplo de aplicación            | Ventajas                                        | Desventajas                                 |
|-------------|----------------------------------------------------------|----------------------------------|-------------------------------------------------|---------------------------------------------|
| Clases      | Lógica compleja, patrones OOP, servicios                 | Modelos, utilidades, stores      | Encapsulamiento, herencia, instanciación        | Verbosidad, menos idiomático en frontend    |
| Funciones   | Utilidades, helpers, lógica simple                       | Formateo, cálculos, validaciones | Sencillez, reutilización, fácil testeo          | Menos adecuadas para lógica con estado      |
| Componentes | UI, partes visuales reutilizables                        | Botones, menús, tarjetas         | Composición, reutilización, integración con UI   | Dependen de framework (React, Vue, etc.)    |
| Hooks       | Lógica de estado, efectos secundarios en componentes     | useState, useEffect, useFetch    | Separación de lógica, reutilización en React     | Específicos de React, no universales        |


