/**
 * MESIL Core Micro-Frontend Orchestrator & Jamstack Composable Shell
 * Coordinates module hydration, dynamic events, and edge rendering
 */

import { mountFacultyMFE } from './faculty-mfe.js';
import { mountResearchMFE } from './research-mfe.js';
import { mountProjectsMFE } from './projects-mfe.js';
import { mountInfrastructureMFE } from './infrastructure-mfe.js';
import { mountStudentsMFE } from './students-mfe.js';
import { mountGovernanceMFE } from './governance-mfe.js';

class MicroFrontendApp {
  constructor() {
    this.modules = [
      { id: 'mfe-faculty-mount', mount: mountFacultyMFE, name: 'Faculty' },
      { id: 'mfe-research-mount', mount: mountResearchMFE, name: 'Research' },
      { id: 'mfe-projects-mount', mount: mountProjectsMFE, name: 'Projects' },
      { id: 'mfe-infrastructure-mount', mount: mountInfrastructureMFE, name: 'Infrastructure' },
      { id: 'mfe-students-mount', mount: mountStudentsMFE, name: 'Student Outcomes' },
      { id: 'mfe-governance-mount', mount: mountGovernanceMFE, name: 'Governance & Grants' }
    ];
  }

  init() {
    this.hydrateModules();
    this.setupThemeToggle();
    this.setupMobileNavigation();
    this.setupContactForm();
    this.setupSmoothScroll();
    this.detectGitHubEnvironment();
  }

  hydrateModules() {
    this.modules.forEach(mod => {
      try {
        mod.mount(mod.id);
      } catch (err) {
        console.error(`[MFE Hydration Error] Failed to mount ${mod.name}:`, err);
      }
    });
  }

  setupThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    const saved = localStorage.getItem('mesil-theme') || 'light'; // Default to pristine academic light theme or dark
    document.documentElement.setAttribute('data-theme', saved);

    if (btn) {
      btn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'light';
        const next = cur === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('mesil-theme', next);
      });
    }
  }

  setupMobileNavigation() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (!menuBtn || !drawer) return;

    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }

  setupContactForm() {
    const form = document.getElementById('academic-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value;
      const type = form.querySelector('[name="type"]').value;
      alert(`Thank you, ${name}. Your inquiry regarding "${type}" has been received by the MESIL administrative team.`);
      form.reset();
    });
  }

  setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#' || targetId === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  detectGitHubEnvironment() {
    const host = window.location.hostname;
    const badge = document.getElementById('repo-badge-text');
    if (badge && host.endsWith('github.io')) {
      const user = host.split('.')[0];
      badge.textContent = `${user}.github.io/MESIL`;
    }
  }
}

// Auto-boot when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new MicroFrontendApp();
  app.init();
});
