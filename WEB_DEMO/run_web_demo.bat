@echo off
setlocal

cd /d "%~dp0"

echo ================================
echo game-template WEB_DEMO Launcher
echo ================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found.
  echo Please install Node.js first, then run this file again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm was not found.
  echo Please check your Node.js installation.
  pause
  exit /b 1
)

if not exist package.json (
  echo [ERROR] package.json was not found in WEB_DEMO.
  echo Current path: %CD%
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

echo Running project structure check...
npm run check
if errorlevel 1 (
  echo [WARN] Project structure check failed. Please read the error above.
  pause
  exit /b 1
)

echo Starting WEB_DEMO...
npm run dev

pause
