# Viraj Dharod — Personal Website

Static multi-page portfolio designed for GitHub Pages. No framework or build step is required.

## Site structure

- `index.html` — About page and landing page
- `experience.html` — Experience
- `research.html` — Research & Publications
- `education.html` — Education
- `contact.html` — Contact
- `blogs.html` — Blogs placeholder
- `styles.css` — Shared visual design
- `script.js` — Mobile navigation and portrait fallback
- `assets/Viraj_Dharod_Resume.pdf` — Résumé
- `assets/favicon.svg` — Browser icon

## Add your portrait

Put your portrait in the **repository root** (next to `index.html`) with either of these names:

- `self.png` — checked first
- `self.jpg` — used automatically if `self.png` is not found

A neutral placeholder appears if neither file exists.

## Publish with GitHub Pages

1. Create a GitHub repository. For a root personal site, name it `<your-github-username>.github.io`.
2. Upload all files in this folder to the repository root.
3. Commit and push to `main`.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.

The site uses relative links and also works from a project repository such as `https://<username>.github.io/portfolio/`.

Why does this need a commit to publish?