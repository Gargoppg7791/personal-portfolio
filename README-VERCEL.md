# Personal Portfolio — Vercel deployment notes

This is a cleaned copy prepared for Vercel deployment.

What I changed:
- Removed `node_modules` and `.next` build artifacts from the zip (Vercel will install deps and build).
- Added `.vercelignore` to prevent accidental upload of large folders.
- Added a `vercel-build` script and `engines.node` entry in package.json to help Vercel pick the right Node version.

How to deploy on Vercel:
1. Push this repo to GitHub (recommended) or upload to Vercel directly.
2. Ensure environment variables (if any) are set in Vercel dashboard.
3. Build settings (if Vercel doesn't autodetect):
   - Framework: Next.js
   - Build command: `npm run vercel-build`
   - Output directory: (leave default)
4. If your app uses static export (check `next.config.js`), you may need `next export` in the build script. If you see errors about `output: 'export'`, change the build script to:
   - `next build && next export`

If deployment still fails, please paste the Vercel build log (full error) and I'll diagnose further.