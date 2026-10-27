/**
 * PetCare - PetWork Database & Authentication Engine
 * Simulates Users & Pets Relational Database in localStorage
 */

const DB_USERS_KEY = 'petcare_users_db';
const DB_SESSION_KEY = 'petcare_active_session';
const DB_PETS_KEY = 'petcare_pets_db';

// 1. Initial Employee Users
const INITIAL_USERS = [
  {
    nombre: 'Sofía',
    apellido: 'Morales',
    direccion: 'Av. Fascio 740, San Salvador de Jujuy',
    email: 'jefe@petcare.com',
    password: '1234',
    rol: 'Jefe'
  },
  {
    nombre: 'Carolina',
    apellido: 'Gutiérrez',
    direccion: 'Belgrano 1120, San Salvador de Jujuy',
    email: 'admin@petcare.com',
    password: '1234',
    rol: 'Empleado Administrativo'
  },
  {
    nombre: 'Santiago',
    apellido: 'Ramos',
    direccion: 'Los Lapachos 320, B° Los Perales, Jujuy',
    email: 'cuidador@petcare.com',
    password: '1234',
    rol: 'Cuidador'
  },
  {
    nombre: 'Héctor',
    apellido: 'López',
    direccion: 'Av. Forestal 840, Alto Comedero, Jujuy',
    email: 'chofer@petcare.com',
    password: '1234',
    rol: 'Chofer'
  }
];

// 2. Pre-seeded Pets Database (Varied: Dogs and Cats)
const INITIAL_PETS = [
  {
    id: 'toby',
    nombre: 'Toby',
    especie: 'Perro',
    raza: 'Golden Retriever',
    edad: '3 años',
    peso: '28 kg',
    sexo: 'Macho',
    microchip: '#9820003412',
    tutor: 'Martín R.',
    empresa: 'Telecom Jujuy',
    convenio: '20% OFF (CORP-JUJUY)',
    ingreso: '08:15 hs',
    casillero: '#14',
    modalidadSalida: 'Combi Huellitas (18:20 hs)',
    estado: 'En Patio Central',
    alerta: '⚠️ Alimento propio 150g al mediodía',
    dietaTitle: '⚠️ Alimento Propio: 150g al Mediodía',
    dietaDesc: 'Ubicación: Ración pesada en Casillero #14. Traído por el tutor Martín R.',
    vacuna: '🛡️ Vacuna Antirrábica al día (Vence: Dic 2026 ✅)',
    vet: 'Dra. Ramos (Clínica Jujuy Pet - Tel: 388-4223344)',
    comportamiento: 'Muy sociable con perros medianos. Evitar juegos bruscos con cachorros pequeños. Excelente respuesta al llamado.',
    autorizado: 'Hermana: Laura R. (DNI 35.xxx.xxx)',
    avatarEmoji: '🐕',
    avatarBg: '#FED7AA'
  },
  {
    id: 'luna',
    nombre: 'Luna',
    especie: 'Gato',
    raza: 'Gato Siamés',
    edad: '2 años',
    peso: '3.8 kg',
    sexo: 'Hembra',
    microchip: '#9820005578',
    tutor: 'Valeria C.',
    empresa: 'Banco Macro Jujuy',
    convenio: '15% OFF (MACRO-PET)',
    ingreso: '08:40 hs',
    casillero: '#07',
    modalidadSalida: 'Retiro Presencial (17:00 hs)',
    estado: 'En Sala Felina Acústica',
    alerta: '💧 Gotas oftálmicas 14:00 hs',
    dietaTitle: '🥣 Royal Canin Feline Adult: 50g',
    dietaDesc: 'Ubicación: Casillero #07. Administrar con agua fresca de filtro. Bandeja con arena sanitaria aglomerante limpia.',
    vacuna: '🛡️ Triple Felina & Antirrábica al día (Vence: Ago 2027 ✅)',
    vet: 'Dr. Morales (Veterinaria Belgrano - Tel: 388-4901234)',
    comportamiento: 'Dócil y curiosa. Prefiere alturas y rascadores suaves. Evitar ruidos bruscos de perros.',
    autorizado: 'Padre: Carlos C. (DNI 17.xxx.xxx)',
    avatarEmoji: '🐱',
    avatarBg: '#E0E7FF'
  },
  {
    id: 'max',
    nombre: 'Max',
    especie: 'Perro',
    raza: 'Beagle',
    edad: '4 años',
    peso: '14.5 kg',
    sexo: 'Macho',
    microchip: '#9820008891',
    tutor: 'Esteban F.',
    empresa: 'EJE SA (Energía)',
    convenio: '15% OFF (EJESA-CARE)',
    ingreso: '09:05 hs',
    casillero: '#22',
    modalidadSalida: 'Combi Huellitas (19:15 hs)',
    estado: 'En Patio Central',
    alerta: '⚡ Monitoreo de Olfato en Patio',
    dietaTitle: '🥣 Alimento Control de Peso: 120g',
    dietaDesc: 'Ubicación: Casillero #22. Ración exacta para control de peso. Hidratación constante.',
    vacuna: '🛡️ Esquema Quíntuple completo (Vence: Ene 2027 ✅)',
    vet: 'Dra. Tolaba (Centro Veterinario Alvear - Tel: 388-4112233)',
    comportamiento: 'Enérgico y rastreador. No descuidar portones abiertos durante las sesiones de juego.',
    autorizado: 'Esposa: Andrea P. (DNI 37.xxx.xxx)',
    avatarEmoji: '🐶',
    avatarBg: '#FCE7F3'
  },
  {
    id: 'mia',
    nombre: 'Mia',
    especie: 'Gato',
    raza: 'Gato Persa',
    edad: '1 año',
    peso: '3.2 kg',
    sexo: 'Hembra',
    microchip: '#9820009943',
    tutor: 'Gonzalo S.',
    empresa: 'Telecom Jujuy',
    convenio: '20% OFF (CORP-JUJUY)',
    ingreso: '08:20 hs',
    casillero: '#03',
    modalidadSalida: 'Combi Huellitas (19:40 hs)',
    estado: 'En Sala Felina Acústica',
    alerta: '✨ Cepillado diario de pelaje',
    dietaTitle: '🥣 Alimento Húmedo Indoor & Hairball: 70g',
    dietaDesc: 'Ubicación: Casillero #03. Ración fraccionada en 2 tomas con plato cerámico higienizado.',
    vacuna: '🛡️ Plan Felino Anual al día (Vence: Nov 2026 ✅)',
    vet: 'Dra. Ramos (Clínica Jujuy Pet - Tel: 388-4223344)',
    comportamiento: 'Muy tranquila y de temperamento calmo. Le agrada dormir en cojines térmicos elevados.',
    autorizado: 'Hermano: Matías S. (DNI 39.xxx.xxx)',
    avatarEmoji: '🐈',
    avatarBg: '#D1FAE5'
  }
];

