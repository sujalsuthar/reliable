# Reliable Engineering

Marketing website for Reliable Engineering — a Saudi Arabia–based engineering firm delivering civil, electrical, mechanical, and IT solutions.

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm** (comes with Node)

## Local setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd reliable-engineering
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and set your admin credentials:

   ```bash
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_strong_password
   ADMIN_SESSION_SECRET=your_random_secret_string
   ```

   See [Environment variables](#environment-variables) below for details.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Admin access

The admin panel uses username/password authentication:

1. Run the app (`npm run dev`) or visit your deployed site.
2. Go to **`/admin/login`** (e.g. `http://localhost:3000/admin/login`).
3. Sign in with the credentials from your `.env.local` file.

The dashboard at `/admin` is a full CMS — edit services, case studies, blog posts, careers, enquiries, banner, about page, certifications, industries, divisions, team, and site settings without touching code.

Content is stored in `data/cms-store.json` (created automatically on first run from seed data). Uploaded images are saved to `public/uploads/`.

### CMS sections

| Sidebar | What you can edit |
|---------|-------------------|
| Dashboard | Overview stats and recent activity |
| Blog Posts | Add, edit, publish articles |
| Case Studies | Project portfolio entries |
| Careers | Job listings |
| Career Applications | View applicant submissions |
| New Enquiries | Contact form submissions |
| Services | Service listings with status and categories |
| Industries | Homepage industry cards |
| Banner Management | Hero headline, buttons, stats |
| About Us | About, privacy, and terms page content |
| Certifications | About page certification badges |
| Divisions | Engineering division pages |
| Team Members | Leadership and team profiles |
| Company Values | About page value cards |
| Why Us Stats | Homepage statistics |
| Site Settings | Site name, contact info, social links |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript check without emit |

## Deploy to Vercel

**Full guide:** [docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md)

1. Push the repo to **GitHub**
2. [Vercel](https://vercel.com) → **Add New Project** → import the repository
3. **Storage** → link **Upstash Redis (KV)** for CMS content
4. **Storage** → link **Vercel Blob** for image uploads
5. **Settings → Environment Variables** (Production):

   | Variable | Required |
   |----------|----------|
   | `ADMIN_USERNAME` | Yes |
   | `ADMIN_PASSWORD` | Yes |
   | `ADMIN_SESSION_SECRET` | Yes (min. 32 chars) |
   | `SITE_URL` | `https://engineering.reliablecompany.sa` |

6. **Deploy** — each push to `main` redeploys automatically

### Custom domain

Vercel → **Settings → Domains** → add `engineering.reliablecompany.sa` → set DNS CNAME as shown by Vercel.

### Local vs Vercel

| | Local (`npm run dev`) | Vercel production |
|---|----------------------|-------------------|
| CMS content | `data/cms-store.json` | Upstash Redis (KV) |
| Image uploads | `public/uploads/` | Vercel Blob |
| Admin env vars | `.env.local` | Vercel dashboard |

Commit `data/cms-store.json` so the first production deploy seeds KV with your content.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ADMIN_USERNAME` | Yes | Admin login username (default: `admin`) |
| `ADMIN_PASSWORD` | Yes | Admin login password |
| `ADMIN_SESSION_SECRET` | **Required in production** | Secret for signing session cookies (min. 32 characters) |
| `SITE_URL` | Production | Public URL, e.g. `https://engineering.reliablecompany.sa` |
| `KV_REST_API_URL` | Vercel production | From linked Upstash Redis store |
| `KV_REST_API_TOKEN` | Vercel production | From linked Upstash Redis store |
| `BLOB_READ_WRITE_TOKEN` | Vercel production | From linked Vercel Blob store |

Never commit `.env.local` or secrets to git.

## Security (production)

- Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` (32+ characters) before going live
- Admin session cookies are `httpOnly`, `secure`, and `SameSite=Strict` in production
- Login and contact forms are rate-limited; contact form includes a honeypot
- CMS image uploads: images only, max 5 MB, magic-byte validation
- Security headers: HSTS, CSP, `X-Frame-Options`, `Permissions-Policy`, and more (`next.config.mjs`)
- `/api/cms/*` and `/api/admin/*` require a valid admin session (middleware + route checks)

## Project structure

```
src/
  app/              # Next.js App Router pages and API routes
  components/       # UI, layout, and section components
  lib/              # Content, auth, SEO, types
  styles/           # Global CSS
```

## License

Private — Reliable Engineering.
