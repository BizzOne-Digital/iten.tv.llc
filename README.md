# iTEN.TV, LLC — Website & Admin Panel

Full-stack site for iTEN.TV: automotive/racing entertainment network. Node/Express/MongoDB backend with Cloudinary media storage, React/Vite/Tailwind frontend with a public site and a JWT-protected admin panel.

## Structure

```
backend/
  config/        Mongo + Cloudinary config
  controllers/   Route handlers (auth, blog, categories, team, services, contact, media, settings, hero)
  middleware/    auth (JWT protect), upload (multer memory storage), errorHandler
  models/        Mongoose schemas
  routes/        Express routers, mounted under /api in server.js
  seed/          createAdmin.js — idempotent admin seeder
  services/      cloudinaryService (stream upload/delete), emailService (nodemailer + branded HTML)
  utils/         asyncHandler, generateToken, slugify
  server.js      App entry: helmet, cors, rate limiting, mongo-sanitize, routes, error handlers

frontend/
  src/
    admin/       Admin panel pages (Login, Dashboard, Blog/Team/Services editors, Media, Messages, Hero Settings)
    components/  Shared UI (Header, Footer, Button, Logo, SEO, PageTransition, SectionHeading)
    context/     AuthContext (admin JWT session)
    layouts/     PublicLayout, AdminLayout
    pages/       Public pages (Home, About, Services, Team, Blog, BlogDetail, Contact)
    sections/    Homepage section components
    services/    axios instance (api.js)
    utils/       constants.js (placeholder images/video, featured shows, project types)
    App.jsx      Route definitions (React.lazy + Suspense)
```

## Setup

### 1. Backend

```
cd backend
cp .env.example .env      # fill in Mongo URI, JWT secret, Cloudinary keys, SMTP creds
npm install
npm run dev                # starts on PORT (default 5000)
```

Seed the first admin account (reads ADMIN_SEED_* from .env, idempotent — skips if that email already exists):

```
npm run seed:admin
```

### 2. Frontend

```
cd frontend
cp .env.example .env      # set VITE_API_URL, e.g. http://localhost:5000/api
npm install
npm run dev                # starts on http://localhost:5173
```

Build for production:

```
npm run build
```

### 3. Login to admin panel

Visit `/admin/login` on the frontend with the ADMIN_SEED_EMAIL / ADMIN_SEED_PASSWORD you set in backend/.env before seeding.

## Known placeholders to replace with real assets

- **Hero video**: not used — the hero currently renders a static image (`frontend/public/hero.png`), overridable via Admin → Hero Settings (`posterImageUrl`).
- **Real photography**: `frontend/public/{hero,about1,about2,track,logo}.png` are already wired in; swap the files (same names) to update them. Remaining picsum.photos placeholders live in Featured Shows genre imagery fallback and Services fallback images — replace via the admin panel or `frontend/src/utils/constants.js`.
- **Featured Shows**: `FEATURED_SHOWS` in `constants.js` is a static content array (no backend model) — update directly in code, or wire to a future Shows model if needed.
- **Favicon**: `frontend/public/favicon.svg` is a simple placeholder mark.

## Notes

- All admin mutation routes require a Bearer JWT (obtained via `POST /api/auth/login`), enforced by `backend/middleware/auth.js`.
- Image uploads (blog featured image, team photo, service image, gallery image, media library, contact reference image) go through `multer` memory storage → Cloudinary stream upload; deleting a record also deletes its Cloudinary asset.
- Contact form submissions trigger two emails (admin notification + user confirmation) via `emailService.js`; failures are logged but do not block the API response.

## Deploying to Vercel

Deploy as **two separate Vercel projects** from this same repo — one for `backend/`, one for `frontend/`.

### 1. Push to git

Commit and push this repo (the `.gitignore` already excludes `node_modules`, `.env`, and build output — never commit `backend/.env`, it has live secrets).

### 2. Backend project

In Vercel: **New Project** → import the repo → set **Root Directory** to `backend`. Vercel will pick up `backend/vercel.json`, which routes all requests to `server.js` as a serverless function (Express app, no separate build step needed).

Set these Environment Variables on the Vercel project (values from your local `backend/.env`):

```
MONGO_URI
JWT_SECRET
JWT_EXPIRES_IN
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_APP_PASSWORD
CONTACT_RECEIVER
FRONTEND_URL   # set after step 3, e.g. https://iten-tv.vercel.app (comma-separate multiple origins)
```

Deploy. Your API will be live at `https://<backend-project>.vercel.app/api/...`.

Seed the first admin **once**, from your local machine, pointed at the production `MONGO_URI` (either set it temporarily in `backend/.env` and run `npm run seed:admin`, or run it against your Atlas cluster directly as already done for this project — the admin panel talks to the same database regardless of where the API is hosted).

### 3. Frontend project

In Vercel: **New Project** → import the repo again → set **Root Directory** to `frontend`. Vercel auto-detects Vite (`npm run build`, output `dist`). `frontend/vercel.json` adds the SPA rewrite so client-side routes (`/about`, `/admin/blog`, etc.) don't 404 on refresh.

Set this Environment Variable:

```
VITE_API_URL=https://<backend-project>.vercel.app/api
```

Deploy, then go back to the **backend** project's env vars and set `FRONTEND_URL` to this frontend's URL (so CORS allows it), and redeploy the backend.

### 4. Verify

- `https://<backend-project>.vercel.app/api/health` → `{"status":"ok"}`
- Frontend loads, public pages fetch data (blog/team/services/gallery/hero) from the live API
- `/admin/login` works with the seeded admin credentials, and admin CRUD (create/edit/delete + Cloudinary image upload) round-trips correctly
