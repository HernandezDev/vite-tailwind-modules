import './style.css'

const context = {};

async function initModules() {
  // Importar todos los módulos de src/modules usando import.meta.glob
  const modules = import.meta.glob('./modules/*.js');
  // Depuración: mostrar las claves disponibles
  console.log('Modulos disponibles:', Object.keys(modules)); // ELIMINAR EN PRODUCCIÓN

  document.querySelectorAll('[data-module]').forEach(async (el) => {
    const moduleName = el.getAttribute('data-module');
    // Componer la ruta del módulo
    const modulePath = `./modules/${moduleName}.js`;
    console.log('Buscando modulo:', modulePath); // ELIMINAR EN PRODUCCIÓN

    if (modules[modulePath]) {
      const mod = await modules[modulePath]();
      // === AQUÍ SE INICIALIZA EL MÓDULO ===
      new mod.default(el, context);
    } else {
      console.warn(`No se encontró el módulo para: ${modulePath}`); // Opcional: eliminar en producción si no quieres mostrar advertencias
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initModules();
});


