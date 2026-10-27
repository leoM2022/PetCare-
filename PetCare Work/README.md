# 🐾 PetCare Jujuy - PetWork Backoffice

> **Sistema Operativo & Administrativo Integral para Guardería, Hotel Canino y Beneficios Corporativos B2B**

Bienvenido a la consola central de **PetCare Jujuy - PetWork Backoffice**, diseñada específicamente para la resolución estándar de **1440x900 px** en computadoras de recepción, tablets operativas de cuidadores y estaciones administrativas de dirección.

---

## 🎨 Paleta de Colores & Diseño SaaS ERP

- **Acento Primario:** Naranja pastel cálido / Durazno suave (`#FB923C`, `#FDBA74`, fondo suave `#FFF7ED`, acento activo `#EA580C`).
- **Base & Tarjetas:** Blanco puro (`#FFFFFF`) con bordes sutiles grafito claro (`#E4E4E7`).
- **Fondo General:** Gris neutro pizarra de alta legibilidad (`#F8FAFC`).
- **Tipografía & Controles:** Grafito profundo / ónix (`#18181B`) para la barra lateral y los botones de acción primarios.
- **Píldoras de Estado Semánticas:**
  - 🟢 **Presente / Al día:** `#ECFDF5` / `#059669`
  - 🟡 **Atención Médica / Dieta:** `#FFFBEB` / `#B45309`
  - 🔴 **Stock Crítico / Alerta:** `#FEF2F2` / `#DC2626`

---

## 🖥️ Módulos & Componentes del Sistema

### 1. Barra Lateral de Navegación (Sidebar Grafito `#18181B`)
- **Logo Institucional:** Isotipo minimalista de huella con punto cálido naranja.
- **Identificación de Personal:** Perfil de *Recepción Central - Sofía M.* con badge *Turno Mañana* y estado online.
- **Accesos Principales:**
  - 📌 *Admisión & Check-in* (Activo)
  - 📋 *Fichas de Mascotas & CRM*
  - 🤝 *Convenios & Alianzas Corporativas*
  - 📦 *Insumos & Depósito (SCM)*
  - 🚐 *Huellitas Express (Rutas)*
- **Control de Cámaras:** Botón pulsante *🔴 Transmisión PetCam (Control de Salas)* con streaming simulado de Patio Central y Sala de Siesta.

### 2. Barra Superior de Control (Header Bar)
- **Título Operativo:** *Panel Operativo Diario - 23 de Octubre*.
- **Indicadores en Vivo:**
  - 🐕 Cupos ocupados: **24/30** con barra de llenado en tiempo real.
  - 🚐 Traslados Huellitas agendados para la tarde: **12**.
  - ⚠️ Alertas de cuidado activas: **3 especiales**.
- **Acción Rápida Principal:** Botón `[📷 Escanear QR Carnet Amigo]` con lector digital animado.

### 3. Área de Trabajo (Workspace)

#### Sección A: Control de Admisión & Turno de Cuidado (TPS Operativo)
- Grilla completa de mascotas ingresadas con buscador en tiempo real.
- **Fila destacada de Toby (Golden Retriever - 3 años):**
  - Tutor: Martín R. (Convenio: Telecom Jujuy).
  - Horario de ingreso: `08:15 hs ✅`.
  - Casillero asignado: `#14`.
  - Modalidad de salida: `Combi Huellitas (18:20 hs)`.
  - Ubicación: `En Patio Central`.
  - Alerta médica: `⚠️ Alimento propio 150g al mediodía`.
  - Botones funcionales: `[Ficha]`, `[Servir Almuerzo]`, `[Check-out]`.

#### Sección B: Ficha Detallada del Animal & Salud (CRM Drawer)
- Fotografía e información biométrica de la mascota seleccionada (Toby, 28 kg, Microchip `#9820003412`).
- Estado de sanidad: Vacuna antirrábica al día (vence Dic 2026 ✅) y desparasitación.
- Veterinario de cabecera: *Dra. Ramos (Clínica Jujuy Pet)* con acceso de llamada directa.
- Protocolo de comportamiento: *"Muy sociable con perros medianos. Evitar juegos bruscos con cachorros"*.
- Persona autorizada de retiro: *Hermana: Laura R. (DNI 35.xxx.xxx)*.

#### Sección C: Gestión de Alianzas y Beneficios (Convenios B2B)
- Métricas consolidadas: 6 convenios activos, 38 mascotas beneficiarias.
- Directorio de cuentas empresariales:
  - **Telecom Jujuy** (`CORP-JUJUY`, 20% OFF, 14 empleados).
  - **Banco Macro** (`MACRO-PET`, 15% OFF, 9 empleados).
  - **EJE SA** (`EJESA-CARE`, 15% OFF, 7 empleados).
  - **Cannava Jujuy**, **CPCE Jujuy**, etc.
- Botón `[+ Añadir Nuevo Convenio]` con formulario emergente.

#### Sección D: Control de Insumos & Depósito (SCM)
- Banner de stock crítico para balanceado canino adulto (42 kg restantes vs. 50 kg mínimo).
- Botón `[Generar Orden de Compra Automática]` que genera la orden `OC-2026-894` a *Distribuidora Norte* y reabastece 100 kg en el sistema.

### 4. Pie de Página del Sistema
- Estado: `🟢 Sistema en línea y sincronizado con App Móvil PetWork y Cámaras PetCam Live`.
- Información técnica de latencia y nodo de servidor.

---

## 🚀 Cómo Ejecutar la Aplicación

No requiere instalación de servidores ni dependencias. Simplemente abra `index.html` en cualquier navegador web moderno (Google Chrome, Firefox, Safari o Edge):

```bash
xdg-open "$HOME/Downloads/PetCare Work/index.html"
```
o haga doble clic sobre el archivo `index.html` en la carpeta **Descargas / PetCare Work**.
