/**
 * Micro-Frontend: Faculty & Leadership Module
 * Encapsulated, independent component for MESIL Founding Faculty Team
 */

import { MESIL_DATA } from '../js/mesil-data.js';

export function mountFacultyMFE(targetElementId = 'mfe-faculty-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="faculty">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Section 5.1 // Faculty Leadership</span>
      </div>
      <h2 class="academic-heading">MESIL Founding Faculty Team</h2>
      <p class="academic-subheading">
        Department of Electrical and Computer Engineering (ECE), School of Engineering & Physical Sciences (SEPS), North South University
      </p>

      <div class="faculty-cards-grid">
        ${MESIL_DATA.faculty.map(fac => `
          <div class="academic-card faculty-card" id="fac-${fac.id}">
            <div class="card-top-bar">
              <span class="role-tag">${fac.role}</span>
              <span class="dept-tag">ECE • NSU</span>
            </div>
            <h3 class="faculty-title">${fac.name}</h3>
            <div class="faculty-designation">${fac.designation}</div>
            <div class="faculty-department">${fac.department}</div>
            <p class="faculty-bio-snippet">${fac.bio}</p>
            <div class="faculty-areas-list">
              <strong>Core Research Verticals:</strong>
              <div class="area-badges-group">
                ${fac.areas.map(area => `<span class="area-badge">${area}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}
