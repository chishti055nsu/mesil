/**
 * MESIL Optimized Tokenized Search Engine
 * Multi-token matching, tag filtering, and instant DOM updates
 */

export class StudentSearchEngine {
  constructor(data, tbodyElement, countElement) {
    this.data = data;
    this.tbody = tbodyElement;
    this.countElement = countElement;
    this.activeFilter = 'all';
    this.queryTokens = [];
  }

  setFilter(filterTag) {
    this.activeFilter = filterTag.toLowerCase();
    this.search(this.lastQuery || '');
  }

  search(rawQuery) {
    this.lastQuery = rawQuery;
    // Tokenize search query (split by whitespace, lowercase, eliminate empty)
    this.queryTokens = rawQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);

    const results = this.data.filter(item => {
      // 1. Tag / Category filter check
      if (this.activeFilter !== 'all') {
        const matchesTag = (item.tags || []).some(t => t.toLowerCase().includes(this.activeFilter)) ||
          item.affiliation.toLowerCase().includes(this.activeFilter) ||
          item.roleAtMesil.toLowerCase().includes(this.activeFilter);
        if (!matchesTag) return false;
      }

      // 2. Multi-token text search check
      if (this.queryTokens.length === 0) return true;

      // Target haystack of searchable fields
      const haystack = [
        item.student,
        item.degrees,
        item.project,
        item.supervisors,
        item.affiliation,
        item.roleAtMesil,
        ...(item.tags || [])
      ].join(' ').toLowerCase();

      // Every query token must match somewhere in haystack (AND condition)
      return this.queryTokens.every(token => haystack.includes(token));
    });

    this.render(results);
  }

  highlight(text) {
    if (!this.queryTokens.length || !text) return text;
    let safe = text;
    this.queryTokens.forEach(token => {
      if (token.length > 1) {
        const regex = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        safe = safe.replace(regex, '<mark class="search-match">$1</mark>');
      }
    });
    return safe;
  }

  render(results) {
    if (this.countElement) {
      this.countElement.textContent = results.length;
    }

    if (results.length === 0) {
      this.tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align: center; padding: 36px 16px; color: var(--text-dim);">
            No student research records found matching your query.
          </td>
        </tr>
      `;
      return;
    }

    this.tbody.innerHTML = results.map(item => `
      <tr>
        <td>
          <div class="student-name-cell">
            <strong>${this.highlight(item.student)}</strong>
            <div class="student-degree-text">${this.highlight(item.degrees)}</div>
            <span class="role-pill">${item.roleAtMesil}</span>
          </div>
        </td>
        <td>
          <div class="student-project-text">${this.highlight(item.project)}</div>
          <div class="student-tags-row">
            ${(item.tags || []).map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>
        </td>
        <td>
          <div class="supervisor-text">${this.highlight(item.supervisors)}</div>
        </td>
        <td>
          <div class="affiliation-badge-wrapper">
            <span class="affiliation-highlight">${this.highlight(item.affiliation)}</span>
          </div>
        </td>
      </tr>
    `).join('');
  }
}
