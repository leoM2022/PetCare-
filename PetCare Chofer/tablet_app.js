/**
 * PetCare Jujuy - Huellitas Express
 * Tablet Application Core Engine • Driver Console
 * Versión 3.0 • Sistema Operativo Logístico y Trazabilidad de Traslado
 */

const STORAGE_KEYS = {
  DRIVER_SESSION: 'petcare_driver_session',
  STOPS: 'petcare_driver_stops_v3',
  TABLET_FULLSCREEN: 'petcare_tablet_fullscreen'
};

// Conductor Oficial Habilitado
const AUTHORIZED_DRIVERS = [
  {
    email: 'chofer@petcare.com',
    password: '1234',
    pin: '1234',
    nombre: 'Héctor López',
    cargo: 'Conductor Profesional Logístico',
    unidad: 'Combi Huellitas 02',
    patente: 'AB 829 CD',
    licencia: 'D2 Profesional (Vence: Nov 2027)',
    telefono: '+54 9 388 512-3999',
    foto: 'HL'
  }
];

// Pasajeros Caninos y Felinos (Ciclo Logístico: Recibido / A Bordo / Entregado)
const DEFAULT_STOPS = [
  {
    id: 'stop-toby',
    petId: 'toby',
    nombre: 'Toby',
    especie: 'Perro',
    raza: 'Golden Retriever',
    edad: '3 años',
    emoji: '🐕',
    tutor: 'Martín R.',
    empresa: 'Telecom Jujuy (20% OFF)',
    telefono: '+54 9 388 512-3456',
    direccion: 'Calle La Posta 450, B° Los Perales',
    barrio: 'Los Perales',
    eta: '18:20 hs',
    tipoAsiento: 'Asiento 01 • Cinturón de Seguridad ISOFIX',
    isBehaviorCage: false,
    alertaMedica: '⚠️ Ración propia servida 12:30. Colocar correa reflectiva antes de descender.',
    temperamento: 'Dócil y sociable. Viaja sentado mirando por la ventana.',
    coords: [-24.1685, -65.3055],
    mapX: 380,
    mapY: 130,
    status: 'a_bordo', // 'esperando_retiro', 'a_bordo', 'entregado'
    proximaParada: true,
    qrCode: 'PETCARE-TOBY-9820003412',
    horaAbordaje: '17:45 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-luna',
    petId: 'luna',
    nombre: 'Luna',
    especie: 'Gato',
    raza: 'Siamés',
    edad: '2 años',
    emoji: '🐱',
    tutor: 'Valeria C.',
    empresa: 'Banco Macro (15% OFF)',
    telefono: '+54 9 388 422-1199',
    direccion: 'Av. Libertad 820, B° Ciudad de Nieva',
    barrio: 'Ciudad de Nieva',
    eta: '18:38 hs',
    tipoAsiento: 'Asiento 02 • Canil Térmico Acolchado',
    isBehaviorCage: false,
    alertaMedica: '💧 Gotas oftálmicas 14:00 hs. Entregar directamente en brazos de tutora.',
    temperamento: 'Tranquila dentro de su transportín acolchado.',
    coords: [-24.1798, -65.3120],
    mapX: 250,
    mapY: 210,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-LUNA-9820005578',
    horaAbordaje: '17:50 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-mia',
    petId: 'mia',
    nombre: 'Mía',
    especie: 'Perro',
    raza: 'Caniche Toy',
    edad: '4 años',
    emoji: '🐩',
    tutor: 'Florencia T.',
    empresa: 'CPCE Jujuy (Convenio)',
    telefono: '+54 9 388 456-7890',
    direccion: 'Las Delicias 180, B° Chijra',
    barrio: 'Chijra',
    eta: '18:52 hs',
    tipoAsiento: 'Asiento 04 • Butaca Elevada con Arnés',
    isBehaviorCage: false,
    alertaMedica: '🎀 Cuidado con el frío nocturno. Lleva chalequito polar colocado.',
    temperamento: 'Cariñosa, le gusta viajar asomada sobre su butaca acolchada.',
    coords: [-24.1740, -65.2950],
    mapX: 470,
    mapY: 175,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-MIA-9820006612',
    horaAbordaje: '17:52 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-rocco',
    petId: 'rocco',
    nombre: 'Rocco',
    especie: 'Perro',
    raza: 'Pastor Alemán',
    edad: '4 años',
    emoji: '🦮',
    tutor: 'Lic. Fernando B.',
    empresa: 'EJE SA (Convenio Corp)',
    telefono: '+54 9 388 498-7654',
    direccion: 'Av. Almirante Brown 1340, B° San Pedrito',
    barrio: 'San Pedrito',
    eta: '19:12 hs',
    tipoAsiento: 'Asiento 03 • Arnés Doble Anclaje',
    isBehaviorCage: false,
    alertaMedica: '🍖 Snack dental masticable entregado. Hidratación completa.',
    temperamento: 'Muy obediente, viaja recostado sobre el asiento trasero.',
    coords: [-24.2050, -65.2910],
    mapX: 320,
    mapY: 460,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-ROCCO-9820009941',
    horaAbordaje: '17:55 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-simon',
    petId: 'simon',
    nombre: 'Simón',
    especie: 'Gato',
    raza: 'Persa Blanco',
    edad: '3 años',
    emoji: '🐈',
    tutor: 'Rodrigo M.',
    empresa: 'Poder Judicial Jujuy',
    telefono: '+54 9 388 511-2233',
    direccion: 'Calle Santa Fe 420, B° Cuyaya',
    barrio: 'Cuyaya',
    eta: '19:28 hs',
    tipoAsiento: 'Canil 03 • Cabina Felina Climatizada',
    isBehaviorCage: false,
    alertaMedica: '🩺 Cepillado diario realizado. Sensible a movimientos bruscos.',
    temperamento: 'Duerme profundamente con la música relajante de la combi.',
    coords: [-24.1980, -65.3150],
    mapX: 200,
    mapY: 370,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-SIMON-9820004481',
    horaAbordaje: '17:58 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-thor',
    petId: 'thor',
    nombre: 'Thor',
    especie: 'Perro',
    raza: 'Mestizo de Fila',
    edad: '2 años y medio',
    emoji: '🐕‍🦺',
    tutor: 'Ing. Claudio P.',
    empresa: 'Cannava Jujuy (Plan Especial)',
    telefono: '+54 9 388 477-6655',
    direccion: 'Los Ceibos 310, B° Alto La Viña',
    barrio: 'Alto La Viña',
    eta: '19:45 hs',
    tipoAsiento: 'Jaula 01 • Sector Adaptación Conductual',
    isBehaviorCage: true,
    alertaMedica: '🛡️ Modificación de conducta por reactividad a motos y bocinas.',
    temperamento: 'Jaula reforzada con luz azul y feromonas. No abrir sin doble correa.',
    coords: [-24.1950, -65.2680],
    mapX: 680,
    mapY: 240,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-THOR-9820008821',
    horaAbordaje: '18:00 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-max',
    petId: 'max',
    nombre: 'Max',
    especie: 'Perro',
    raza: 'Border Collie',
    edad: '1 año y medio',
    emoji: '🐶',
    tutor: 'Dra. Marcela S.',
    empresa: 'Colegio Médico Jujuy',
    telefono: '+54 9 388 533-2211',
    direccion: 'Los Naranjos 145, B° Bajo La Viña',
    barrio: 'Bajo La Viña',
    eta: '20:05 hs',
    tipoAsiento: 'Jaula 02 • Sector Adaptación Conductual',
    isBehaviorCage: true,
    alertaMedica: '🎾 Ansiedad por separación en tratamiento. Juguete Kong con pasta dentro.',
    temperamento: 'Enérgico. La jaula fija evita que salte en las curvas de La Viña.',
    coords: [-24.2020, -65.2790],
    mapX: 630,
    mapY: 380,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-MAX-9820007733',
    horaAbordaje: '18:02 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  },
  {
    id: 'stop-bruno',
    petId: 'bruno',
    nombre: 'Bruno',
    especie: 'Perro',
    raza: 'Bulldog Francés',
    edad: '2 años',
    emoji: '🐾',
    tutor: 'Gonzalo V.',
    empresa: 'Ledesma SA Jujuy',
    telefono: '+54 9 388 433-4455',
    direccion: 'Av. Illia 240, B° Los Perales',
    barrio: 'Los Perales',
    eta: '20:20 hs',
    tipoAsiento: 'Asiento 05 • Arnés Antitracción Pecho',
    isBehaviorCage: false,
    alertaMedica: '💨 Raza braquicéfala: Mantener A/C a 21.5°C fijo. No agitar.',
    temperamento: 'Tranquilo y simpático, duerme roncando suavemente.',
    coords: [-24.1640, -65.3110],
    mapX: 330,
    mapY: 90,
    status: 'a_bordo',
    proximaParada: false,
    qrCode: 'PETCARE-BRUNO-9820001199',
    horaAbordaje: '18:04 hs',
    horaEntrega: null,
    firmaRecibido: true,
    firmaEntrega: null
  }
];

// Current Van Location
const CURRENT_VAN_LOCATION = {
  coords: [-24.1840, -65.3015],
  mapX: 350,
  mapY: 260,
  name: 'Combi Huellitas 02',
  tramo: 'Av. Fascio cruzando hacia Puente Gorriti',
  velocidad: '36 km/h'
};

// Auth Functions
function getActiveDriver() {
  const session = localStorage.getItem(STORAGE_KEYS.DRIVER_SESSION);
  if (!session) return null;
  try {
    return JSON.parse(session);
  } catch (e) {
    return null;
  }
}

function enforceDriverAuth() {
  const driver = getActiveDriver();
  const currentPath = window.location.pathname;
  const isLoginPage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath.split('/').pop() === '';

  if (!driver && !isLoginPage) {
    window.location.href = 'index.html';
    return null;
  }
  if (driver && isLoginPage) {
    window.location.href = 'ruta.html';
    return driver;
  }
  return driver;
}

function loginDriver(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  
  if (cleanEmail.includes('jefe') || cleanEmail.includes('admin') || cleanEmail.includes('cuidador')) {
    return {
      success: false,
      message: '⚠️ Acceso restringido: Esta tablet está montada en la cabina vehicular de la Combi 02. Solo el Chofer autorizado puede iniciar sesión.'
    };
  }

  const driver = AUTHORIZED_DRIVERS.find(d => d.email.toLowerCase() === cleanEmail && (d.password === password || d.pin === password));
  if (driver) {
    localStorage.setItem(STORAGE_KEYS.DRIVER_SESSION, JSON.stringify(driver));
    return { success: true, driver };
  }

  return {
    success: false,
    message: '❌ Credenciales incorrectas. Verifique correo institucional o PIN de chofer.'
  };
}

function logoutDriver() {
  if (confirm('¿Deseas bloquear la tablet y cerrar la sesión de chofer?')) {
    localStorage.removeItem(STORAGE_KEYS.DRIVER_SESSION);
    window.location.href = 'index.html';
  }
}

// Stops Management
function getDriverStops() {
  const stored = localStorage.getItem(STORAGE_KEYS.STOPS);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length >= 8) {
        return parsed;
      }
    } catch (e) {}
  }
  localStorage.setItem(STORAGE_KEYS.STOPS, JSON.stringify(DEFAULT_STOPS));
  return DEFAULT_STOPS;
}

