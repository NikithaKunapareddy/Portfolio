# Nikitha Kunapareddy — Portfolio

A personal portfolio built with Next.js (App Router), React and Tailwind CSS.

## Run it locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/            Next.js App Router pages, layout and global styles
components/     Section components (Hero, Experience, Projects, Hackathons, Skills, Contact)
public/         Static assets — profile.jpg and resume.pdf
```

## Customizing

- Edit the content arrays at the top of each file in `components/` to update
  text, projects or links.
- Colors and fonts are defined in `tailwind.config.ts` and loaded in
  `app/layout.tsx` (Fraunces for display type, IBM Plex Sans for body text).
- Replace `public/profile.jpg` and `public/resume.pdf` with updated files —
  keep the same filenames, or update the references in
  `components/Hero.tsx` and `components/Nav.tsx`.

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — push this folder to
a GitHub repo and import it, or run `npx vercel` from inside the folder.
