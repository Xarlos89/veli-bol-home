# Veli Bol Excursions

Website for **Veli Bol Excursions** — a family-run Dalmatian boat tour company based in Bol, Croatia (Brač Island), operating since 1994.

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| UI Framework | [React](https://react.dev/) | 18 |
| Build Tool | [Vite](https://vitejs.dev/) | 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 3 |
| Web Server | [Caddy](https://caddyserver.com/) | 2 |
| CI / Deploy | [GitHub Actions](https://docs.github.com/en/actions) | — |

No backend. No router. Builds to a fully static `dist/` folder.

---

## Local Development

**Requires Node.js 26+**

```bash
git clone https://github.com/Xarlos89/veli-bol-home.git
cd veli-bol-home
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

---

## Deploying

### GitHub Pages (automated)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys to GitHub Pages via the official `deploy-pages` action.

To enable it on a new fork:
1. Go to **Settings → Pages → Source → GitHub Actions**
2. Push to `main` — the workflow handles everything else

If using a custom domain, add it under **Settings → Pages → Custom domain**. The `Caddyfile` `base: '/'` in `vite.config.js` is already set for custom domains.

### Self-hosted with Caddy

**1. Install Caddy** (Ubuntu / Debian):

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy
```

**2. Build and copy files:**

```bash
npm ci && npm run build
rsync -avz --delete dist/ user@your-server:/var/www/veli-bol/
sudo chown -R caddy:caddy /var/www/veli-bol/
```

**3. Configure Caddy:**

```bash
sudo cp Caddyfile /etc/caddy/Caddyfile
# Edit the domain — replace yourdomain.com
sudo nano /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy provisions a Let's Encrypt TLS certificate automatically. DNS A record must point to the server IP before first start.

**Deploying updates:**

```bash
git pull && npm ci && npm run build
rsync -avz --delete dist/ user@your-server:/var/www/veli-bol/
sudo systemctl reload caddy
```

---

## Project Structure

```
veli-bol-home/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD
├── public/
│   ├── images/
│   │   ├── boat.jpg            # Boat at Bol harbor (hero + about + gallery)
│   │   └── billboard.jpg       # Tour advertisement billboard (gallery)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav — logo + hamburger only
│   │   └── Footer.jsx          # Address, phone, email, copyright
│   ├── sections/               # One file per scroll section, top to bottom
│   │   ├── Hero.jsx            # Full-viewport hero with CTA buttons
│   │   ├── Essentials.jsx      # Tour info cards, pricing table, map embed
│   │   ├── About.jsx           # Est. 1994 — photo + text + contact links
│   │   ├── Experience.jsx      # "Six reasons" — dark navy card grid
│   │   ├── FoodOnBoard.jsx     # Menu add-ons with prices
│   │   └── Gallery.jsx         # 2-column photo grid
│   ├── App.jsx                 # Assembles sections in order
│   ├── main.jsx                # ReactDOM entry
│   └── index.css               # Tailwind directives + component classes
├── index.html                  # Vite HTML entry, font imports
├── Caddyfile                   # Self-hosted production server config
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Adding Photos

The gallery has 4 placeholder slots waiting for real photos. To fill one:

1. Drop the image into `public/images/` (JPG or WebP, ideally under 400 KB)
2. Open `src/sections/Gallery.jsx` and replace a `src: null` entry with `src: '/images/your-file.jpg'`
3. Run `npm run build` (or just push to `main` — GitHub Actions will build and deploy)
