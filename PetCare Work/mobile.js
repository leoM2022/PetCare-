/**
 * PetCare - PetWork Mobile Shared JavaScript Engine
 * Multi-Page RBAC & Navigation Helper
 */

// --- Global Navigation Helper ---
function goBackByRole() {
  const role = localStorage.getItem('petcare_user_role');
  if (role === 'jefe') {
    window.location.href = 'panel_jefe.html';
  } else if (role === 'cuidador') {
    window.location.href = 'panel_cuidador.html';
  } else if (role === 'chofer') {
    window.location.href = 'panel_chofer.html';
  } else {
    window.location.href = 'index.html';
  }
}

// --- Session & Access Control Verification ---
function checkAuth(requiredRole = null) {
  const currentRole = localStorage.getItem('petcare_user_role');
  
  if (!currentRole) {
    // If not logged in and not on login page, redirect
    if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
      window.location.href = 'index.html';
    }
    return null;
  }

  // If a specific role is required and doesn't match
  if (requiredRole && currentRole !== requiredRole) {
    console.warn(`Acceso restringido: rol actual (${currentRole}) difiere del requerido (${requiredRole}).`);
  }

  return currentRole;
}

// --- Logout ---
function logoutUser() {
  if (confirm('¿Deseas cerrar tu sesión y finalizar el turno actual?')) {
    localStorage.removeItem('petcare_user_role');
    localStorage.removeItem('petcare_user_name');
    localStorage.removeItem('petcare_user_title');
    window.location.href = 'index.html';
  }
}

// --- Status Bar Clock & Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  // Update simulated status bar clock
  const clockEl = document.querySelector('.status-clock');
  if (clockEl) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}`;
  }

  // Display user badge if exists
  const userBadgeEl = document.getElementById('userRoleBadge');
  if (userBadgeEl) {
    const role = localStorage.getItem('petcare_user_role') || 'Invitado';
    const name = localStorage.getItem('petcare_user_name') || 'Personal';
    userBadgeEl.textContent = `${name} (${role.toUpperCase()})`;
  }

  // Setup Back buttons
  const backButtons = document.querySelectorAll('.btn-back, [data-go-back]');
  backButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goBackByRole();
    });
  });

  // Setup Logout buttons
  const logoutButtons = document.querySelectorAll('.btn-logout');
  logoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutUser();
    });
  });
});
