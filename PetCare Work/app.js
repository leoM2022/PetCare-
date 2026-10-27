/**
 * PetCare Jujuy - PetWork Backoffice
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Data Store ---
  const petData = [
    {
      id: 'toby',
      name: 'Toby',
      breed: 'Golden Retriever',
      age: '3 años',
      weight: '28 kg',
      gender: 'Macho',
      microchip: '#9820003412',
      owner: 'Martín R.',
      company: 'Telecom Jujuy',
      corpCode: 'CORP-JUJUY',
      intakeTime: '08:15 hs ✅',
      locker: '#14',
      departureMode: 'Combi Huellitas (18:20 hs)',
      status: 'En Patio Central',
      statusClass: 'status-patio',
      medicalNote: '⚠️ Alimento propio 150g al mediodía',
      lunchServed: false,
      vaccineStatus: 'Vacuna Antirrábica al día (Vence: Dic 2026 ✅)',
      dewormed: 'Desparasitado (Oct 2026)',
      vet: 'Dra. Ramos (Clínica Jujuy Pet - Tel: 388-4223344)',
      vetPhone: '388-4223344',
      behavior: 'Muy sociable con perros medianos. Evitar juegos bruscos con cachorros.',
      authorizedContact: 'Hermana: Laura R.',
      authorizedDni: 'DNI 35.xxx.xxx',
      photoBg: '#FED7AA',
      photoEmoji: '🐕'
    },
    {
      id: 'luna',
      name: 'Luna',
      breed: 'Caniche Toy',
      age: '2 años',
      weight: '4.2 kg',
      gender: 'Hembra',
      microchip: '#9820005578',
      owner: 'Valeria C.',
      company: 'Banco Macro',
      corpCode: 'MACRO-PET',
      intakeTime: '08:40 hs ✅',
      locker: '#07',
      departureMode: 'Retiro presencial (17:00 hs)',
      status: 'En Sala de Descanso',
      statusClass: 'status-descanso',
      medicalNote: 'Medicamento gotas oftálmicas 14:00 hs',
      lunchServed: true,
      vaccineStatus: 'Sextuple & Antirrábica al día (Vence: Ago 2027 ✅)',
      dewormed: 'Desparasitada (Sep 2026)',
      vet: 'Dr. Morales (Veterinaria Belgrano - Tel: 388-4901234)',
      vetPhone: '388-4901234',
      behavior: 'Tranquila, prefiere estar en regazo o sillitas blandas. Timida con ruidos fuertes.',
      authorizedContact: 'Padre: Carlos C.',
      authorizedDni: 'DNI 17.xxx.xxx',
      photoBg: '#E0E7FF',
      photoEmoji: '🐩'
    },
    {
      id: 'rocco',
      name: 'Rocco',
      breed: 'Bulldog Francés',
      age: '4 años',
      weight: '12.5 kg',
      gender: 'Macho',
      microchip: '#9820008891',
      owner: 'Esteban F.',
      company: 'EJE SA',
      corpCode: 'EJESA-CARE',
      intakeTime: '09:05 hs ✅',
      locker: '#22',
      departureMode: 'Combi Huellitas (18:20 hs)',
      status: 'En Patio Central',
      statusClass: 'status-patio',
      medicalNote: 'Monitorear respiración si hay calor > 26°C',
      lunchServed: false,
      vaccineStatus: 'Esquema completo al día (Vence: Ene 2027 ✅)',
      dewormed: 'Desparasitado (Oct 2026)',
      vet: 'Dra. Tolaba (Centro Veterinario Alvear - Tel: 388-4112233)',
      vetPhone: '388-4112233',
      behavior: 'Enérgico, le gusta la pelota plástica. No dejar correr más de 15 min continuos.',
      authorizedContact: 'Esposa: Andrea P.',
      authorizedDni: 'DNI 37.xxx.xxx',
      photoBg: '#FCE7F3',
      photoEmoji: '🐶'
    },
    {
      id: 'mia',
      name: 'Mia',
      breed: 'Border Collie',
      age: '1 año',
      weight: '16.8 kg',
      gender: 'Hembra',
      microchip: '#9820009943',
      owner: 'Gonzalo S.',
      company: 'Telecom Jujuy',
      corpCode: 'CORP-JUJUY',
      intakeTime: '08:20 hs ✅',
      locker: '#03',
      departureMode: 'Retiro presencial (19:00 hs)',
      status: 'En Patio Central',
      statusClass: 'status-patio',
      medicalNote: 'Dieta hipercalórica cachorros activa',
      lunchServed: true,
      vaccineStatus: 'Plan anual completo (Vence: Nov 2026 ✅)',
      dewormed: 'Desparasitada (Oct 2026)',
      vet: 'Dra. Ramos (Clínica Jujuy Pet - Tel: 388-4223344)',
      vetPhone: '388-4223344',
      behavior: 'Alta destreza y agilidad. Excelente interacción en circuito de obstáculos.',
      authorizedContact: 'Hermano: Matías S.',
      authorizedDni: 'DNI 39.xxx.xxx',
      photoBg: '#D1FAE5',
      photoEmoji: '🐕‍🦺'
    }
  ];

  let corporateAccounts = [
    { name: 'Telecom Jujuy', code: 'CORP-JUJUY', discount: '20% OFF', activeEmployees: 14, billingStatus: 'Al día' },
    { name: 'Banco Macro', code: 'MACRO-PET', discount: '15% OFF', activeEmployees: 9, billingStatus: 'Al día' },
    { name: 'EJE SA', code: 'EJESA-CARE', discount: '15% OFF', activeEmployees: 7, billingStatus: 'Al día' },
    { name: 'Cannava Jujuy', code: 'CANNAVA-PET', discount: '20% OFF', activeEmployees: 5, billingStatus: 'Al día' },
    { name: 'Consejo Cs. Económicas', code: 'CPCEJ-BENEFIT', discount: '10% OFF', activeEmployees: 2, billingStatus: 'Al día' },
    { name: 'Colegio de Abogados Jujuy', code: 'ABOG-JUJ-CARE', discount: '10% OFF', activeEmployees: 1, billingStatus: 'Al día' }
  ];

  let selectedPetId = 'toby';
  let stockRemainingKg = 42;
  const stockMinKg = 50;

  // --- DOM Elements ---
  const petTableBody = document.getElementById('petTableBody');
  const crmContainer = document.getElementById('petCrmCard');
  const corpTableBody = document.getElementById('corpTableBody');
  const corpCountMetric = document.getElementById('corpCountMetric');
  const corpPetsMetric = document.getElementById('corpPetsMetric');
  const searchInput = document.getElementById('searchInput');

  // Inventory Elements
  const inventoryAlertText = document.getElementById('inventoryAlertText');
  const stockLevelFill = document.getElementById('stockLevelFill');
  const stockDetailSub = document.getElementById('stockDetailSub');
  const btnGeneratePo = document.getElementById('btnGeneratePo');

  // Modals
  const qrModal = document.getElementById('qrModal');
  const btnScanQr = document.getElementById('btnScanQr');
  const btnSimulateScan = document.getElementById('btnSimulateScan');
  const addCorpModal = document.getElementById('addCorpModal');
  const btnAddCorp = document.getElementById('btnAddCorp');
  const formAddCorp = document.getElementById('formAddCorp');
  const poModal = document.getElementById('poModal');
  const btnConfirmPo = document.getElementById('btnConfirmPo');
  const petcamModal = document.getElementById('petcamModal');
  const btnOpenPetcam = document.getElementById('btnOpenPetcam');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // --- Toast Function ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`;
      toast.style.borderLeftColor = '#10B981';
    } else if (type === 'alert') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
      toast.style.borderLeftColor = '#EF4444';
    } else {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FB923C" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
      toast.style.borderLeftColor = '#FB923C';
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // --- Render Pet Intake Table ---
  function renderPetTable(filterQuery = '') {
    petTableBody.innerHTML = '';

    const filtered = petData.filter(pet => {
      const q = filterQuery.toLowerCase();
      return pet.name.toLowerCase().includes(q) ||
             pet.owner.toLowerCase().includes(q) ||
             pet.company.toLowerCase().includes(q) ||
             pet.locker.toLowerCase().includes(q);
    });

    filtered.forEach(pet => {
      const tr = document.createElement('tr');
      tr.className = `pet-row ${pet.id === selectedPetId ? 'highlighted-row' : ''}`;
      tr.dataset.petId = pet.id;

      tr.innerHTML = `
        <td>
          <div class="pet-cell">
            <div class="pet-table-avatar" style="background-color: ${pet.photoBg}; display: flex; align-items: center; justify-content: center; font-size: 18px;">
              ${pet.photoEmoji}
            </div>
            <div>
              <div class="pet-name-title">${pet.name}</div>
              <div class="pet-breed-sub">${pet.breed} • ${pet.age}</div>
              <div class="medical-alert-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                ${pet.medicalNote}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="owner-name">${pet.owner}</div>
          <div class="owner-corp-badge">🏢 ${pet.company}</div>
        </td>
        <td>
          <span style="font-weight: 600; color: #1E293B;">${pet.intakeTime}</span>
        </td>
        <td>
          <span class="locker-badge">${pet.locker}</span>
        </td>
        <td>
          <div style="font-size: 11px; font-weight: 500; color: #334155;">${pet.departureMode}</div>
        </td>
        <td>
          <span class="status-pill ${pet.statusClass}">${pet.status}</span>
        </td>
        <td>
          <div class="action-buttons-group">
            <button class="btn-table-action btn-view-profile" title="Ver Ficha">Ficha</button>
            <button class="btn-table-action btn-lunch ${pet.lunchServed ? 'served' : ''}" data-action="lunch">
              ${pet.lunchServed ? 'Almuerzo Listo ✅' : 'Servir Almuerzo'}
            </button>
            <button class="btn-table-action btn-checkout" data-action="checkout">Check-out</button>
          </div>
        </td>
      `;

      // Row Selection
      tr.addEventListener('click', (e) => {
        if (e.target.closest('button')) return; // handled by button handler
        selectPet(pet.id);
      });

      // Actions
      const viewBtn = tr.querySelector('.btn-view-profile');
      viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectPet(pet.id);
        showToast(`Ficha completa de ${pet.name} cargada en panel lateral.`, 'info');
      });

      const lunchBtn = tr.querySelector('.btn-lunch');
      lunchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pet.lunchServed = !pet.lunchServed;
        if (pet.lunchServed) {
          showToast(`✅ Almuerzo servido y registrado para ${pet.name} (${pet.medicalNote}).`, 'success');
        } else {
          showToast(`Almuerzo de ${pet.name} reestablecido como pendiente.`, 'info');
        }
        renderPetTable(searchInput.value);
      });

      const checkoutBtn = tr.querySelector('.btn-checkout');
      checkoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const conf = confirm(`¿Confirmar Check-out de ${pet.name}?\nDueño: ${pet.owner} (${pet.company})\nSalida: ${pet.departureMode}`);
        if (conf) {
          pet.status = 'Egresado / Entregado';
          pet.statusClass = 'status-descanso';
          showToast(`🚪 Check-out completado para ${pet.name}. Aviso enviado a ${pet.owner}.`, 'success');
          renderPetTable(searchInput.value);
        }
      });

      petTableBody.appendChild(tr);
    });
  }

  // --- Select & Render CRM Card (Section B) ---
  function selectPet(petId) {
    selectedPetId = petId;
    const pet = petData.find(p => p.id === petId) || petData[0];

    // Highlight row
    document.querySelectorAll('.pet-row').forEach(row => {
      row.classList.toggle('highlighted-row', row.dataset.petId === petId);
    });

    crmContainer.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-title-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <div>
            <h3 class="card-title">Ficha Detallada del Animal & Salud</h3>
            <span class="card-subtitle">Expediente Clínico & Conductual CRM</span>
          </div>
        </div>
        <span class="status-pill ${pet.statusClass}">${pet.status}</span>
      </div>

      <div class="crm-header-banner">
        <div class="crm-photo-box" style="background-color: ${pet.photoBg};">
          <span style="font-size: 36px;">${pet.photoEmoji}</span>
        </div>
        <div class="crm-pet-main-info">
          <div class="crm-pet-name">
            ${pet.name}
            <span class="crm-pet-tag">${pet.gender}</span>
          </div>
          <div class="crm-pet-meta">
            <strong>${pet.breed}</strong> • ${pet.age} • Peso: <strong>${pet.weight}</strong>
          </div>
          <div class="crm-microchip">
            Microchip: ${pet.microchip}
          </div>
        </div>
      </div>

      <div class="crm-body">
        <!-- Sanidad -->
        <div class="crm-info-section">
          <div class="crm-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Sanidad & Vacunación
          </div>
          <div class="health-badge-row">
            <span class="health-pill ok">🛡️ ${pet.vaccineStatus}</span>
            <span class="health-pill dewormed">💊 ${pet.dewormed}</span>
          </div>
        </div>

        <!-- Veterinario de Cabecera -->
        <div class="crm-info-section">
          <div class="crm-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Veterinario de Cabecera
          </div>
          <div class="vet-contact-box">
            <span>${pet.vet}</span>
            <a href="tel:${pet.vetPhone}" class="vet-call-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Llamar
            </a>
          </div>
        </div>

        <!-- Comportamiento & Socialización -->
        <div class="crm-info-section">
          <div class="crm-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            Comportamiento & Socialización
          </div>
          <div class="behavior-note">
            "${pet.behavior}"
          </div>
        </div>

        <!-- Contacto Autorizado para Retiro -->
        <div class="crm-info-section">
          <div class="crm-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            Contacto Autorizado para Retiro
          </div>
          <div class="authorized-contact">
            <span><strong>${pet.authorizedContact}</strong></span>
            <span class="auth-dni">${pet.authorizedDni}</span>
          </div>
        </div>
      </div>

      <div class="crm-footer-actions">
        <button class="btn-crm-secondary" id="btnEditNotes">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Añadir Observación
        </button>
        <button class="btn-crm-secondary" id="btnPrintCard">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Imprimir Carnet
        </button>
      </div>
    `;

    // Inner listeners
    document.getElementById('btnEditNotes')?.addEventListener('click', () => {
      const nota = prompt(`Ingresar nueva observación clínica/conductual para ${pet.name}:`);
      if (nota) {
        pet.behavior = `${pet.behavior} [Nota: ${nota}]`;
        selectPet(pet.id);
        showToast(`Observación guardada en el legajo de ${pet.name}.`, 'success');
      }
    });

    document.getElementById('btnPrintCard')?.addEventListener('click', () => {
      showToast(`Generando carnet digital y pase de salida para ${pet.name}...`, 'info');
    });
  }

  // --- Render Corporate Module (Section C) ---
  function renderCorporateModule() {
    corpTableBody.innerHTML = '';

    corporateAccounts.forEach((corp, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${corp.name}</strong></td>
        <td><span class="corp-code">${corp.code}</span></td>
        <td><span class="discount-badge">${corp.discount}</span></td>
        <td><strong>${corp.activeEmployees}</strong> colaboradores</td>
        <td><span class="status-pill status-patio">${corp.billingStatus}</span></td>
      `;
      corpTableBody.appendChild(tr);
    });

    corpCountMetric.textContent = corporateAccounts.length;
    const totalRegisteredPets = corporateAccounts.reduce((acc, curr) => acc + curr.activeEmployees, 0);
    corpPetsMetric.textContent = totalRegisteredPets;
  }

  // --- Search Filter ---
  searchInput.addEventListener('input', (e) => {
    renderPetTable(e.target.value);
  });

  // --- Modal Open & Close Utilities ---
  function openModal(modal) {
    modal.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  document.querySelectorAll('.modal-close-btn, [data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal(e.target);
    }
  });

  // --- QR Scanner Trigger & Simulation ---
  btnScanQr.addEventListener('click', () => {
    openModal(qrModal);
  });

  btnSimulateScan.addEventListener('click', () => {
    btnSimulateScan.disabled = true;
    btnSimulateScan.textContent = 'Procesando lectura QR...';

    setTimeout(() => {
      closeModal(qrModal);
      btnSimulateScan.disabled = false;
      btnSimulateScan.textContent = 'Simular Lectura de Carnet Digital';
      selectPet('toby');
      showToast('¡QR Carnet Amigo verificado! Toby (Martín R. - Telecom Jujuy) validado.', 'success');
    }, 1200);
  });

  // --- Add Corporate Agreement ---
  btnAddCorp.addEventListener('click', () => {
    openModal(addCorpModal);
  });

  formAddCorp.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('corpNameInput').value.trim();
    const code = document.getElementById('corpCodeInput').value.trim().toUpperCase();
    const discount = document.getElementById('corpDiscountInput').value.trim();
    const employees = parseInt(document.getElementById('corpEmployeesInput').value.trim(), 10) || 1;

    if (!name || !code) return;

    corporateAccounts.push({
      name,
      code,
      discount: discount.includes('%') ? discount : `${discount}% OFF`,
      activeEmployees: employees,
      billingStatus: 'Al día'
    });

    renderCorporateModule();
    closeModal(addCorpModal);
    formAddCorp.reset();
    showToast(`Convenio corporativo con "${name}" añadido exitosamente.`, 'success');
  });

  // --- Generate Purchase Order (SCM) ---
  btnGeneratePo.addEventListener('click', () => {
    openModal(poModal);
  });

  btnConfirmPo.addEventListener('click', () => {
    stockRemainingKg += 100;
    
    // Update SCM bar
    stockLevelFill.style.width = '92%';
    stockLevelFill.style.backgroundColor = '#10B981';
    inventoryAlertText.innerHTML = `Stock de Balanceado Premium Adulto: <strong>${stockRemainingKg} kg</strong> disponibles -> <span style="color: #059669; font-weight:700;">🟢 Stock Óptimo y Reabastecido</span>`;
    stockDetailSub.textContent = `Última orden OC-2026-894 generada y transmitida a Distribuidora Norte hoy 09:30 hs.`;
    
    closeModal(poModal);
    showToast(`🛒 Orden #OC-2026-894 emitida con éxito a Distribuidora Norte (100 kg añadidos).`, 'success');
  });

  // --- PetCam Live Modal ---
  btnOpenPetcam.addEventListener('click', () => {
    openModal(petcamModal);
  });

  // --- Initial Render ---
  renderPetTable();
  selectPet(selectedPetId);
  renderCorporateModule();
});
