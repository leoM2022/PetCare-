# PetCare - PetWork Mobile 🐾
**Customer Portal para Guardería y Hotel de Mascotas en San Salvador de Jujuy, Argentina**

Prototipo interactivo en formato **Single Page Application (SPA)** con navegación por pantallas nativas, persistencia en `localStorage` y automatización logística de transporte.

---

## 📁 Archivos Incluidos en esta Carpeta

- **`index.html`**: Aplicación web completa y autónoma (HTML5, Tailwind CSS, JavaScript Vanilla).
- **`README.md`**: Guía técnica de uso y prueba de todas las funcionalidades.

---

## 📱 Características y Mejoras Implementadas

### 1. Navegación por Pantallas Reales (SPA Native Feel)
- Se eliminó completamente el desplazamiento por anclas / scroll largo.
- Cada pantalla es una vista independiente (`view-auth`, `view-dashboard`, `view-petcam`, `view-huellitas`, `view-profile`).
- Al presionar cualquier botón del **Bottom Navigation Bar** o botones de acción (`Ingresar a mi Dashboard`, `Crear Cuenta y Comenzar`, `Editar Ficha`), la vista anterior se oculta al 100% y se presenta la nueva pantalla con una transición suave.

### 2. Base de Datos Simulada en `localStorage` (Perfiles Dinámicos)
- Al registrar una nueva mascota desde la pestaña **Registrarse**, se almacenan en el navegador:
  - Nombre del Dueño
  - Teléfono / WhatsApp
  - Código Corporativo (`TELECOM20` con 20% OFF)
  - Nombre de la Mascota
  - Especie (`Perro` o `Gato`)
  - Raza y Edad
  - Cuidados especiales y alimentación
  - Plan Daycare (`Pase Diario` o `Abono Mensual Full`)
  - Servicio de Traslado puerta a puerta (`hasTransport: true/false`)
  - Foto de avatar
- Al ingresar, el **Dashboard**, el **Carnet Amigo Digital**, el **Dynamic Island** de iOS, la **PetCam** y **Mi Perfil** leen inmediatamente estos datos y renderizan la información de tu mascota personalizada, sustituyendo a Toby.
- Las modificaciones guardadas en **Mi Perfil** se sincronizan en tiempo real.

### 3. Automatización Inteligente de Huellitas Express (Sin botones demo manuales)
- La pantalla de logística GPS lee directamente si el usuario tiene contratado el servicio de traslado en su registro:
  - **Si lo tiene activo:** Muestra inmediatamente el mapa estilizado de San Salvador de Jujuy (B° Los Perales, Centro Plaza Belgrano, Alto La Viña, Bajo La Viña, Río Grande y Xibi Xibi), la combi animada en movimiento, el chofer Roberto y la hora estimada de llegada a tu domicilio.
  - **Si no lo tiene:** Oculta el mapa y presenta el banner de actualización *"Tu plan actual no incluye Huellitas Express"*.
  - Un botón permite sumar el servicio por $12.000, el cual actualiza el `localStorage` en un clic y revela el mapa GPS automáticamente.

### 4. Vistas Disponibles
1. **Inicio / Dashboard:** Carnet Amigo interactivo, código QR ampliable para recepción, estado en guardería y bitácora del día.
2. **PetCam Live 🔴:** Transmisión simulada HD con 3 ángulos de cámara (`Patio Principal`, `Caniles Siesta`, `Piscina/Parque`), detección por IA de tu mascota y captura de fotos.
3. **Huellitas GPS 🚐:** Mapa logístico en vivo y estado de la combi adaptado a tu plan.
4. **Mi Perfil / Ficha CRM:** Ficha médica completa, libreta sanitaria, medicación, temperamento y opción de cerrar sesión.

---

## 🚀 Cómo Abrir la Aplicación

Puedes abrir `index.html` haciendo doble clic desde el explorador de archivos o ejecutando en tu terminal:

```bash
xdg-open "/home/t1/Descargas/PetCare Mobile/index.html"
```
