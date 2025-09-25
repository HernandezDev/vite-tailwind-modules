import './style.css'

async function initModules() {
  // Importar todos los módulos de src/modules usando import.meta.glob
  const modules = import.meta.glob('./modules/*.js');
  // Depuración: mostrar las claves disponibles
  console.log('Modulos disponibles:', Object.keys(modules));

  document.querySelectorAll('[data-module]').forEach(async (el) => {
    const moduleName = el.getAttribute('data-module');
    // Ajustar la ruta si es necesario
    let modulePath = `./modules/${moduleName}.js`;
    if (!(modulePath in modules)) {
      modulePath = `/src/modules/${moduleName}.js`;
    }
    console.log('Buscando modulo:', modulePath);

    if (modules[modulePath]) {
      const mod = await modules[modulePath]();
      new mod.default(el);
    } else {
      console.warn(`No se encontró el módulo para: ${modulePath}`);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initModules();
});


