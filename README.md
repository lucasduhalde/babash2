# Babash - Landing Page Modularizada

## 📁 Estructura del Proyecto

```
Landing-babash/
├── index.html                 # Archivo original (monolítico)
├── index-modular.html         # Archivo principal modularizado
├── css/                       # Estilos modulares
│   ├── main.css              # Variables globales y estilos base
│   ├── hero.css              # Estilos de la sección hero
│   ├── services.css          # Estilos de la sección servicios
│   ├── audience.css          # Estilos de la sección audiencia
│   ├── about.css             # Estilos de la sección equipo
│   ├── contact.css           # Estilos de la sección contacto
│   └── footer.css            # Estilos del footer
├── js/                        # JavaScript modular
│   └── main.js               # Funcionalidades principales
└── components/                # Componentes HTML (referencia)
    ├── hero.html
    ├── services.html
    ├── audience.html
    ├── about.html
    ├── contact.html
    └── footer.html
```

## 🎯 Beneficios de la Modularización

### ✅ **Mantenibilidad**

- Cada sección tiene su propio archivo CSS
- Fácil localización y modificación de estilos específicos
- Código más organizado y legible

### ✅ **Reutilización**

- Componentes HTML independientes
- Estilos modulares que se pueden reutilizar
- Funciones JavaScript reutilizables

### ✅ **Escalabilidad**

- Fácil agregar nuevas secciones
- Estructura clara para nuevos desarrolladores
- Separación de responsabilidades

### ✅ **Performance**

- CSS modular permite cargar solo lo necesario
- JavaScript optimizado y organizado
- Mejor cache del navegador

## 🚀 Cómo Usar

### Para Desarrollo:

1. Usa `index-modular.html` como archivo principal
2. Modifica los archivos CSS específicos según necesites
3. Los componentes HTML están en `/components` como referencia

### Para Producción:

1. Considera minificar y combinar los archivos CSS
2. Optimiza las imágenes y recursos
3. Implementa lazy loading para mejor performance

## 🎨 Variables CSS Globales

El archivo `css/main.css` contiene variables CSS que puedes modificar para cambiar el tema:

```css
:root {
  --primary-blue: #1e3a8a;
  --secondary-blue: #3b82f6;
  --primary-yellow: #fbbf24;
  --secondary-yellow: #f59e0b;
  --text-dark: #333;
  --text-light: #666;
  /* ... más variables */
}
```

## 📱 Responsive Design

Todos los archivos CSS incluyen media queries para dispositivos móviles:

- Breakpoint principal: `768px`
- Grid layouts adaptativos
- Tipografía escalable

## 🔧 Funcionalidades JavaScript

El archivo `js/main.js` incluye:

- Smooth scroll para navegación
- Animaciones al hacer scroll
- Tracking de clicks en botones
- Funciones utilitarias para formularios
- Efectos de hover dinámicos

## 📝 Próximos Pasos

1. **Implementar un sistema de build** (Webpack, Vite, etc.)
2. **Agregar preprocesadores CSS** (Sass, Less)
3. **Implementar lazy loading** para imágenes
4. **Agregar tests automatizados**
5. **Optimizar para SEO**

## 🤝 Contribución

Para contribuir al proyecto:

1. Mantén la estructura modular
2. Usa las variables CSS existentes
3. Documenta nuevas funcionalidades
4. Sigue las convenciones de nomenclatura

---

**Babash** - Transformando ideas en realidades legales y estratégicas.
