/**
 * PetCare - PetWork Shared Navigation & Role Engine
 * Email Routing & Dynamic Panel Return
 */

// Route user based on employee email
function handleLoginWithEmail(email) {
  const cleanEmail = email.trim().toLowerCase();

  if (cleanEmail.includes('jefe')) {
    localStorage.setItem('petcare_role', 'jefe');
    localStorage.setItem('petcare_email', cleanEmail);
    localStorage.setItem('petcare_name', 'Dirección de Operaciones');
    window.location.href = 'panel_jefe.html';
    return true;
  }

  if (cleanEmail.includes('cuidador')) {
    localStorage.setItem('petcare_role', 'cuidador');
    localStorage.setItem('petcare_email', cleanEmail);
    localStorage.setItem('petcare_name', 'Equipo de Cuidadores & Salud');
    window.location.href = 'panel_cuidador.html';
    return true;
  }

  if (cleanEmail.includes('chofer')) {
    localStorage.setItem('petcare_role', 'chofer');
    localStorage.setItem('petcare_email', cleanEmail);
    localStorage.setItem('petcare_name', 'Chofer Huellitas Express');
    // Direct redirect to huellitas_express.html as requested
    window.location.href = 'huellitas_express.html';
    return true;
  }

  return false;
}

// Global "⬅ Volver al Panel" action
function goBackToPanel() {
  const role = localStorage.getItem('petcare_role');

  if (role === 'jefe') {
    window.location.href = 'panel_jefe.html';
  } else if (role === 'cuidador') {
    window.location.href = 'panel_cuidador.html';
  } else if (role === 'chofer') {
    window.location.href = 'huellitas_express.html';
  } else {
    window.location.href = 'index.html';
  }
}

// Global Logout
function logoutEmployee() {
  if (confirm('¿Deseas cerrar la sesión de empleado?')) {
    localStorage.removeItem('petcare_role');
    localStorage.removeItem('petcare_email');
    localStorage.removeItem('petcare_name');
    window.location.href = 'index.html';
  }
}

// Session check
function enforceAuth(requiredRole = null) {
  const currentRole = localStorage.getItem('petcare_role');
  if (!currentRole) {
    if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
      window.location.href = 'index.html';
    }
    return null;
  }
  return currentRole;
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup return buttons
  document.querySelectorAll('.btn-return-panel, [data-action="return-panel"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goBackToPanel();
    });
  });

  // Setup logout buttons
  document.querySelectorAll('.btn-logout-nav, [data-action="logout"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutEmployee();
    });
  });

  // Populate user badge if element exists
  const roleBadge = document.getElementById('navbarRoleBadge');
  if (roleBadge) {
    const role = localStorage.getItem('petcare_role') || 'Invitado';
    const email = localStorage.getItem('petcare_email') || '';
    roleBadge.textContent = `${role.toUpperCase()} • ${email || 'Turno Activo'}`;
  }
});
