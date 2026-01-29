@echo off
:: =============================================================================
:: Chromium Security Research Debugger Launcher
:: =============================================================================
:: This script launches Chrome Canary under WinDbg with security research flags.
:: Uses unique user data directory to isolate debug sessions.
:: =============================================================================

setlocal EnableDelayedExpansion

:: Configuration - Edit these paths as needed
SET "CHROME_PATH=C:\Users\%USERNAME%\AppData\Local\Google\Chrome SxS\Application\chrome.exe"
SET "WINDBG_EXE=WinDbgX.exe"
SET "SCRIPT_DIR=%~dp0"
SET "WINDBG_SCRIPT=%SCRIPT_DIR%chromium_security.js"
SET _NT_SYMBOL_TIMEOUT=1200

:: Validate Chrome Canary installation
if not exist "%CHROME_PATH%" (
    echo [ERROR] Chrome Canary not found at:
    echo   %CHROME_PATH%
    echo.
    echo Please install Chrome Canary or update CHROME_PATH in this script.
    echo Download: https://www.google.com/chrome/canary/
    pause
    exit /b 1
)

:: Generate unique profile directory to isolate debug sessions
:: Uses relative path - DebugProfile folder next to this script
for /f %%a in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd_HHmmss"') do set "TIMESTAMP=%%a"
SET "PROFILE_PATH=%SCRIPT_DIR%DebugProfile\session_%TIMESTAMP%"

:: Create profile directories
if not exist "%PROFILE_PATH%" mkdir "%PROFILE_PATH%"
if not exist "%PROFILE_PATH%\cache" mkdir "%PROFILE_PATH%\cache"
if not exist "C:\Symbols" mkdir "C:\Symbols"

:: Clean up old sessions (keep only 5 most recent)
for /f "skip=5 delims=" %%d in ('dir /b /o-d "%SCRIPT_DIR%DebugProfile\session_*" 2^>nul') do (
    echo  Removing old session: %%d
    rd /s /q "%SCRIPT_DIR%DebugProfile\%%d" 2>nul
)

:: Set up Symbol Path for WinDbg (Microsoft + Google Servers)
SET _NT_SYMBOL_PATH=srv*C:\Symbols*https://msdl.microsoft.com/download/symbols;srv*C:\Symbols*https://chromium-browser-symsrv.commondatastorage.googleapis.com


echo ===============================================================================
echo  Chromium Security Research Debugger
echo ===============================================================================
echo.
echo  Chrome Path:    %CHROME_PATH%
echo  Profile Path:   %PROFILE_PATH%
echo  WinDbg Script:  %WINDBG_SCRIPT%
echo.

:: Build Chrome command line flags
SET CHROME_FLAGS=^
    --user-data-dir="%PROFILE_PATH%" ^
    --disk-cache-dir="%PROFILE_PATH%\cache" ^
    --no-first-run ^
    --no-default-browser-check ^
    --disable-background-networking ^
    --disable-component-update ^
    --disable-sync ^
    --metrics-recording-only ^
    --safebrowsing-disable-auto-update ^
    --site-per-process ^
    --wait-for-debugger-children ^
    --remote-debugging-port=9222 ^
    --enable-blink-features=MojoJS,MojoJSTest ^
    https://ndevtk.github.io/MojoGUI/

:: WinDbg initialization commands
:: -o : Debug child processes  
:: -g : Ignore initial breakpoint for the FIRST process (Chrome browser)
:: -G : Ignore final breakpoint when process terminates
:: The init script just loads our JS - the -g flag handles continuing automatically

SET "INIT_SCRIPT=%SCRIPT_DIR%init.txt"
echo .scriptload "%WINDBG_SCRIPT%"> "%INIT_SCRIPT%"

echo.
echo  Launching WinDbg...
echo.

:: Launch WinDbg with Chrome as target
:: -g handles the initial breakpoint automatically (no manual break needed)
:: The script is loaded via $$< which runs after -g takes effect
start "" "%WINDBG_EXE%" -o -g -G -c "$$<%INIT_SCRIPT%" "%CHROME_PATH%" %CHROME_FLAGS%

echo.
echo  WinDbg launched. Debug session started.
echo  Unique session ID: %TIMESTAMP%
echo.

endlocal
exit /b 0
