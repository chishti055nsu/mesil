/**
 * MESIL - Materials & Energy Storage Innovation Lab
 * Core Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  renderHeroStats();
  renderResearchThrusts();
  renderPublications();
  initPublicationControls();
  renderTeam();
  initTeamTabs();
  renderFacilities();
  renderNews();
  initContactForm();
  initScrollSpy();
  detectGitHubRepo();
});

/* ==========================================================================
   Theme Management (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check stored theme or system preference
  const savedTheme = localStorage.getItem('mesil-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('mesil-theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('mesil-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.innerHTML = theme === 'dark'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close drawer when any mobile link is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   Hero Animated Counters
   ========================================================================== */
function renderHeroStats() {
  const statsContainer = document.getElementById('hero-stats-container');
  if (!statsContainer) return;

  statsContainer.innerHTML = LAB_DATA.info.stats.slice(0, 4).map(stat => `
    <div class="stat-item">
      <div class="stat-value" data-target="${stat.count}">${stat.count}${stat.suffix}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Research Thrusts
   ========================================================================== */
function getThrustIcon(iconName) {
  const icons = {
    'battery-charging': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1M6 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1M23 11v2M11 7l-3 5h4l-2 5"/></svg>`,
    'cpu': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    'atom': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/></svg>`,
    'microscope': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`
  };
  return icons[iconName] || icons['battery-charging'];
}

