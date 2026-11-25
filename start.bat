@echo off
setlocal
cd /d "%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -Command "$root = (Get-Location).Path; $existing = $false; try { $response = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8000/' -TimeoutSec 1; $existing = $response.StatusCode -eq 200 -and $response.Content.Contains('<title>StayEasy | Find your kind of stay</title>') } catch {}; if (-not $existing) { $python = Get-Command py -ErrorAction SilentlyContinue; $serverArgs = @('-3', '-m', 'http.server', '8000', '--bind', '127.0.0.1'); if (-not $python) { $python = Get-Command python -ErrorAction SilentlyContinue; $serverArgs = @('-m', 'http.server', '8000', '--bind', '127.0.0.1') }; if (-not $python) { Write-Error 'Python 3 is required. Install Python and try again.'; exit 1 }; Start-Process -FilePath $python.Source -ArgumentList $serverArgs -WorkingDirectory $root -WindowStyle Minimized | Out-Null; $ready = $false; for ($i = 0; $i -lt 40; $i++) { Start-Sleep -Milliseconds 150; try { $response = Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:8000/' -TimeoutSec 1; if ($response.StatusCode -eq 200 -and $response.Content.Contains('<title>StayEasy | Find your kind of stay</title>')) { $ready = $true; break } } catch {} }; if (-not $ready) { Write-Error 'Could not start StayEasy on port 8000. Close the app using that port and try again.'; exit 1 } }; Start-Process 'http://localhost:8000/'"
if errorlevel 1 (
  echo.
  echo StayEasy could not be started. Check the message above.
  pause
)
