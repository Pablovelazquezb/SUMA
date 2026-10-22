# ✳ SUMA · Voluntariado & Impacto Social

Plataforma web moderna e interactiva que conecta a personas apasionadas con causas ambientales, comunitarias, educativas y de bienestar animal respaldadas por organizaciones verificadas en México, Latinoamérica y el mundo.

Permite descubrir oportunidades, postularte con generación de **Pase Digital de Voluntario** con código QR, registrar y certificar horas oficiales para **Servicio Social Universitario**, y a las organizaciones gestionar convocatorias y postulantes en tiempo real.

---

## 🌟 Características Principales

### 🔍 1. Explorador Inteligente de Causas
- **Filtros por causa**: Medio Ambiente, Comunidad y Alimentos, Educación y Mentoría, Bienestar Animal, Salud & Bienestar, Arte & Cultura, Tecnología & Inclusión.
- **Filtros por ubicación**: Destinos en México (Monterrey, San Pedro, Guadalupe, CDMX, Guadalajara, Puebla, Oaxaca), Latinoamérica (Cusco, Quito), Europa (Lisboa, Madrid) y Remoto (En línea).
- **Filtros avanzados**: Duración estimada, modalidad (Presencial, En línea, Híbrido), fines de semana, y actividades válidas para acreditación de horas de servicio social.
- **Modos de visualización**:
  - 🔲 **Vista Tarjetas**: Fichas dinámicas con medidores de cupos ocupados, insignias y detalles clave.
  - 🗺️ **Vista Mapa Interactivo**: Mapa vectorizado con pines interactivos por región y previsualización.
  - 📅 **Vista Calendario de Fechas**: Agenda cronológica de jornadas próximas.

### 📝 2. Postulación en 2 Pasos & Pase Digital
- Postulación ágil con registro de datos personales, teléfono, universidad y requerimientos especiales.
- Animación de celebración con confeti.
- **Pase Oficial de Voluntario**:
  - Folio institucional único (`SUMA-VOL-2026-XXXX`).
  - Código QR generado dinámicamente.
  - Botón directo para añadir la jornada a **Google Calendar**.
  - Enlace directo de **WhatsApp** con el coordinador de campo de la ONG.
  - Opción de impresión o guardado en PDF.

### 🎒 3. Mi Camino (Dashboard de Voluntario)
- **Perfil de impacto**: Horas acumuladas, causas apoyadas, misiones completadas e insignias ganadas (*Semilla del Cambio*, *Guardián Verde*, etc.).
- **Credencial Oficial Digital**: Carnet de voluntario activo con QR y vigencia.
- **Constancia Oficial Imprimible**: Certificado con membrete institucional, firmas de autoridades, sello dorado y desglose de horas, optimizado con estilos de impresión (`@media print`).

### 🏢 4. Portal para Organizaciones (ONGs)
- Publicación de nuevas convocatorias comunitarias con validación instantánea.
- Panel de control de postulantes inscritos con visualización de datos y enlace a WhatsApp.

### 🛡️ 5. Validador Público de Certificados
- Herramienta para universidades y empleadores para verificar la autenticidad de cualquier certificado emitido en la red SUMA ingresando su código de validación.

### 🌙 6. Modo Oscuro / Claro
- Alternancia de tema con persistencia automática en `localStorage` y paleta adaptada para máxima accesibilidad y contraste.

---

## 🚀 Cómo ejecutar localmente

Puedes abrir la aplicación directamente en cualquier navegador moderno abriendo `index.html` (o `dist/index.html`).

Para un entorno de desarrollo con servidor local:

```bash
# Con Python 3
python3 -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```text
SUMA/
├── index.html          # Estructura principal, vistas y modales
├── style.css           # Sistema de diseño, variables CSS, modo oscuro y estilos de impresión
├── app.js              # Motor interactivo, catálogo de 18 causas, persistencia y vistas
├── favicon.svg         # Icono vectorial institucional
├── vercel.json         # Configuración de despliegue para Vercel
├── package.json        # Metadatos del proyecto
├── README.md           # Documentación
└── dist/               # Distribución sincronizada lista para producción
    ├── index.html
    ├── style.css
    ├── app.js
    └── favicon.svg
```

---

## 💻 Tecnologías Utilizadas

- **HTML5 Semántico**: Con accesibilidad completa (ARIA, roles, dialogs nativos).
- **Vanilla CSS3 Moderno**: CSS Grid, Flexbox, Variables CSS, Glassmorphism, y reglas `@starting-style` para transiciones fluidas de modales en el top layer.
- **JavaScript ES6+ Vanilla**: Cero dependencias externas para máxima velocidad y funcionamiento sin conexión.
- **Motor SVG Vectorial**: Ilustraciones y códigos QR generados directamente en el DOM.
- **Impresión Nativa**: Hoja de estilos `@media print` para diplomas y credenciales en formato carta/A4.

---

Desarrollado para **SUMA** · Red de Voluntariado e Impacto Social.
Repositorio: [https://github.com/Pablovelazquezb/SUMA.git](https://github.com/Pablovelazquezb/SUMA.git)
