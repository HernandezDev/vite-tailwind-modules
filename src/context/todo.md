# TODO para mejorar la gestión del estado compartido

- Crear un objeto de contexto global colores

  Un método que actualice el color y emita el evento
  Un método que solo devuelva el color actual sin modificar el estado

- Pasar este objeto de contexto a los constructores de los módulos
  instanciandolo en main.js

```javascript
import Colores from "./context/colores.js";
const context = {
  colores: new Colores(),
};
```

-mucho mas adelante hacer una importacion dinámica de todos los módulos del directorio context con este index.js en context(context/index.js):

```javascript
// Importa dinámicamente todos los módulos JS del directorio context
const modules = import.meta.glob("./*.js", { eager: true });

const context = {};

// Recorre cada módulo y crea una instancia (si exporta una clase por default)
Object.entries(modules).forEach(([path, mod]) => {
  // Evita incluir index.js dentro del propio contexto
  if (path.endsWith("index.js")) return;

  // Usa el nombre del archivo como clave
  const key = path.split("/").pop().replace(".js", "");

  // Si el módulo exporta una clase por default, instancia
  if (typeof mod.default === "function") {
    context[key] = new mod.default();
  } else {
    context[key] = mod.default || mod;
  }
});

export default context;
```
