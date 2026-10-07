/**
 * Micro-Frontend: Infrastructure & Proposed Budget Module
 */

import { MESIL_DATA } from '../js/mesil-data.js';

export function mountInfrastructureMFE(targetElementId = 'mfe-infrastructure-mount') {
  const mountPoint = document.getElementById(targetElementId);
  if (!mountPoint) return;

  const html = `
    <div class="mfe-module-container" data-mfe="infrastructure">
      <div class="section-badge-wrapper">
        <span class="institutional-badge">Section 6 // Infrastructure & Budget</span>
      </div>
      <h2 class="academic-heading">Laboratory Infrastructure & Resources</h2>
      <p class="academic-subheading">
        Current hardware baseline and the proposed NSU seed fund resource allocation plan
      </p>

      <!-- Table 6.1: Available Resources -->
      <div class="table-container academic-card" style="margin-bottom: 36px;">
        <div class="table-header-bar">
          <div>
            <h3 class="table-title">Table 6.1: Current Available Resources & Inventory</h3>
            <p class="table-sub">Existing workstations, developer boards, and instrumentation accessible at NSU</p>
          </div>
        </div>

        <table class="academic-table">
          <thead>
            <tr>
              <th>Equipment / Resource Description</th>
              <th>Quantity</th>
              <th>Functional Category</th>
            </tr>
          </thead>
          <tbody>
            ${MESIL_DATA.availableResources.map(res => `
              <tr>
                <td><strong>${res.item}</strong></td>
                <td><span class="qty-pill">${res.quantity}</span></td>
                <td><span class="cat-pill">${res.category}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Table 6.2: Proposed Budget Breakdown -->
      <div class="table-container academic-card">
        <div class="table-header-bar">
          <div>
            <h3 class="table-title">Table 6.2: Proposed Budget Breakdown for Equipment & Personnel (BDT)</h3>
            <p class="table-sub">Targeted utilization of the requested North South University Seed Fund</p>
          </div>
          <div class="total-budget-badge">
            Total Seed Request: <strong>${MESIL_DATA.totalProposedBudget}</strong>
          </div>
        </div>

        <table class="academic-table">
          <thead>
            <tr>
              <th>Item / Expenditure Head</th>
              <th>Quantity / Duration</th>
              <th>Approx. Unit Price (BDT)</th>
              <th>Approx. Total Price (BDT)</th>
            </tr>
          </thead>
          <tbody>
            ${MESIL_DATA.proposedBudget.map(budget => `
              <tr>
                <td><strong>${budget.item}</strong></td>
                <td>${budget.quantity}</td>
                <td>${budget.unitPrice}</td>
                <td><span class="price-highlight">${budget.total}</span></td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr class="table-summary-row">
              <td colspan="3"><strong>Total Seed Budget (BDT)</strong></td>
              <td><strong class="total-amount">${MESIL_DATA.totalProposedBudget}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;

  mountPoint.innerHTML = html;
}
