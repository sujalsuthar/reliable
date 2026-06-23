# Visual Site Editor

WordPress/Webflow-style visual editing for the Reliable Engineering website.

## Access

1. Log in at `/admin/login`
2. Open **Site Changes** from the sidebar (`/admin/site-changes`)

## Features
                        
### Inline editing
- Hover any editable text, image, or button — a blue outline and pencil icon appear
- Click to open the **side panel**
- Edit text, typography (size, weight, color, alignment), images, and buttons
- Images are auto-compressed on upload

### Page builder
- **Add** sections (Hero, Services, CTA, Team, FAQs, etc.)
- **Drag** to reorder sections
- **Duplicate** or **remove** sections
- **Hide** sections with the eye icon

### Global content
- Company name, phone, email, address, social links, logo, copyright
- Saved once → updates navbar, footer, and contact areas site-wide

## Architecture

```
src/lib/cms/editor/     # Types, field paths, section registry
src/components/editor/  # EditorProvider, Editable, EditPanel, SiteEditor
data/cms-store.json     # Persistent content store
```

## API (admin auth required)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/cms/editor/store` | GET | Full store |
| `/api/cms/editor/field` | PATCH | Update field by path |
| `/api/cms/editor/sections` | PUT | Reorder sections |
| `/api/cms/editor/sections` | POST | Add/duplicate section |
| `/api/cms/editor/sections/[id]` | DELETE | Remove section |

## Deployment

- **VPS / Docker / standalone**: `data/cms-store.json` persists edits
- **Vercel serverless**: Use a database (Supabase, MongoDB) — file writes are not persistent
