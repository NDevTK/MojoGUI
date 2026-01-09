// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preference_watcher.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererPreferenceWatcher
blink.mojom.RendererPreferenceWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RendererPreferenceWatcher';
  }

  notifyUpdate(new_prefs) {
    // Method: NotifyUpdate
    // Call: NotifyUpdate(new_prefs)
  }

};

blink.mojom.RendererPreferenceWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
