@echo off
setlocal

rem Change to this script's directory (project root)
cd /d "%~dp0"

set "PORT=8080"

echo ================================================
echo  Security Management System - Dev Server Runner
echo ================================================
echo.

rem Check Node.js
where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js not found. Please install Node.js 18+ from https://nodejs.org
  goto :endfail
)

rem Check npm
where npm >nul 2>&1
if errorlevel 1 (
  echo [ERROR] npm not found. Ensure Node.js installation added npm to PATH.
  goto :endfail
)

rem Install/update dependencies using mirror to avoid 403s
echo Installing dependencies (this may take a minute)...
npm install --registry=https://registry.npmmirror.com --no-audit --fund=false
if errorlevel 1 (
  echo.
  echo Mirror registry failed. Retrying with default npm registry...
  npm install --no-audit --fund=false
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed. Check your network/proxy and try again.
    goto :endfail
  )
)

rem Open the app URL in the default browser
start "" http://localhost:%PORT%/

rem Start Vite dev server
echo Starting dev server on http://localhost:%PORT% ...
call npm run dev

endlocal
exit /b 0

:endfail
echo.
echo Press any key to close...
pause >nul
endlocal
exit /b 1


