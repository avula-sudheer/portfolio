# Portfolio Starter

Minimal Next.js + TypeScript + Tailwind starter for a personal portfolio.

Quick start

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Optional setup notes

- Resume: If you want a resume available at `/resume.pdf`, place a `resume.pdf` file in the `public/` directory.
- Blog: MDX posts live in `content/blog/*.mdx`. An example post is included at `content/blog/example.mdx`.
- Contact form: the project supports submitting contact requests; set a public Formspree ID in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID` if you use Formspree.
- Dark mode: preference is persisted in `localStorage` via the header toggle.
- Deployment: this site is compatible with Vercel — connect the repo and add any required environment variables in the Vercel dashboard.

Running Lighthouse locally
-------------------------
To run a Lighthouse audit locally:

```bash
# start the site locally
npm run dev

# run Lighthouse (requires Chrome)
npx lighthouse http://localhost:3000 --view --chrome-flags="--headless"
```

Common Lighthouse improvements include optimizing images, reducing unused JS, and improving accessibility. This starter includes several best-practice patterns (e.g. `next/image`, ARIA landmarks, and meta tags).

