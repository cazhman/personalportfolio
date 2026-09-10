# Ezekiel "Mad" Evangelista — Portfolio

**Live site:** _add your `username.github.io/repo-name` link here once Pages is enabled_

A one-page personal portfolio built with semantic HTML and Bootstrap 5, covering About,
Skills, Projects/Accomplishments, and Contact.

## Before you publish — replace these placeholders

1. **Photo** — swap `assets/img/profile.jpg` for a real photo (keep the same filename, or
   update the `src` in `index.html`).
2. **LinkedIn link** — replace `https://www.linkedin.com/in/your-linkedin-handle` in both
   the Contact section and the footer of `index.html`.
3. **GitHub link** — replace `https://github.com/your-github-handle` in the footer.
4. **Project links** — each card in the Projects section has a placeholder `href="#"`.
   Point each one at the real file, repo, or Drive link for that project.
5. **Contact form** — it currently only shows a "message received" alert locally; it
   doesn't send anything. To make it functional without a backend, connect it to a free
   service like [Formspree](https://formspree.io/) (point the `<form>`'s `action` at your
   Formspree endpoint and remove the JS `preventDefault` demo logic in
   `assets/script.js`).

## Running it locally

No build step — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio structure"
# make 2+ more small commits as you customize content/photo/links
git branch -M main
git remote add origin https://github.com/your-github-handle/your-repo-name.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from branch → main /
(root)**. Your live URL will be:

```
https://your-github-handle.github.io/your-repo-name/
```

Add that link back into this README once it's live.

## Structure

```
.
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── script.js
    └── img/
        └── profile.jpg
```