function renderResearchThrusts() {
  const container = document.getElementById('research-thrusts-container');
  if (!container) return;

  container.innerHTML = LAB_DATA.researchThrusts.map(thrust => `
    <article class="thrust-card" id="thrust-${thrust.id}">
      <div>
        <div class="thrust-card-header">
          <div class="thrust-icon-box">
            ${getThrustIcon(thrust.icon)}
          </div>
          <span class="keyword-tag" style="color: var(--accent-${thrust.color}); border-color: rgba(6, 182, 212, 0.3);">
            ${thrust.tag}
          </span>
        </div>
        <h3 class="thrust-card-title">${thrust.title}</h3>
        <p class="thrust-card-desc">${thrust.shortDesc}</p>
        <div class="thrust-keywords">
          ${thrust.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join('')}
        </div>
      </div>
      <div>
        <button class="thrust-card-action" onclick="openThrustModal('${thrust.id}')">
          Explore Thrust Details
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');
}

window.openThrustModal = function(thrustId) {
  const thrust = LAB_DATA.researchThrusts.find(t => t.id === thrustId);
  if (!thrust) return;

  const content = `
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
      <div class="thrust-icon-box" style="width: 46px; height: 46px;">
        ${getThrustIcon(thrust.icon)}
      </div>
      <div>
        <div class="section-tag" style="margin: 0;">${thrust.tag}</div>
        <h2 style="font-size: 1.6rem;">${thrust.title}</h2>
      </div>
    </div>
    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 24px;">
      ${thrust.fullDesc}
    </p>
    <h4 style="margin-bottom: 12px; font-size: 1.1rem;">Core Methodologies & Targets:</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;">
      ${thrust.keywords.map(k => `<span class="keyword-tag" style="background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan); font-size: 0.85rem; padding: 6px 14px;">${k}</span>`).join('')}
    </div>
    <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
      <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 6px;">Relevant Publications & Milestones</div>
      <p style="font-size: 0.88rem; color: var(--text-muted);">
        See our Publications section below filtered by <strong>${thrust.tag}</strong> for our published datasets, models, and architectures.
      </p>
    </div>
  `;
  showModal(content);
};

/* ==========================================================================
   Publications System
   ========================================================================== */
let activeCategoryFilter = 'all';
let activeYearFilter = 'all';
let searchQuery = '';

function initPublicationControls() {
  const searchInput = document.getElementById('pub-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPublications();
    });
  }

  const categoryBtns = document.querySelectorAll('.cat-filter-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.dataset.category;
      renderPublications();
    });
  });

  const yearBtns = document.querySelectorAll('.year-filter-btn');
  yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      yearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeYearFilter = btn.dataset.year;
      renderPublications();
    });
  });
}

function renderPublications() {
  const container = document.getElementById('publications-container');
  if (!container) return;

  const filtered = LAB_DATA.publications.filter(pub => {
    const matchesCategory = activeCategoryFilter === 'all' || pub.category === activeCategoryFilter;
    const matchesYear = activeYearFilter === 'all' || pub.year.toString() === activeYearFilter;
    
    const searchTarget = `${pub.title} ${pub.journal} ${pub.authors.join(' ')} ${pub.abstract}`.toLowerCase();
    const matchesSearch = !searchQuery || searchTarget.includes(searchQuery);

    return matchesCategory && matchesYear && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 20px; background: var(--bg-card); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 12px;">No publications found matching your filter criteria.</p>
        <button class="btn btn-outline btn-sm" onclick="resetPubFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pub => `
    <article class="pub-card" id="${pub.id}">
      <div class="pub-header">
        <div class="pub-meta-tags">
          <span class="pub-journal">${pub.journal}</span>
          <span class="pub-year">(${pub.year})</span>
          ${pub.volume ? `<span class="pub-year">Vol. ${pub.volume}</span>` : ''}
          ${pub.badge ? `<span class="badge-featured">${pub.badge}</span>` : ''}
        </div>
        <span class="keyword-tag">${getCategoryLabel(pub.category)}</span>
      </div>

      <h3 class="pub-title">${pub.title}</h3>

      <div class="pub-authors">
        ${formatAuthors(pub.authors)}
      </div>

      <div class="pub-abstract">
        ${pub.abstract}
      </div>

      <div class="pub-actions">
        <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          DOI: ${pub.doi}
        </a>
        <button class="btn btn-outline btn-sm" onclick="openBibtexModal('${pub.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Cite (BibTeX)
        </button>
      </div>
    </article>
  `).join('');
}

function formatAuthors(authors) {
  return authors.map(author => {
    if (author.includes('Mallik')) {
      return `<strong>${author}</strong>`;
    }
    return author;
  }).join(', ');
}

function getCategoryLabel(catId) {
  const map = {
    'solid-state': 'Solid-State Storage',
    'ai-materials': 'AI & Discovery',
    'electrocatalysis': 'Electrocatalysis',
    'operando': 'Operando Diagnostics'
  };
  return map[catId] || catId;
}

window.resetPubFilters = function() {
  activeCategoryFilter = 'all';
  activeYearFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('pub-search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
  document.querySelectorAll('.year-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.year === 'all'));
  renderPublications();
};

window.openBibtexModal = function(pubId) {
  const pub = LAB_DATA.publications.find(p => p.id === pubId);
  if (!pub) return;

  const content = `
    <h3 style="font-size: 1.4rem; margin-bottom: 12px;">BibTeX Citation</h3>
    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 14px;">
      Copy and paste this entry into your LaTeX bibliography file:
    </p>
    <div class="bibtex-code-box" id="bibtex-text">${escapeHtml(pub.bibtex)}</div>
    <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 18px;">
      <button class="btn btn-primary btn-sm" onclick="copyBibtexToClipboard('${pub.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
        Copy Citation
      </button>
    </div>
  `;
  showModal(content);
};

window.copyBibtexToClipboard = function(pubId) {
  const pub = LAB_DATA.publications.find(p => p.id === pubId);
  if (!pub) return;

  navigator.clipboard.writeText(pub.bibtex).then(() => {
    showToast('BibTeX citation copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy. Please manually select the text.');
  });
};

/* ==========================================================================
   Team Members System
   ========================================================================== */
let activeTeamRole = 'all';

function initTeamTabs() {
  const tabs = document.querySelectorAll('.team-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTeamRole = tab.dataset.role;
      renderTeam();
    });
  });
}

function renderTeam() {
  const container = document.getElementById('team-grid-container');
  if (!container) return;

  const filtered = LAB_DATA.teamMembers.filter(member => {
    return activeTeamRole === 'all' || member.role === activeTeamRole;
  });

  container.innerHTML = filtered.map(member => `
    <div class="team-card" id="${member.id}">
      <div class="team-avatar" style="background: linear-gradient(135deg, ${getAvatarColors(member.role)});">
        ${member.avatarInitials}
      </div>
      <h3 class="team-name">${member.name}</h3>
      <div class="team-role">${member.roleTitle}</div>
      <div class="team-degrees">${member.degrees}</div>
      <p class="team-research-focus">${member.researchFocus}</p>
      
      <div class="team-social-links">
        ${member.scholar ? `<a href="${member.scholar}" target="_blank" class="social-btn" title="Google Scholar" aria-label="Google Scholar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></a>` : ''}
        ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="social-btn" title="LinkedIn" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>` : ''}
        ${member.github ? `<a href="${member.github}" target="_blank" class="social-btn" title="GitHub" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>` : ''}
        <a href="mailto:${member.email}" class="social-btn" title="Email" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
    </div>
  `).join('');
}

