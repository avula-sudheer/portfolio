# Portfolio Starter

This repository contains a minimal Next.js + TypeScript + Tailwind starter scaffolded for Sudheer.

Quick start

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Notes and next steps
- Move your resume PDF into `public/` as `resume.pdf` so it can be served at `/resume.pdf`.
- I attempted to extract text from `/Users/sudheer/Workspace/github/portfolio/Sudheer Avula.pdf` but the machine did not have `pdftotext` available. If you want me to auto-populate pages from your resume I can try again if you install `poppler` (provides `pdftotext`) or paste the resume text into the repo.
- To extract locally (macOS):

```bash
# install poppler if needed
brew install poppler

# convert PDF to text
pdftotext "Sudheer Avula.pdf" resume.txt
```

After extracting the text you can paste it into `content/resume.md` or tell me to proceed and I'll re-run extraction and populate the About/Projects/Resume pages.

Additional setup for features added by the scaffold

- MDX Blog: posts live in `content/blog/*.mdx`. An example post is included at `content/blog/example.mdx`.
- Formspree contact form: set a public environment variable with your Formspree form id in `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ID=yourFormspreeId
```

Then restart the dev server. The contact form uses client-side validation and submits to Formspree.

- Dark mode: toggle in the top-right will persist your preference in `localStorage`.

- To deploy to Vercel: connect this repo and set the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in Vercel settings.

Running Lighthouse locally
-------------------------
I can't run Lighthouse from this environment because it requires a local/headless Chrome instance. You can run a local Lighthouse audit by starting the dev server and running Lighthouse from Chrome or CLI:

```bash
# start the site locally
npm run dev

# then in another terminal (requires Chrome installed)
npx lighthouse http://localhost:3000 --view --chrome-flags="--headless"
```

Look at the top recommendations in the Lighthouse report (Performance, Accessibility, Best Practices). Common fixes include optimizing images, reducing unused JS, and adding meaningful ARIA labels; I've already applied several improvements (skip-link, main landmark, next/image usage, JSON-LD, meta tags).

