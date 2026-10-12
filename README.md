# MESIL - Microprocessor, Embedded Systems, and IoT Lab
### Department of Electrical and Computer Engineering (ECE)
### School of Engineering & Physical Sciences (SEPS), North South University
**Proposal Version: July, 2025**

---

## 🏛 Architecture: Micro-Frontends & Jamstack Composable

The web portal for **MESIL (North South University)** is architected using **Micro-Frontends** and **Jamstack & Composable Architecture**:

1. **Micro-Frontends (MFEs)**:
   - Each major proposal vertical is decoupled into its own independent, encapsulated micro-frontend module under [`modules/`](file:///Users/rafsanmallik/Desktop/MESIL/modules):
     - [`modules/faculty-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/faculty-mfe.js): Founding Faculty team profiles & credentials.
     - [`modules/research-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/research-mfe.js): 5 Research Pillars (MCU, ES, IoT, BC, DER), Multidisciplinary CEE/DPH initiatives, and UN SDGs (7, 9, 11, 13, 15).
     - [`modules/projects-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/projects-mfe.js): 7 Ongoing projects (Siliconova, Walton, NSL, Ulkasemi) and institutional networks.
     - [`modules/infrastructure-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/infrastructure-mfe.js): Table 6.1 (Available Resources) & Table 6.2 (Proposed Budget Breakdown - 3,168,000 BDT).
     - [`modules/students-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/students-mfe.js): Appendix I live searchable table of all 18 student researchers & alumni placements (UBC, Sheffield, Howard, Amazon, UIUC, etc.).
     - [`modules/governance-mfe.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/governance-mfe.js): Governance structure, NSU Seed fund roadmap, and national/international grants (NVIDIA SRC, USAID/Gates, JST, DAAD).
   - Coordinated by [`modules/core.js`](file:///Users/rafsanmallik/Desktop/MESIL/modules/core.js).

2. **Jamstack & Composable Design**:
   - Ultra-fast static delivery via GitHub Pages global CDN.
   - Clean data contract in [`js/mesil-data.js`](file:///Users/rafsanmallik/Desktop/MESIL/js/mesil-data.js) with semantic HTML hydration.
   - **Future-Proof**: Any section can either be dynamically populated or easily hardcoded directly into [`index.html`](file:///Users/rafsanmallik/Desktop/MESIL/index.html).
   - Zero immature icons or gaming widgets; purely elegant, formal academic university engineering style.
   - Prominently displays the official **MESIL logo** (`assets/mesil-logo.png`).

---

## 🚀 Live Local Preview

The development server is already active:
```bash
# Preview in your browser:
http://localhost:8000
```

---

## 🌐 Deploying to GitHub Pages (`github.io`)

Your local git repository is already initialized, tracked, and committed! To make it live:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name it `MESIL` or `<username>.github.io`.

2. **Push Code**:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Activate GitHub Pages**:
   - Go to repository **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Your site will deploy live at `https://<your-username>.github.io/<repo-name>` via [`.github/workflows/deploy.yml`](file:///Users/rafsanmallik/Desktop/MESIL/.github/workflows/deploy.yml)!
# mesil