// Initialize Database in localStorage
function initDatabases() {
  if (!localStorage.getItem(DB_USERS_KEY)) {
    localStorage.setItem(DB_USERS_KEY, JSON.stringify(INITIAL_USERS));
  }
  // Initialize pets DB (updating or setting)
  if (!localStorage.getItem(DB_PETS_KEY)) {
    localStorage.setItem(DB_PETS_KEY, JSON.stringify(INITIAL_PETS));
  } else {
    // Check if pets DB has cats; if not, reseed
    try {
      const currentPets = JSON.parse(localStorage.getItem(DB_PETS_KEY));
      const hasCats = currentPets.some(p => p.especie === 'Gato');
      if (!hasCats) {
        localStorage.setItem(DB_PETS_KEY, JSON.stringify(INITIAL_PETS));
      }
    } catch(e) {
      localStorage.setItem(DB_PETS_KEY, JSON.stringify(INITIAL_PETS));
    }
  }
}

// User Retrieval
function getUsers() {
  initDatabases();
  try {
    return JSON.parse(localStorage.getItem(DB_USERS_KEY)) || INITIAL_USERS;
  } catch (e) {
    return INITIAL_USERS;
  }
}

// Pets Retrieval
function getPets() {
  initDatabases();
  try {
    return JSON.parse(localStorage.getItem(DB_PETS_KEY)) || INITIAL_PETS;
  } catch (e) {
    return INITIAL_PETS;
  }
}

// Register user
function registerUser(userData) {
  const users = getUsers();
  const cleanEmail = userData.email.trim().toLowerCase();

  const exists = users.some(u => u.email.toLowerCase() === cleanEmail);
  if (exists) {
    return { success: false, message: 'El correo electrónico ya se encuentra registrado.' };
  }

  const newUser = {
    nombre: userData.nombre.trim(),
    apellido: userData.apellido.trim(),
    direccion: userData.direccion.trim(),
    email: cleanEmail,
    password: userData.password,
    rol: userData.rol
  };

  users.push(newUser);
  localStorage.setItem(DB_USERS_KEY, JSON.stringify(users));
  return { success: true, user: newUser };
}

// Authenticate user
function loginUser(email, password) {
  const users = getUsers();
  const cleanEmail = email.trim().toLowerCase();

  const user = users.find(u => u.email.toLowerCase() === cleanEmail);
  if (!user) {
    return { success: false, message: 'Usuario no encontrado en la base de datos.' };
  }

  if (user.password !== password) {
    return { success: false, message: 'Contraseña incorrecta.' };
  }

  localStorage.setItem(DB_SESSION_KEY, JSON.stringify(user));
  return { success: true, user };
}

// Get active session
function getCurrentSession() {
  try {
    const session = localStorage.getItem(DB_SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch (e) {
    return null;
  }
}

// Route by role
function redirectByRole(rol) {
  switch (rol) {
    case 'Jefe':
      window.location.href = 'panel_jefe.html';
      break;
    case 'Empleado Administrativo':
      window.location.href = 'panel_admin.html';
      break;
    case 'Cuidador':
      window.location.href = 'salud_mascota.html';
      break;
    case 'Chofer':
      window.location.href = 'huellitas_express.html';
      break;
    default:
      window.location.href = 'index.html';
  }
}

// Return button logic
function goBackToPanel() {
  const session = getCurrentSession();
  if (!session) {
    window.location.href = 'index.html';
    return;
  }
  redirectByRole(session.rol);
}

// Logout
function logoutUser() {
  if (confirm('¿Deseas cerrar tu sesión activa y salir del sistema?')) {
    localStorage.removeItem(DB_SESSION_KEY);
    window.location.href = 'index.html';
  }
}

// Enforce active session
function enforceSession() {
  const session = getCurrentSession();
  const path = window.location.pathname;

  if (path.endsWith('index.html') || path.endsWith('registro.html') || path.endsWith('/')) {
    return;
  }

  if (!session) {
    alert('Acceso restringido: Debes iniciar sesión con tu cuenta de empleado.');
    window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initDatabases();
  enforceSession();

  const userBadge = document.getElementById('navbarUserBadge');
  const session = getCurrentSession();
  if (userBadge && session) {
    userBadge.textContent = `${session.nombre} ${session.apellido} (${session.rol.toUpperCase()})`;
  }

  document.querySelectorAll('.btn-return-panel, [data-action="return-panel"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goBackToPanel();
    });
  });

  document.querySelectorAll('.btn-logout-nav, [data-action="logout"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutUser();
    });
  });
});