function getAvatarColors(role) {
  switch (role) {
    case 'pi': return '#0284c7, #4338ca';
    case 'postdoc': return '#059669, #0d9488';
    case 'phd': return '#7c3aed, #4f46e5';
    case 'alumni': return '#475569, #334155';
    default: return '#0284c7, #06b6d4';
  }
}

/* ==========================================================================
   Facilities & Equipment
   ========================================================================== */
function renderFacilities() {
  const container = document.getElementById('facilities-container');
  if (!container) return;

  container.innerHTML = LAB_DATA.facilities.map(fac => `
    <div class="facility-card">
      <div class="facility-category">${fac.category}</div>
      <h3 class="facility-name">${fac.name}</h3>
      <p class="facility-desc">${fac.description}</p>
      <ul class="facility-specs-list">
        ${fac.specs.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ==========================================================================
   News & Announcements
   ========================================================================== */
function renderNews() {
  const container = document.getElementById('news-container');
  if (!container) return;

  container.innerHTML = LAB_DATA.news.map(item => `
    <article class="news-card">
      <div class="news-meta">
        <span class="news-date">${item.date}</span>
        <span class="news-tag">${item.tag}</span>
      </div>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-summary">${item.summary}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   Contact & Application Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('lab-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const inquiryType = form.querySelector('[name="inquiry_type"]').value;
    
    showToast(`Thank you, ${name}! Your inquiry regarding "${inquiryType}" has been logged.`);
    form.reset();
  });
}

/* ==========================================================================
   Modal Dialog Management
   ========================================================================== */
function showModal(htmlContent) {
  const overlay = document.getElementById('global-modal-overlay');
  const body = document.getElementById('global-modal-body');
  if (!overlay || !body) return;

  body.innerHTML = htmlContent;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeModal = function() {
  const overlay = document.getElementById('global-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// Close modal on click outside or escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeModal();
});

document.addEventListener('click', (e) => {
  const overlay = document.getElementById('global-modal-overlay');
  if (e.target === overlay) window.closeModal();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   ScrollSpy for Navigation Bar
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-item');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
  });
}

/* ==========================================================================
   GitHub Pages Automatic Repository Link Detection
   ========================================================================== */
function detectGitHubRepo() {
  const host = window.location.hostname;
  const path = window.location.pathname;

  // Check if hosted on github.io
  if (host.endsWith('github.io')) {
    const user = host.split('.')[0];
    const pathParts = path.split('/').filter(Boolean);
    const repo = pathParts.length > 0 ? pathParts[0] : `${user}.github.io`;
    const repoUrl = `https://github.com/${user}/${repo}`;

    const repoLinks = document.querySelectorAll('.dynamic-github-link');
    repoLinks.forEach(link => {
      link.href = repoUrl;
    });

    const repoDisplay = document.getElementById('github-repo-display');
    if (repoDisplay) {
      repoDisplay.textContent = `${user}/${repo}`;
    }
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