function saveDriverStops(stops) {
  localStorage.setItem(STORAGE_KEYS.STOPS, JSON.stringify(stops));
}

// Registrar Recibido (Abordaje a Combi)
function registerPetBoarding(stopId, signatureData = 'firmado_digital') {
  const stops = getDriverStops();
  const now = new Date();
  const horaStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }) + ' hs';

  stops.forEach((s) => {
    if (s.id === stopId) {
      s.status = 'a_bordo';
      s.horaAbordaje = horaStr;
      s.firmaRecibido = signatureData;
    }
  });

  saveDriverStops(stops);
  return stops;
}

// Registrar Dejado (Entrega en Domicilio)
function registerPetDelivery(stopId, signatureData = 'firmado_digital') {
  const stops = getDriverStops();
  const now = new Date();
  const horaStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }) + ' hs';

  stops.forEach((s) => {
    if (s.id === stopId) {
      s.status = 'entregado';
      s.horaEntrega = horaStr;
      s.firmaEntrega = signatureData;
      s.proximaParada = false;
    }
  });

  // Promote next active stop
  const nextPending = stops.find((s) => s.status === 'a_bordo');
  if (nextPending) {
    nextPending.proximaParada = true;
  }

  saveDriverStops(stops);
  return stops;
}

function resetDriverStops() {
  localStorage.setItem(STORAGE_KEYS.STOPS, JSON.stringify(DEFAULT_STOPS));
  window.location.reload();
}

