# CCTV Case Guardian


## Project info

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Demo credentials

Use these for easy testing:

- Admin: `admin@demo.local` / `admin123`
- User: `user@demo.local` / `user123`

You can also use: `AhmedHusseinElsayed@outlook.com` / `Cas@135$` (Admin)

## Run locally (Windows)

Double‑click `run-dev.bat` or run from PowerShell:

```powershell
cd "D:\sites\Marassi Sites\ready to use\security-management-system"
./run-dev.bat
```

The script checks Node/npm, installs deps (with a mirror fallback), then starts Vite on `http://localhost:8080`.

## Deploy to GitHub Pages

1. Ensure your repository name is `security-management-system` (or update `vite.config.ts` base accordingly).
2. Push to `main`: the workflow `.github/workflows/deploy.yml` will build and deploy automatically.
3. Pages URL will be shown in the workflow summary.

Local build preview:

```sh
npm run build
npm run preview
```

### GitHub Pages notes

- Base path is set in `vite.config.ts` to `/security-management-system/` for production.
- If your repo name changes, update the `base` accordingly.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Recent updates

- Renamed app branding to "CCTV Case Guardian" across UI.
- Added demo Admin/User credentials for easy testing.
- Hardened `run-dev.bat` (Node/npm checks, registry fallback, PORT variable).
- Configured Vite base for GitHub Pages and added deploy workflow.

