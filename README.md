# Janit Berwal - Developer Portfolio

React / Vinext (Vite with the Next.js App Router), TypeScript, and Tailwind.

## Run

Requires Node 22.13+ and npm. Run `npm install`, then `npm run dev`.
Build with `npm run build`. The Sites build creates a Cloudflare-compatible Worker.

## Portfolio content

- `components/portfolio/content.ts`: name, university, contact links, project content, and public `.splinecode` scene URL.
- `public/resume.pdf`: the original resume supplied by Janit, copied without modifications.
- `app/page.tsx`: resume-backed timeline, biography, and achievements.
- `app/layout.tsx`, `public/sitemap.xml`, `public/robots.txt`: update identity and canonical domain if hosting elsewhere.
- Project and profile links come from the supplied PDF. Unavailable project links are omitted.

## Contact delivery

The POST /api/contact endpoint validates name/email/message, limits request size, checks same-origin requests, and includes a honeypot. Add CONTACT_WEBHOOK_URL and optional CONTACT_WEBHOOK_TOKEN to server environment variables to connect your message delivery provider. The webhook receives JSON with name, email, and message. It must return 2xx only after accepting the message. Until connected, the form honestly reports that no message was sent. Configure provider rate limiting before public launch.

## 3D and motion

- The hero loads React Three Fiber and Drei in a separate chunk and follows pointer movement; a CSS poster covers unsupported WebGL or load errors.
- Spline is implemented as a lazy integration. Supply your own public scene URL to activate it; the initial version displays a designed monogram instead.
- Babylon.js mounts only near its section, stops work offscreen, disposes resources on exit, and uses a static constellation on mobile or with reduced motion.
- GSAP reveals content and pins the timeline heading on desktop. Lenis shares GSAP's ticker; cleanup removes animations and listeners.
- Framer Motion handles dialogs and hover feedback. Motion One updates the navbar shadow.
- CSS animated project illustrations serve as self-contained previews; replace them with real recordings when available. No project videos are supplied.
- Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN to enable the optional privacy-friendly analytics hook.

## Validation

TypeScript checking, production build, local browser interaction checks, contact validation checks, and PDF rendering are performed during delivery. Safari and a measured Lighthouse mobile score require separate checks; no score or cross-browser certification is claimed.
