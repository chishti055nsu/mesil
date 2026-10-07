/**
 * Micro-Frontend: Ongoing Projects & Collaboration Ecosystem Module
 */

import { MESIL_DATA } from '../js/mesil-data.js';

export function mountProjectsMFE(targetElementId = 'mfe-projects-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="projects">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Section 5.3 & 5.4 // Projects & Linkages</span>
      </div>
      <h2 class="academic-heading">Ongoing Projects & Industrial Linkages</h2>
      <p class="academic-subheading">
        High-impact prototypes, automotive firmware, and real-time embedded systems actively under development
      </p>

      <div class="projects-grid">
        ${MESIL_DATA.ongoingProjects.map((proj, idx) => `
          <div class="academic-card project-card">
            <div class="project-header">
              <span class="project-num">Project 0${idx + 1}</span>
              <span class="partner-badge">${proj.partner}</span>
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-scope">${proj.scope}</p>
          </div>
        `).join('')}
      </div>

      <!-- Institutional Collaborations Breakdown -->
      <div class="collab-wrapper">
        <h3 class="subsection-title">Institutional & Industry Network</h3>
        
        <div class="collab-grid">
          <div class="academic-card collab-box">
            <h4 class="collab-box-title">Academic & University Partners</h4>
            <ul class="academic-bullet-list">
              ${MESIL_DATA.collaborations.universities.map(u => `<li>${u}</li>`).join('')}
            </ul>
          </div>

          <div class="academic-card collab-box">
            <h4 class="collab-box-title">Industry Partners & Semiconductor Stakeholders</h4>
            <ul class="academic-bullet-list">
              ${MESIL_DATA.collaborations.industry.map(i => `<li><strong>${i}</strong></li>`).join('')}
            </ul>
          </div>

          <div class="academic-card collab-box">
            <h4 class="collab-box-title">Collaborating Research Laboratories</h4>
            <ul class="academic-bullet-list">
              ${MESIL_DATA.collaborations.researchLabs.map(lab => `<li>${lab}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}
