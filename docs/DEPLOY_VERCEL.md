# Deploy on Vercel

Production hosting for **Reliable Engineering** with CMS persistence via **Upstash Redis (KV)** and **Vercel Blob**.

**Production URL:** `https://engineering.reliablecompany.sa` (custom domain)

---

## 1. Push to GitHub

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

---

## 2. Import project in Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Build: `npm run build` · Install: `npm install`

---

## 3. Add Upstash Redis (KV) — CMS content

CMS text, blog posts, services, etc. are stored in Redis on Vercel (not on disk).

1. Vercel project → **Storage** → **Create Database**
2. Choose **Upstash Redis** (or **KV**)
3. Link it to this project

Vercel injects `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.

---

## 4. Add Vercel Blob — image uploads

Admin image uploads require Blob on Vercel.

1. Same project → **Storage** → **Blob**
2. Create a store and link to the project

Vercel injects `BLOB_READ_WRITE_TOKEN`.

---

## 5. Environment variables

**Project → Settings → Environment Variables** — add for **Production** (and Preview if needed):

| Variable | Value |
|----------|--------|
| `ADMIN_USERNAME` | `admin` |
| `ADMIN_PASSWORD` | strong password |
| `ADMIN_SESSION_SECRET` | random string, **min. 32 characters** |
| `SITE_URL` | `https://engineering.reliablecompany.sa` |

`KV_*` and `BLOB_*` are set automatically when you link Storage.

Optional:

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | AI translation in CMS |
| `OPENAI_MODEL` | e.g. `gpt-4o-mini` |

---

## 6. Deploy

Click **Deploy** or push to `main` for automatic deploys.

- Site: `https://your-project.vercel.app`
- Admin: `https://your-project.vercel.app/admin/login`

---

## 7. Custom domain

1. Vercel → **Settings → Domains**
2. Add `engineering.reliablecompany.sa`
3. In your DNS (MassarCloud / domain registrar), add the record Vercel shows (usually **CNAME** `engineering` → `cname.vercel-dns.com`)
4. Update `SITE_URL` to `https://engineering.reliablecompany.sa`
5. Redeploy

---

## 8. Seed CMS content to KV

On first deploy, if KV is empty, the app seeds from `data/cms-store.json` in the repo on first read.

To reset or push local content to KV, run locally with KV env vars set:

```bash
# .env.local must include KV_REST_API_URL and KV_REST_API_TOKEN
npm run sync-store   # updates data/cms-store.json
# Then use admin or a one-time deploy with cms-store.json committed
```

Commit `data/cms-store.json` before deploy so production seeds with your content.

---

## 9. Verify after deploy

| Check | Expected |
|-------|----------|
| Homepage loads | Yes |
| `/admin/login` | Login works with `ADMIN_*` vars |
| Edit CMS content | Saves and persists after refresh |
| Upload image | Works (Blob linked) |
| `/robots.txt` | Present |
| `/sitemap.xml` | Lists pages |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Admin: "not configured" | Set `ADMIN_PASSWORD` + `ADMIN_SESSION_SECRET` (32+ chars) in Vercel env, redeploy |
| CMS save fails | Link Upstash Redis; check `KV_REST_API_URL` + `KV_REST_API_TOKEN` |
| Upload fails | Link Vercel Blob; check `BLOB_READ_WRITE_TOKEN` |
| Wrong SEO URLs | Set `SITE_URL` and redeploy |

---

## Local development

Uses `data/cms-store.json` and `public/uploads/` — no KV/Blob required locally.

Copy `.env.example` → `.env.local` and set admin credentials only.
