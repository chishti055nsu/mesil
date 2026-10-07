/**
 * Micro-Frontend: Governance, Funding Strategy & Grants Module
 */

import { MESIL_DATA } from '../js/mesil-data.js';

export function mountGovernanceMFE(targetElementId = 'mfe-governance-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="governance">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Section 6.3 & 9 // Governance & Grants</span>
      </div>
      <h2 class="academic-heading">Governance Model & Strategic Funding Roadmap</h2>
      <p class="academic-subheading">
        Operational structure, seed fund utilization milestones, and external funding pathways
      </p>

      <div class="governance-grid">
        <!-- Governance Structure -->
        <div class="academic-card gov-card">
          <h3 class="card-section-title">6.3 Organizational Governance Model</h3>
          <div class="gov-step-box">
            <div class="gov-step-title">Directorship Appointment</div>
            <p class="gov-step-desc">${MESIL_DATA.governance.directorRequirement}</p>
          </div>
          <div class="gov-step-box">
            <div class="gov-step-title">Management Faculty Team</div>
            <p class="gov-step-desc">${MESIL_DATA.governance.managementRoles}</p>
          </div>
          <div class="gov-step-box">
            <div class="gov-step-title">Research Assistants (RAs) & Support Roles</div>
            <p class="gov-step-desc">${MESIL_DATA.governance.researchPersonnel}</p>
          </div>
        </div>

        <!-- Funding Strategy -->
        <div class="academic-card gov-card">
          <h3 class="card-section-title">9. Strategic Funding & External Grants</h3>
          
          <div class="grant-category-block">
            <div class="grant-head-tag">Institutional Seed Funding</div>
            <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 12px;">
              ${MESIL_DATA.fundingRoadmap.seedFund}
            </p>
          </div>

          <div class="grant-category-block">
            <div class="grant-head-tag">Industry Partnership Commitments</div>
            <ul class="academic-bullet-list">
              ${MESIL_DATA.fundingRoadmap.industryCommitments.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <div class="grant-category-block">
            <div class="grant-head-tag">Target External Grant Portfolio</div>
            <div class="grants-list-group">
              ${MESIL_DATA.fundingRoadmap.targetGrants.map(g => `
                <div class="grant-item-row">
                  <div class="grant-name-agency">
                    <strong>${g.name}</strong>
                    <span class="grant-sub">${g.agency || g.focus}</span>
                  </div>
                  <span class="grant-type-pill">${g.type}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="grant-category-block" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
            <div class="grant-head-tag">Long-Term Revenue & Sustainability Plan</div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              ${MESIL_DATA.fundingRoadmap.sustainability}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}
