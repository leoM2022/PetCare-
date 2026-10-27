### 🐾 PetCare Jujuy — Suite Integral de Cuidado Canino & Backoffice B2B

![Version](https://img.shields.io/badge/version-2.4.0-orange.svg)
![Architecture](https://img.shields.io/badge/architecture-Monorepo%20SPA-0F172A.svg)
![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

> **Ecosistema omnicanal de software para guardería, hotel boutique de mascotas y logística puerta a puerta en San Salvador de Jujuy, Argentina.**

El proyecto está compuesto por **tres plataformas complementarias** que interoperan mediante persistencia en cliente (`localStorage`), integrando la experiencia del tutor, la comodidad móvil y la operación backoffice integral para el equipo de cuidadores, veterinarios y choferes.

---

## 📑 Tabla de Contenidos

- [🏛️ Visión General del Ecosistema](#️-visión-general-del-ecosistema)
- [📦 Estructura del Repositorio](#-estructura-del-repositorio)
- [💻 Aplicación 1: PetCare Web (Portal & Dashboard)](#-aplicación-1-petcare-web-portal--dashboard)
- [📱 Aplicación 2: PetCare Mobile (Customer Portal SPA)](#-aplicación-2-petcare-mobile-customer-portal-spa)
- [🏢 Aplicación 3: PetCare Work (Backoffice & ERP Multi-Rol)](#-aplicación-3-petcare-work-backoffice--erp-multi-rol)
- [🚀 Guía de Instalación y Ejecución](#-guía-de-instalación-y-ejecución)
  - [Prerrequisitos](#prerrequisitos)
  - [Opción A: Uso Directo (Plug & Play)](#opción-a-uso-directo-plug--play)
  - [Opción B: Servidor Local con Python](#opción-b-servidor-local-con-python)
  - [Opción C: Servidor Local con Node.js / NPX](#opción-c-servidor-local-con-nodejs--npx)
  - [Opción D: Extensión VS Code (Live Server)](#opción-d-extensión-vs-code-live-server)
- [🔑 Roles y Credenciales de Demostración](#-roles-y-credenciales-de-demostración)
- [🎨 Sistema de Diseño & UI Standards](#-sistema-de-diseño--ui-standards)
- [📄 Licencia & Créditos](#-licencia--créditos)

---

## 🏛️ Visión General del Ecosistema

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PETCARE JUJUY ECOSYSTEM                         │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   PetCare Web    │      │  PetCare Mobile  │      │   PetCare Work   │
│  Landing & Dash  │      │   Customer App   │      │  Backoffice ERP  │
├──────────────────┤      ├──────────────────┤      ├──────────────────┤
│ • Landing 1440px │      │ • Formato 393px  │      │ • Control cupos  │
│ • Gating Planes  │      │ • SPA por vistas │      │ • CRM Mascotas   │
│ • Carnet Digital │      │ • Dynamic Island │      │ • Huellitas GPS  │
│ • PetCam HD      │      │ • Detección IA   │      │ • Convenios B2B  │
│ • Huellitas Expr │      │ • Libreta Salud  │      │ • SCM / Depósito │
└────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
         │                         │                         │
         └─────────────────────────┴─────────────────────────┘
                                   │
                         [ localStorage DB ]
                 (Sincronización de Sesión & Planes)
```

---

## 📦 Estructura del Repositorio

```bash
petcare-jujuy/
│
├── PetCare web/                 # Aplicación Web Desktop / Responsive
│   ├── index.html               # Landing page institucional + Registro modal
│   ├── dashboard.html           # Panel del cliente con gating según plan contratado
│   └── logo-petcare.jpg         # Isologotipo oficial de la marca
│
├── PetCare Mobile/              # Aplicación Web Nativa para Smartphones (SPA)
│   ├── index.html               # Single Page Application móvil (393 x 852 px)
│   └── README.md                # Documentación específica del cliente móvil
│
├── PetCare Work/                # Backoffice ERP y Consola de Operaciones
│   ├── index.html               # Entrada y redirección a login/dashboard
│   ├── backoffice_desktop.html  # Panel operativo central (1440 x 900 px)
│   ├── administracion.html      # Módulo administrativo y métricas
│   ├── panel_admin.html         # Panel maestro para jefes de área
│   ├── panel_cuidador.html      # Interfaz táctil para cuidadores en patio
│   ├── panel_chofer.html        # App operativa de ruta para chofer de combi
│   ├── huellitas_express.html   # Monitoreo satelital de transportes
│   ├── petcam_live.html         # Switcher y control de cámaras en directo
│   ├── salud_mascota.html       # Fichas clínicas y control veterinario
│   ├── finanzas.html            # Facturación, convenios B2B y aranceles
│   ├── carnet_amigo.html        # Validador de credenciales y lector QR
│   ├── auth_db.js               # Simulación de autenticación y base de usuarios
│   ├── app.js                   # Lógica reactiva de backoffice
│   ├── styles.css               # Hoja de estilos principal del ERP
│   └── mobile.css               # Adaptaciones para tabletas y dispositivos móviles
│
└── README.md                    # Documentación general del repositorio
```

---

## 💻 Aplicación 1: PetCare Web (Portal & Dashboard)

Sitio web corporativo y panel de autogestión para clientes.

### Características Principales:
- **Diseño Corporativo Minimalista:** Basado en una estricta paleta de 3 colores (Blanco/Gris neutro `#F8FAFC`, Pizarra oscura `#0F172A` y Naranja sólido `#EA580C`), sin degradados artificiales ni estilos genéricos.
- **Landing Page Inmersiva (100vh):** Con carrusel de instalaciones, calculadora de convenios empresariales (20% OFF con Telecom, Ledesma, Macro, etc.) y banners de nutrición oficial con Purina® Pro Plan® y Royal Canin®.
- **Modal de Registro Inteligente:** Intercepta el alta, genera un identificador único (ej: `#JUY-4819-TOB`), almacena la sesión en `localStorage` y redirige al panel.
- **Dashboard con Feature Gating por Plan:**
  - **☀️ Pase Diario:** Permite check-in para el día. Mantiene bloqueado el streaming de PetCam Live (con overlay explicativo de upgrade) y desactiva el servicio de traslado indicando entrega presencial.
  - **🚐 Huellitas Express:** Habilita el mapa satelital de San Salvador de Jujuy, chofer asignado y actualización de domicilio puerta a puerta en tiempo real.
  - **🏆 Abono Mensual Full:** Desbloquea las 3 cámaras en vivo (Patio, Juegos, Caniles), capturador de fotos flash, casillero fijo #14 y los 4 beneficios nutricionales y clínicos.
- **Barra de Demostración Rápida:** Switcher superior en `dashboard.html` para alternar entre planes en 1 clic y verificar el comportamiento reactivo de la interfaz.

---

## 📱 Aplicación 2: PetCare Mobile (Customer Portal SPA)

Diseñada bajo el concepto **Mobile-First SPA** (optimizado para pantallas de 393x852 px como iPhone 15/16 Pro o Android).

### Características Principales:
- **Navegación Fluida por Vistas Nativas:** Eliminación del scroll largo; navegación instantánea entre vistas (`view-auth`, `view-dashboard`, `view-petcam`, `view-huellitas`, `view-profile`).
- **Dynamic Island & Estado en Vivo:** Notificación superior flotante simulando el estado actual de la mascota en guardería (ej: *"Toby jugando en el Patio Verde"*).
- **PetCam Live Streaming:** Simulador de transmisión continua con 3 ángulos de cámara, tag de transmisión `EN VIVO`, indicador de calidad HD y obturador fotográfico para descargar recuerdos.
- **Logística GPS Huellitas Express:** Mapa estilizado de los barrios de Jujuy (Los Perales, Centro Plaza Belgrano, Alto La Viña, Río Xibi Xibi) con tracking animado de la combi y hora estimada de llegada.
- **Ficha Médica & CRM del Tutor:** Libreta sanitaria digital, registro de vacunas (Rabia y Séxtuple), control de peso, medicación requerida y código QR escaneable al ingreso.

---

## 🏢 Aplicación 3: PetCare Work (Backoffice & ERP Multi-Rol)

Sistema de gestión operativa para computadoras de recepción (1440x900 px), tablets de cuidadores y teléfonos de choferes.

### Módulos Incluidos:
1. **Control de Admisión & Turnos (TPS Operativo):** Grilla en tiempo real de huéspedes caninos, asignación de casilleros, horarios de alimentación especial y registro de check-in / check-out.
2. **Consola Multi-Rol:**
   - **Administración & Dirección:** Métricas de ocupación (ej. 24/30 cupos), facturación y altas de convenios B2B.
   - **Cuidadores de Patio:** Vista táctil para registrar almuerzos servidos, incidentes y fotografías de reporte diario.
   - **Chofer de Huellitas:** Lista de paradas matutinas y vespertinas con botón de *"Mascota a Bordo"* y geolocalización.
3. **Gestión de Insumos & Depósito (SCM):** Alertas de stock crítico de balanceado y generación automática de Órdenes de Compra a distribuidores mayoristas.
4. **Convenios Corporativos B2B:** Directorio de empresas asociadas con cupos bonificados para sus empleados.

---

## 🚀 Guía de Instalación y Ejecución

Las aplicaciones están construidas con tecnologías web estándar (**HTML5 semántico, CSS3 moderno, Tailwind CSS y JavaScript Vanilla ECMAScript 6+**). **No requieren compilación previa, bundlers pesados ni configuración de bases de datos complejas.**

### Prerrequisitos

Solo necesitas tener instalado un navegador web moderno:
- Google Chrome (versión 90+)
- Mozilla Firefox (versión 88+)
- Safari (versión 14+)
- Microsoft Edge (versión 90+)

---

### Opción A: Uso Directo (Plug & Play)

Es la forma más rápida de probar el sistema:

1. Clona o descarga el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/petcare-jujuy.git
   cd petcare-jujuy
   ```
2. Abre cualquier módulo directamente en tu navegador:
   - **Portal Web & Dashboard:**
     ```bash
     # Linux
     xdg-open "PetCare web/index.html"
     # macOS
     open "PetCare web/index.html"
     # Windows
     start "PetCare web/index.html"
     ```
   - **App Móvil:** Abre `"PetCare Mobile/index.html"` y presiona `F12` en tu navegador activando el *Modo Dispositivo Móvil* (393 x 852 px).
   - **Backoffice Operativo:** Abre `"PetCare Work/backoffice_desktop.html"` (resolución recomendada 1440 x 900 px).

---

### Opción B: Servidor Local con Python (Recomendado)

Para una experiencia óptima con manejo de rutas relativas y almacenamiento local:

1. Abre tu terminal en la raíz del proyecto:
   ```bash
   cd petcare-jujuy
   ```
2. Inicia un servidor HTTP ligero:
   ```bash
   # Con Python 3
   python3 -m http.server 8080
   ```
3. Accede desde tu navegador:
   - **Portal Web:** [http://localhost:8080/PetCare%20web/index.html](http://localhost:8080/PetCare%20web/index.html)
   - **Dashboard Directo:** [http://localhost:8080/PetCare%20web/dashboard.html](http://localhost:8080/PetCare%20web/dashboard.html)
   - **App Móvil:** [http://localhost:8080/PetCare%20Mobile/index.html](http://localhost:8080/PetCare%20Mobile/index.html)
   - **Backoffice ERP:** [http://localhost:8080/PetCare%20Work/backoffice_desktop.html](http://localhost:8080/PetCare%20Work/backoffice_desktop.html)

---

### Opción C: Servidor Local con Node.js / NPX

Si trabajas con el entorno de Node.js:

```bash
# Ejecutar sin necesidad de instalar globalmente
npx serve . -p 3000
```
Luego navega a `http://localhost:3000`.

---

### Opción D: Extensión VS Code (Live Server)

1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Instala la extensión **Live Server** (`ritwickdey.liveserver`).
3. Haz clic derecho sobre el archivo `index.html` de cualquiera de las 3 carpetas y selecciona **"Open with Live Server"**.

---

## 🔑 Roles y Credenciales de Demostración

El módulo **PetCare Work** cuenta con usuarios de prueba configurados en `auth_db.js` para validar los diferentes niveles de permisos:

| Rol | Usuario / Correo | Contraseña | Acceso Principal |
| :--- | :--- | :--- | :--- |
| **Administración General** | `admin@petcare.com` | `admin123` | Dashboard Ejecutivo, Finanzas y Convenios |
| **Recepción & Cuidado** | `cuidador@petcare.com` | `cuidado123` | Control de Ingresos, Dietas y Fichas Médicas |
| **Logística & Combi** | `chofer@petcare.com` | `chofer123` | Ruta Huellitas Express y Geolocalización |
| **Jefe de Patio** | `jefe@petcare.com` | `jefe123` | Control PetCam, Rutinas y Seguridad |

---

## 🎨 Sistema de Diseño & UI Standards

El proyecto implementa pautas de diseño modernas orientadas a productos SaaS:
- **Paleta de Colores Corporativa:**
  - `Neutro Canvas:` `#FFFFFF` y `#F8FAFC`
  - `Bordes & Estructura:` `#E2E8F0` / `#CBD5E1`
  - `Texto Principal:` `#0F172A` (Slate Deep de alto contraste)
  - `Acento Activo:` `#EA580C` (Naranja profesional sólido)
- **Tipografía:** [Inter](https://fonts.google.com/specimen/Inter) y [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) integradas vía Google Fonts.
- **Micro-interacciones:** Retroalimentación con banners interactivos, toasts de guardado y cambio dinámico entre cámaras simulando latencia real.

---

## 📄 Licencia & Créditos

Este software ha sido desarrollado como una solución integral para guarderías y hoteles caninos en la provincia de Jujuy, Argentina.

- **Diseño & Desarrollo:** Equipo PetCare Jujuy.
- **Licencia:** Distribuido bajo la Licencia [MIT](LICENSE). Siéntete libre de adaptarlo, bifurcarlo o utilizarlo en tus propios proyectos de cuidado de mascotas.
