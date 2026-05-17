# Deploy guide — first push + Vercel

The project is fully scaffolded. To get it live, run the steps below from a terminal **on your Windows machine** (not from the Claude sandbox — that's why these steps are left for you).

## 0. One-time cleanup

The sandbox left behind a partial `node_modules` folder and a half-initialized `.git` folder. Delete both before continuing:

**PowerShell** (run inside the project folder):

```powershell
cd "C:\Users\nahue\OneDrive\Documents\AI\Claude\CV Moderno\CV Moderno"
Remove-Item -Recurse -Force node_modules, .git -ErrorAction SilentlyContinue
```

## 1. Install dependencies & verify build

```powershell
npm install
npm run build
```

`npm run build` should complete with no errors. If you want to preview before deploying:

```powershell
npm run dev
# open http://localhost:3000
```

## 2. Create the GitHub repo

Two options — pick one.

### Option A — using GitHub CLI (`gh`), faster

```powershell
gh auth login            # only once, if you haven't logged in before
git init -b main
git add .
git commit -m "feat: initial CV site (Next.js 14 + Tailwind + Framer Motion)"
gh repo create nahue-cv --public --source=. --remote=origin --push
```

### Option B — through the GitHub website

1. Go to https://github.com/new
2. Repository name: `nahue-cv`
3. Visibility: Public (or Private, your call)
4. **Do not** initialize with README, .gitignore or license — the local repo already has them.
5. Click **Create repository**.
6. Back in your terminal:

```powershell
git init -b main
git add .
git commit -m "feat: initial CV site (Next.js 14 + Tailwind + Framer Motion)"
git remote add origin https://github.com/<your-github-username>/nahue-cv.git
git push -u origin main
```

## 3. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository** and select `nahue-cv`.
3. Framework preset: **Next.js** (auto-detected).
4. Leave the build & install commands at their defaults.
5. Click **Deploy**.

The first build takes ~60 seconds. Vercel gives you a URL like `https://nahue-cv.vercel.app`.

## 4. Custom domain (optional)

In the Vercel project → Settings → Domains, add your domain and follow the DNS instructions.

## 5. Future updates

Edit content in `lib/cv-data.ts`, then:

```powershell
git add .
git commit -m "content: update X"
git push
```

Vercel auto-deploys on every push to `main`.

---

## Troubleshooting

- **`npm install` fails on Windows with EPERM** — close VS Code / any editor that's locking files, delete `node_modules`, retry.
- **Vercel build fails on `metadataBase`** — already set in `app/layout.tsx` to `https://nahue-cv.vercel.app`. If your Vercel URL differs, edit that constant and push again.
- **OG image looks blank** — that's fine for v1; add a custom `app/opengraph-image.tsx` later if you want a branded preview.
