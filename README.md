# Viraj Dharod — Personal Portfolio

A static one-page portfolio designed for GitHub Pages. No build step or framework is required.

## Publish with GitHub Pages

1. Create a new GitHub repository. For the cleanest URL, name it `<your-github-username>.github.io`.
2. Upload **all files in this folder** to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.

GitHub will publish the site at `https://<your-github-username>.github.io/`.

If you use a normal repository name such as `portfolio`, GitHub Pages can publish it under `https://<username>.github.io/portfolio/`. The included site uses relative paths, so it works in either setup.

## Files

- `index.html` — page content and section structure
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation and subtle scroll reveals
- `assets/Viraj_Dharod_Resume.pdf` — résumé linked from the hero section
- `assets/favicon.svg` — browser icon

## Easy edits

### Change text
Edit `index.html` in any text editor.

### Replace or update the résumé
Overwrite `assets/Viraj_Dharod_Resume.pdf` with the new PDF, keeping the same filename.

### Add a portrait
The current hero intentionally uses a custom abstract quantum/photonics visual, so the site is complete without a photo. If you want a portrait similar to the reference site, add your image to `assets/` and replace the `.hero-visual` block in `index.html` with an `<img>` tag, or ask ChatGPT to make the edit for you.

### Change colors
The main design tokens are at the top of `styles.css` under `:root`.

## Notes

- LinkedIn and Google Scholar URLs were pulled from the hyperlinks embedded in the provided résumé.
- Publication URLs were also pulled from the résumé where available.
- The site is plain HTML/CSS/JS, so it is easy to customize and has no dependency on a JavaScript framework.