// Send WhatsApp / SMS Notification Helper
function sendArrivalNotice(petName, tutorName, phone) {
  // Play subtle chime
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
    g.gain.setValueAtTime(0.25, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch(e) {}

  showSystemNotification(
    `📱 Mensaje enviado al tutor de ${petName} (${phone})`,
    `"${petName} está llegando a su domicilio en la Combi Huellitas 02. Por favor aguardar en puerta."`
  );
}

// Dynamic Floating Toast Notification
function showSystemNotification(title, message) {
  let toast = document.getElementById('globalSystemToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalSystemToast';
    toast.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      max-width: 420px;
      background: #18181B;
      color: #FFFFFF;
      border: 1.5px solid #FB923C;
      border-radius: 14px;
      padding: 12px 16px;
      box-shadow: 0 14px 35px rgba(0,0,0,0.5);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 12px;
      animation: toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <strong style="color: #FB923C; font-size: 13px;">${title}</strong>
      <span style="font-size: 10px; color: #10B981; font-weight: 700;">ENVIADO ✓</span>
    </div>
    <div style="color: #E4E4E7; line-height: 1.4;">${message}</div>
  `;
  toast.style.display = 'flex';

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.style.display = 'none';
  }, 4200);
}

// Fullscreen & Mockup Toggle
function toggleTabletFullscreen() {
  const body = document.body;
  const isFull = body.classList.toggle('fullscreen-mode');
  localStorage.setItem(STORAGE_KEYS.TABLET_FULLSCREEN, isFull ? 'true' : 'false');
  const btn = document.getElementById('btnToggleFullscreen');
  if (btn) {
    btn.innerHTML = isFull 
      ? '<span>📱 Ver en Marco Tablet</span>' 
      : '<span>📺 Pantalla Completa</span>';
  }
}

function initFullscreenState() {
  const saved = localStorage.getItem(STORAGE_KEYS.TABLET_FULLSCREEN);
  if (saved === 'true') {
    document.body.classList.add('fullscreen-mode');
  }
  const btn = document.getElementById('btnToggleFullscreen');
  if (btn) {
    btn.innerHTML = document.body.classList.contains('fullscreen-mode')
      ? '<span>📱 Ver en Marco Tablet</span>' 
      : '<span>📺 Pantalla Completa</span>';
  }
}

// Live Clock for Status Bar
function startLiveClock() {
  function update() {
    const clockEl = document.getElementById('tabletClock');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }
  update();
  setInterval(update, 1000);
}

// Shared Document Initializer
document.addEventListener('DOMContentLoaded', () => {
  initFullscreenState();
  startLiveClock();

  const driver = getActiveDriver();
  const driverNameEl = document.getElementById('headerDriverName');
  const driverRoleEl = document.getElementById('headerDriverRole');
  const driverAvatarEl = document.getElementById('headerDriverAvatar');

  if (driver) {
    if (driverNameEl) driverNameEl.textContent = driver.nombre;
    if (driverRoleEl) driverRoleEl.textContent = `${driver.unidad} • Chofer Oficial`;
    if (driverAvatarEl) driverAvatarEl.textContent = driver.foto || 'HL';
  }

  document.querySelectorAll('[data-action="logout-driver"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutDriver();
    });
  });

  const toggleBtn = document.getElementById('btnToggleFullscreen');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTabletFullscreen);
  }
});
