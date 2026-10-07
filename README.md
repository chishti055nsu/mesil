# MESIL - Materials & Energy Storage Innovation Lab
### Dynamic Webpage with Automated GitHub Pages Deployment (`github.io`)

A modern, high-performance, responsive academic & research laboratory website designed for **MESIL** (Materials & Energy Storage Innovation Lab).

---

## 🚀 Key Features

- **Automated GitHub Pages CI/CD**: Pre-configured with `.github/workflows/deploy.yml` for zero-touch deployment on git push.
- **Dynamic Content Store (`js/data.js`)**: Easily update publications, research thrusts, team members, facilities, and news in one clean file without writing raw HTML.
- **Interactive Publications Showcase**:
  - Live search by title, author, keyword, or journal.
  - Multi-tag category filters & year filters.
  - One-click BibTeX citation modal with instant clipboard copy & toast notifications.
  - Direct DOI links.
- **Light & Dark Theme Engine**: System-preference-aware with manual toggle, stored in `localStorage`, zero flash of unstyled content (FOUC).
- **Responsive & Accessible**: Fluid layout with mobile drawer navigation, accessible semantic HTML5, and glassmorphic micro-interactions.
- **GitHub Pages Ready**: Includes `.nojekyll`, fallback `404.html`, and dynamic repository URL auto-detection.

---

## 📁 Project Structure

```text
MESIL/
├── index.html                   # Main landing page
├── 404.html                     # Custom 404 page for GitHub Pages
├── .nojekyll                    # Prevents Jekyll processing on GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow for automated Pages deployment
├── css/
│   └── styles.css               # Design system, glassmorphism, animations, responsive rules
├── js/
│   ├── data.js                  # Central data store (Research, Pubs, Team, News, Equipment)
│   └── main.js                  # Dynamic controller, filters, clipboard, modals, theme engine
└── README.md                    # Documentation & deployment guide
```

---

## 🌐 Deploying to GitHub Pages (`username.github.io`)

Follow these simple steps to deploy your website live to GitHub:

### Step 1: Initialize Git and Commit

Open your terminal in this directory (`/Users/rafsanmallik/Desktop/MESIL`) and run:

```bash
git init
git add .
git commit -m "Initial commit of MESIL dynamic website"
```

### Step 2: Create a Repository on GitHub and Push

1. Go to [GitHub.com/new](https://github.com/new) and create a repository.
   - For a user/organization site, name it `<your-github-username>.github.io`.
   - For a project site, you can name it `MESIL` or any name you prefer.
2. Link your local repository and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings

1. On your GitHub repository page, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions**
4. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`. Within ~60 seconds, your website will be live at:
   - `https://<your-github-username>.github.io` (for user site)
   - or `https://<your-github-username>.github.io/<repo-name>` (for project site)

---

## 🛠 Local Development & Testing

To preview the website locally on your machine, simply run any static server:

```bash
# Using Python 3:
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## ✏️ How to Update Content

You don't need to touch complex HTML when you publish a new paper or welcome a new lab member!

Simply open `js/data.js` and add your new entry to the corresponding array:
- `LAB_DATA.publications` - Add new paper title, authors, DOI, and BibTeX.
- `LAB_DATA.teamMembers` - Add new students, postdocs, or alumni.
- `LAB_DATA.researchThrusts` - Edit research descriptions and tags.
- `LAB_DATA.news` - Add recent lab updates or grant announcements.

Save and push to GitHub, and your live site updates automatically!
