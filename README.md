# Veli Bol — Boat Tours Website

Static single-page application for **Veli Bol**, a traditional Dalmatian boat tour company based in Bol, Croatia (Brač Island).

---

## Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| UI Framework | [React 18](https://react.dev/) | Component-based UI |
| Build Tool | [Vite 5](https://vitejs.dev/) | Dev server + production bundler |
| Routing | [React Router v6](https://reactrouter.com/) | Client-side navigation (`HashRouter`) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS |
| Web Server | [Caddy 2](https://caddyserver.com/) | HTTPS + static file serving |

The site builds to a fully static `dist/` folder — no backend or database required. `HashRouter` means all route resolution happens in the browser, so the server only needs to serve `index.html` and the bundled assets.

---

## Local Development

### Prerequisites

- **Node.js** v18 or later — [nodejs.org](https://nodejs.org/)
- **npm** v9 or later (included with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Xarlos89/veli-bol-home.git
cd veli-bol-home

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server starts at **http://localhost:5173** with hot module replacement.

### Other commands

```bash
# Production build — outputs to dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Deploying to a Cloud Server (Caddy)

This guide assumes a fresh Linux server (Ubuntu 22.04 / Debian 12) with SSH access.

### 1. Install Node.js on the server

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Install Caddy on the server

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy
```

### 3. Build the project

On your **local machine** (or in CI), build the project and copy the output to the server:

```bash
# Build locally
npm install
npm run build

# Copy dist/ to the server (replace user@your-server-ip)
rsync -avz --delete dist/ user@your-server-ip:/var/www/veli-bol/
```

Alternatively, clone and build directly on the server:

```bash
# On the server
git clone https://github.com/Xarlos89/veli-bol-home.git /var/www/veli-bol-src
cd /var/www/veli-bol-src
npm install
npm run build
cp -r dist/ /var/www/veli-bol/
```

### 4. Set up the Caddyfile

Copy the provided `Caddyfile` to Caddy's config location:

```bash
# Point to your site root and replace the domain
sudo cp Caddyfile /etc/caddy/Caddyfile

# Edit the domain name
sudo nano /etc/caddy/Caddyfile
```

Replace `yourdomain.com` with your actual domain (e.g. `velibol.com`). Make sure your domain's DNS A record points to the server's public IP before starting Caddy — it needs to reach Let's Encrypt to issue a TLS certificate.

### 5. Set file permissions and start Caddy

```bash
# Give Caddy read access to the site files
sudo chown -R caddy:caddy /var/www/veli-bol/

# Validate the Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile

# Reload Caddy (it's already running as a systemd service after install)
sudo systemctl reload caddy

# Check status
sudo systemctl status caddy
```

Caddy will automatically obtain and renew a free TLS certificate from Let's Encrypt. The site will be live at `https://yourdomain.com` within seconds.

### 6. Deploying updates

```bash
# On the server (or pipe from CI)
cd /var/www/veli-bol-src
git pull
npm run build
cp -r dist/* /var/www/veli-bol/
sudo systemctl reload caddy   # reload is zero-downtime
```

---

## Project Structure

```
veli-bol-home/
├── public/
│   ├── images/
│   │   ├── billboard.jpg     # Tour advertisement billboard photo
│   │   └── boat.jpg          # The Veli Bol boat at harbor
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav, transparent on hero scroll
│   │   └── Footer.jsx        # Links, contact info, copyright
│   ├── pages/
│   │   ├── Home.jsx          # Hero, feature strip, tour cards, quote
│   │   ├── History.jsx       # Island heritage, boat story, crew
│   │   ├── Tours.jsx         # Hidden Bays & Sunset tour details
│   │   └── Contact.jsx       # Info cards, map embed, click-to-call
│   ├── App.jsx               # HashRouter + Routes
│   ├── main.jsx              # ReactDOM entry point
│   └── index.css             # Tailwind directives + custom classes
├── index.html                # Vite HTML entry
├── Caddyfile                 # Web server config for production
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Adding Photos

Placeholder slots are ready across the site. To add new images:

1. Copy your photo into `public/images/` (JPG or WebP recommended)
2. Find the `<PlaceholderImg>` component in the relevant page file and replace it with:
   ```jsx
   <img src="/images/your-photo.jpg" alt="Description" className="w-full h-80 object-cover rounded-xl" />
   ```
3. Run `npm run build` and redeploy.
