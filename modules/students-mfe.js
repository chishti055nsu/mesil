/**
 * Micro-Frontend: Student Research Achievements & Alumni Placements Module
 * Appendix I from official proposal document
 */

import { MESIL_DATA } from '../js/mesil-data.js';

let studentFilterQuery = '';

export function mountStudentsMFE(targetElementId = 'mfe-students-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="students">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Appendix I // Human Capital & Outcomes</span>
      </div>
      <h2 class="academic-heading">Student Research Achievements & Global Alumni Placements</h2>
      <p class="academic-subheading">
        Alumni and researchers supervised by MESIL founding faculty now at top global institutions (UBC, Sheffield, Howard, Amazon, UIUC, etc.)
      </p>

      <div class="student-controls-bar">
        <div class="student-search-wrapper">
          <input type="text" id="student-search-input" class="student-search-box" placeholder="Search by student name, destination (UBC, Amazon, Sheffield...), supervisor, or paper topic...">
        </div>
        <div class="student-stats-summary">
          Total Documented Scholars: <strong>${MESIL_DATA.studentAchievements.length}</strong>
        </div>
      </div>

      <div class="table-container academic-card">
        <table class="academic-table" id="students-table">
          <thead>
            <tr>
              <th style="width: 20%;">Student & Prior Background</th>
              <th style="width: 32%;">Supervised Research Project & Impact</th>
              <th style="width: 20%;">Faculty Supervisor(s)</th>
              <th style="width: 28%;">Current Affiliation & Destination</th>
            </tr>
          </thead>
          <tbody id="students-table-body">
            <!-- Hydrated via function -->
          </tbody>
        </table>
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
  renderStudentsTable();

  // Attach search listener
  const searchInput = document.getElementById('student-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      studentFilterQuery = e.target.value.toLowerCase().trim();
      renderStudentsTable();
    });
  }
}

function renderStudentsTable() {
  const tbody = document.getElementById('students-table-body');
  if (!tbody) return;

  const filtered = MESIL_DATA.studentAchievements.filter(item => {
    if (!studentFilterQuery) return true;
    const searchTarget = `${item.student} ${item.degrees} ${item.project} ${item.supervisors} ${item.affiliation}`.toLowerCase();
    return searchTarget.includes(studentFilterQuery);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 32px; color: var(--text-muted);">
          No student records matching "${studentFilterQuery}".
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td>
        <div class="student-name-cell">
          <strong>${item.student}</strong>
          <div class="student-degree-text">${item.degrees}</div>
          <span class="role-pill">${item.roleAtMesil}</span>
        </div>
      </td>
      <td>
        <div class="student-project-text">${item.project}</div>
      </td>
      <td>
        <div class="supervisor-text">${item.supervisors}</div>
      </td>
      <td>
        <div class="affiliation-badge-wrapper">
          <span class="affiliation-highlight">${item.affiliation}</span>
        </div>
      </td>
    </tr>
  `).join('');
}
