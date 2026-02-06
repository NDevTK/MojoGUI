import time
import ctypes
import psutil
import win32gui
import win32ui
import win32con
import win32process
from PIL import Image

# --- Configuration ---
PORT = 9222
OUTPUT_FILE = "chrome_capture.png"

# --- 1. Find the PID listening on Port 9222 ---
def get_pid_by_port(port):
    for conn in psutil.net_connections(kind='tcp'):
        if conn.laddr.port == port and conn.status == 'LISTEN':
            return conn.pid
    return None

# --- 2. Find all visible windows for that PID ---
def get_windows_for_pid(pid):
    hwnds = []
    # We don't need title based filtering since its a dedicated chrome profile
    def callback(hwnd, _):
        # Filter: Must be visible (or minimized)
        if win32gui.IsWindowVisible(hwnd) or win32gui.IsIconic(hwnd):
            _, found_pid = win32process.GetWindowThreadProcessId(hwnd)
            if found_pid == pid:
                rect = win32gui.GetWindowRect(hwnd)
                w = rect[2] - rect[0]
                h = rect[3] - rect[1]
                # Filter out tiny utility windows (less than 10x10)
                if w > 10 and h > 10:
                    hwnds.append(hwnd)
        return True

    win32gui.EnumWindows(callback, None)
    return hwnds

# --- 3. Capture a single window ---
def capture_window(hwnd, handle_restore=True):
    # If minimized, restore it briefly
    was_minimized = False
    if handle_restore and win32gui.IsIconic(hwnd):
        was_minimized = True
        # SW_RESTORE (9) activates and displays the window
        win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)
        time.sleep(0.3) # Wait for repaint

    try:
        # Get Dimensions
        rect = win32gui.GetWindowRect(hwnd)
        width = rect[2] - rect[0]
        height = rect[3] - rect[1]

        if width <= 0 or height <= 0:
            return None

        # Create Device Contexts
        hwndDC = win32gui.GetWindowDC(hwnd)
        mfcDC  = win32ui.CreateDCFromHandle(hwndDC)
        saveDC = mfcDC.CreateCompatibleDC()

        # Create Bitmap
        saveBitMap = win32ui.CreateBitmap()
        saveBitMap.CreateCompatibleBitmap(mfcDC, width, height)
        saveDC.SelectObject(saveBitMap)

        # PrintWindow with PW_RENDERFULLCONTENT (0x00000002)
        # This flag is critical for Chrome to capture hardware acceleration
        result = ctypes.windll.user32.PrintWindow(hwnd, saveDC.GetSafeHdc(), 2)

        if result == 1:
            bmpinfo = saveBitMap.GetInfo()
            bmpstr = saveBitMap.GetBitmapBits(True)
            img = Image.frombuffer(
                'RGB',
                (bmpinfo['bmWidth'], bmpinfo['bmHeight']),
                bmpstr, 'raw', 'BGRX', 0, 1)
            return img
        else:
            return None

    finally:
        # Clean up Win32 handles
        if 'saveDC' in locals(): saveDC.DeleteDC()
        if 'mfcDC' in locals(): mfcDC.DeleteDC()
        if 'hwndDC' in locals(): win32gui.ReleaseDC(hwnd, hwndDC)
        if 'saveBitMap' in locals(): win32gui.DeleteObject(saveBitMap.GetHandle())

        # Minimize back if we forced it open
        if was_minimized:
            win32gui.ShowWindow(hwnd, win32con.SW_MINIMIZE)

# --- 4. Main Execution ---
def main():
    # Fix High DPI scaling issues (prevents cropping)
    ctypes.windll.user32.SetProcessDPIAware()

    pid = get_pid_by_port(PORT)
    if not pid:
        print(f"No process found listening on port {PORT}")
        return

    print(f"Found Chrome PID: {pid}")
    hwnds = get_windows_for_pid(pid)
    print(f"Found {len(hwnds)} window(s).")

    # Batch restore minimized windows to optimize wait time
    restored_hwnds = []
    for hwnd in hwnds:
        if win32gui.IsIconic(hwnd):
            win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)
            restored_hwnds.append(hwnd)

    if restored_hwnds:
        print(f"Restored {len(restored_hwnds)} window(s). Waiting for repaint...")
        time.sleep(0.3)

    images = []
    try:
        for hwnd in hwnds:
            print(f"Capturing window handle: {hwnd}...")
            # We already handled restoration, so pass handle_restore=False
            img = capture_window(hwnd, handle_restore=False)
            if img:
                images.append(img)
    finally:
        # Minimize back the windows we restored
        for hwnd in restored_hwnds:
            win32gui.ShowWindow(hwnd, win32con.SW_MINIMIZE)

    if not images:
        print("No images captured.")
        return

    # --- 5. Stitch Images Side-by-Side ---
    print("Stitching images...")
    
    # Calculate combined size
    gap = 20
    total_width = sum(img.width for img in images) + (gap * (len(images) - 1))
    max_height = max(img.height for img in images)

    # Create Dark Gray Canvas
    combined = Image.new('RGB', (total_width, max_height), (50, 50, 50))
    
    current_x = 0
    for img in images:
        combined.paste(img, (current_x, 0))
        current_x += img.width + gap

    combined.save(OUTPUT_FILE)
    print(f"Success! Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
