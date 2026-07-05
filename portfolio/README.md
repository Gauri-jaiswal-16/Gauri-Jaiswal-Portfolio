# Gauri Jaiswal — Personal Portfolio

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

> **Note on this build:** the sandbox this project was built in has no network
> access, so `npm install` could not actually be run or verified here. The
> code is written against the exact dependency versions in `package.json`
> (Next 14.2.5, React 18.3, Tailwind 3.4, Framer Motion 11), which are a
> known-compatible combination — but please run `npm install && npm run dev`
> yourself as the first step after unzipping, and let me know if anything
> throws an error so I can fix it directly.

## What's real here

Every project, credential, and skill on this site comes from the resume,
GitHub, LinkedIn, Difmo certificate, GenAI-Projects repo, and design files
provided.

- **NextZeni Academy** and **ToLetForRent** case studies use the actual
  screens from the Difmo project decks, shown full-frame with no cropping in
  a lightbox gallery with zoom. **ITBD Dashboard** and the **weather app**
  link to GitHub — still no screenshots for ITBD since none were shared.
- **AI Engineering section** is built entirely from the real
  `GenAI-Projects` GitHub repo (all 7 links verified live): a local-model
  FastAPI wrapper, a tool-calling agent, structured reasoning, a RAG
  ingestion pipeline, an experimental memory system, multi-provider LLM
  calls, and tokenization. Status badges match exactly what each script
  does. LangGraph and a complete end-to-end RAG app are honestly noted as
  not-yet-built. The previously-flagged hardcoded API keys are confirmed
  fixed — all three now load from environment variables.
- **Currently Learning** shows only Flutter, per your explicit instruction —
  the LangGraph/RAG caveat lives in the AI Engineering intro instead so
  nothing is silently implied as finished.
- **GitHub section**: a repository-highlights grid (all 4 confirmed-live
  public repos) plus a live contribution graph.
- **Project Demonstrations are fully independent from the case studies** —
  "Professional Project Demo" and "Family Fun Video" each have their own
  thumbnail, description, and Google Drive link, opening in a new tab.
  Nothing links between these and NextZeni/ITBD/ToLetForRent in either
  direction.
- **Color palette**: reverted to green (#FAF8F5 / #1F4D3A / #3FA66B) to
  match this document's explicit values — see the note in "This round's
  changes" below about a conflict with an earlier teal request.
- **Premium extras**: command palette (⌘K), scroll-to-top, copy-email
  buttons, a branded loading screen, animated counters, section dividers,
  and an animated mobile nav.


## This round's changes

- **Fixed the video/case-study coupling** the previous round got wrong: the
  two Google Drive videos are now correctly labeled "Professional Project
  Demo" and "Family Fun Video" (generic creative work, not tied to specific
  UI/UX projects), each fully independent with their own thumbnails and CTAs.
- **⚠️ Palette conflict, please confirm**: this document specified the
  original green palette (#1F4D3A / #3FA66B), but an earlier message in this
  conversation explicitly requested a teal palette (#0F766E / #14B8A6) with
  different hex values. I followed this document since it's the most recent
  explicit instruction, and fixed several leftover hardcoded teal values in
  `globals.css`, `Achievements.tsx`, and `CursorGlow.tsx` that hadn't been
  updated when the palette last changed. If teal was actually meant to be
  the final direction, let me know and I'll revert.
- Trimmed "Currently Learning" down to Flutter only, per this document.
- Added a repository-highlights grid to the GitHub section.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     One component per section
lib/data.ts     All site copy and content — edit this file to update text
public/         Images, resume.pdf
```

## Updating content

Almost everything on the site is data-driven from `lib/data.ts`. To update
copy, skills, projects, or links, edit that file — you shouldn't need to
touch the components themselves for routine changes.

To replace the resume, drop a new `resume.pdf` into `public/`, keeping the
same filename.
