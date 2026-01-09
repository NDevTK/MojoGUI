// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/web_applications/mojom/web_app_shortcut_copier.mojom
// Module: web_app.mojom

'use strict';

// Module namespace
var web_app = web_app || {};
web_app.mojom = web_app.mojom || {};


// Interface: WebAppShortcutCopier
web_app.mojom.WebAppShortcutCopierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web_app.mojom.WebAppShortcutCopier';
  }

  copyWebAppShortcut(source_path, destination_path) {
    // Method: CopyWebAppShortcut
    return new Promise((resolve) => {
      // Call: CopyWebAppShortcut(source_path, destination_path)
      resolve({});
    });
  }

};

web_app.mojom.WebAppShortcutCopierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
