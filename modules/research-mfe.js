/**
 * Micro-Frontend: Research Thrusts & Multidisciplinary Pillars Module
 */

import { MESIL_DATA } from '../js/mesil-data.js';

export function mountResearchMFE(targetElementId = 'mfe-research-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="research">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Section 4 // Research Objectives</span>
      </div>
      <h2 class="academic-heading">Core Objectives & Research Thrusts</h2>
      <p class="academic-subheading">
        Bridging Microprocessor Architecture, Embedded Firmware, Internet of Things, and Decentralized Networks
      </p>

      <!-- 5 Core Research Thrusts -->
      <div class="pillars-grid">
        ${MESIL_DATA.researchPillars.map(pillar => `
          <div class="academic-card pillar-card" id="pillar-${pillar.code.toLowerCase()}">
            <div class="pillar-code-banner">
              <span class="code-tag">${pillar.code}</span>
              <span class="pillar-category">Foundational Pillar</span>
            </div>
            <h3 class="pillar-title">${pillar.title}</h3>
            <p class="pillar-summary">${pillar.summary}</p>
            <div class="pillar-deliverables">
              <div class="deliverable-label">Key Thrust Deliverables:</div>
              <ul class="academic-bullet-list">
                ${pillar.deliverables.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Multidisciplinary Collaborations -->
      <div class="multidisciplinary-section">
        <h3 class="subsection-title">Multidisciplinary Collaborative Initiatives</h3>
        <p class="academic-subheading" style="margin-bottom: 24px;">
          Expanding impact beyond ECE into national environmental resilience and community healthcare diagnostics
        </p>

        <div class="multi-grid">
          ${MESIL_DATA.multidisciplinary.map(item => `
            <div class="academic-card multi-card">
              <div class="multi-dept-tag">${item.department}</div>
              <h4 class="multi-focus-title">${item.focus}</h4>
              <ul class="academic-bullet-list">
                ${item.projects.map(proj => `<li>${proj}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- UN SDGs Alignment -->
      <div class="sdg-section">
        <h3 class="subsection-title">United Nations Sustainable Development Goals (SDGs)</h3>
        <p class="academic-subheading" style="margin-bottom: 24px;">
          Strategic alignment of MESIL engineering research with global sustainability benchmarks
        </p>
        <div class="sdg-grid">
          ${MESIL_DATA.sdgAlignments.map(sdg => `
            <div class="sdg-card">
              <div class="sdg-number">SDG ${sdg.number}</div>
              <div class="sdg-name">${sdg.name}</div>
              <p class="sdg-impact">${sdg.impact}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}
