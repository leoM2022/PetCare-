# 🚐 PetCare Jujuy - App de Tablet para Chofer (Huellitas Express)

> **Consola Vehicular de Cabina para Tablet (iPad / Galaxy Tab Mockup & Fullscreen)**
> Sistema Logístico Integral de Transporte Canino y Felino para San Salvador de Jujuy

---

## 📱 Descripción General

Esta aplicación fue concebida y modelada específicamente para ser montada en la cabina de la **Combi Huellitas 02**, la unidad logística móvil de **PetCare Jujuy**.

Mantiene con total fidelidad la **misma estética visual, paleta cromática cálida (naranja suave `#FB923C`, acento activo `#EA580C`, grafito `#18181B`) y calidad interactiva** de la app de celular previa, adaptada al formato ergonómico horizontal de una tablet con botones grandes de alto contraste pensados para una operación segura del chofer en viaje.

---

## 📁 Archivos y Estructura Multipágina

La solución está construida con archivos HTML independientes para permitir una navegación fluida y estructurada entre pestañas:

| Archivo | Función |
| :--- | :--- |
| **`index.html`** | **Acceso Seguro de Conductor:** Login protegido exclusivo para el rol Chofer (`chofer@petcare.com` / `1234`). Bloquea el ingreso a cuentas administrativas o externas. |
| **`ruta.html`** | **Pantalla Principal (Navegación & Hoja de Ruta):** Mapa interactivo de gran tamaño de San Salvador de Jujuy (Leaflet OSM + fallback de radar vectorial), ubicación en vivo de la Combi 02, lista táctil de mascotas a bordo (Toby, Luna, Rocco, Thor y Max) y registro de entregas. |
| **`camaras.html`** | **CCTV Cabina In-Transit:** Cámaras en tiempo real con 3 ángulos de visualización: mascotas sentadas con arnés homologado ISOFIX, sector de jaulas reforzadas para perros en adaptación conductual, y vista panorámica total de la cabina. |
| **`marco_legal.html`** | **Marco Legal & Control de Tránsito:** Documentación oficial para presentar inmediatamente ante inspectores municipales o policía vial: Habilitación Municipal de Jujuy (RES-SSJ-412/2026), Ley 24.449, póliza de seguro de transporte animal y manifiesto sanitario al día. |
| **`scanner_qr.html`** | **Lector de Carnet Digital con QR:** Escáner con haz láser interactivo, soporte para cámara de la tablet y operación táctil rápida de carnets para validar el check-out de entrega con firma digital. |
| **`tablet_styles.css`** | Hoja de estilos completa con el modelado del marco físico de tablet, detalles de hardware (cámara frontal, biseles de aluminio), animaciones y paleta corporativa. |
| **`tablet_app.js`** | Motor de autenticación, persistencia en `localStorage`, base de datos de paradas, geolocalización y sincronización. |

---

## 🔑 Credenciales de Acceso

Para ingresar a la consola de la tablet:

- **Email Oficial del Chofer:** `chofer@petcare.com`
- **Contraseña o PIN:** `1234`
- **Botón de Acceso Rápido:** Dentro de `index.html` existe un botón directo para ingresar con un solo toque como **Héctor López (Chofer Oficial)**.
- **Protección de Rol:** Si se intenta ingresar con credenciales que no corresponden al rol de Chofer (por ejemplo `admin@petcare.com`, `cuidador@petcare.com` o `jefe@petcare.com`), el sistema bloqueará el acceso indicando que la consola de cabina sólo puede ser operada por el conductor habilitado.

---

## 🚀 Cómo Abrir la Aplicación

La aplicación es 100% estática y no requiere Node.js, servidores ni dependencias externas pesadas. Puedes abrirla directamente con doble clic en `index.html` o desde la terminal:

```bash
# Abrir directamente en el navegador
xdg-open "/home/t1/Downloads/PetCare Chofer/index.html"
```

---

## 🌟 Características Destacadas

### 1. Modelado Físico de Tablet & Modo Pantalla Completa
- La aplicación se presenta dentro de un **marco físico de tablet de 11"-12"** con bisel de aluminio, cámara frontal integrada y barra de estado con la hora de Jujuy, 5G, GPS y batería.
- En la esquina superior derecha dispone de un botón `[📺 Pantalla Completa]` / `[📱 Ver en Marco Tablet]` para adaptarse a pantallas reales de tablets o a la vista de maqueta según la preferencia del usuario.

### 2. Mapa Interactivo de San Salvador de Jujuy
- Basado en Leaflet.js centrado en Jujuy (`-24.1860, -65.2980`), mostrando los barrios de la hoja de ruta: **Los Perales, Ciudad de Nieva, San Pedrito, Alto La Viña y Bajo La Viña**.
- Incluye el icono animado de la Combi 02 con ondas de radar GPS y el trazado de la ruta.
- Si no hay conexión a internet o los mapas externos tardan, cuenta con el botón `[🗺️ Modo Vectorial]` que conmuta instantáneamente a un mapa radar vectorial de alta definición de Jujuy con el río Xibi Xibi y los puntos de parada.

### 3. Cámaras en Vivo (Asientos y Jaulas de Conducta)
- **Cámara 1 (Asientos):** Muestra cómo los animalitos están sentados con sus respectivos arneses de sujeción homologados (Toby, Luna en canil y Rocco) con animación de respiración y descanso.
- **Cámara 2 (Jaulas Conductuales):** Sector reforzado para perros en proceso de cambio de conducta (Thor, sensible a bocinas/motos, y Max, en tratamiento de ansiedad por separación) con iluminación LED azul calmante, difusor de feromonas y medidor de decibeles.
- **Cámara 3 (Panorámica):** Gran angular 160° de la cabina completa.
- Incluye botón de visión nocturna (filtro infrarrojo verde) y reproductor de música relajante canina.

### 4. Padrón Legal Inmediato ante Controles de Tránsito
- Botón destacado `[🚨 Modo Control de Tránsito]` que abre en un toque una credencial de alto contraste para mostrar a los agentes de tránsito en vía pública.
- Detalla la resolución municipal de transporte de mascotas de Jujuy, la cobertura de póliza de seguro y el cumplimiento de la Ley 24.449.

### 5. Escáner de Carnet QR
- Permite leer el QR del carnet digital de la mascota para validar los datos del tutor y confirmar la entrega domiciliaria registrando la hora y firma.
