# Yaxin Wang — University Admissions Coaching

Personal coaching website built with Next.js and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production-like preview:

```bash
npm run preview
```

## Contact form email (recommended before going live)

Create `.env.local` in the project root:

```env
GMAIL_USER=yaxin.w04@gmail.com
GMAIL_APP_PASSWORD=your-google-app-password
```

Get an app password: [Google App Passwords](https://myaccount.google.com/apppasswords) (requires 2FA).

Without this, the form uses FormSubmit — you must click the **activation link** sent to your Gmail once.

## Deploy to a live domain (Vercel — free)

### 1. Push code to GitHub

```bash
cd tutor-website
git init
git add .
git commit -m "Initial commit: coaching website"
```

Create a new repo at [github.com/new](https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tutor-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New → Project**
3. Import your `tutor-website` repo
4. Under **Environment Variables**, add:
   - `GMAIL_USER` = `yaxin.w04@gmail.com`
   - `GMAIL_APP_PASSWORD` = your app password
5. Click **Deploy**

You'll get a free URL like `tutor-website.vercel.app`.

### 3. Connect your custom domain

1. Buy a domain (e.g. [Namecheap](https://namecheap.com), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/))
2. In Vercel: **Project → Settings → Domains → Add**
3. Enter your domain (e.g. `yaxinwang.com`)
4. Follow Vercel's DNS instructions (usually add an **A record** or **CNAME** at your registrar)
5. Wait 5–60 minutes for DNS to propagate

SSL (HTTPS) is automatic on Vercel.

## Project structure

- `src/app/` — pages and layout
- `src/components/` — section components
- `public/images/` — photos and university logos
