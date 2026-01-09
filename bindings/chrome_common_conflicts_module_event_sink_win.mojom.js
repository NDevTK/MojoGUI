// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/conflicts/module_event_sink_win.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: ModuleEventSink
mojom.ModuleEventSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.ModuleEventSink';
  }

  onModuleEvents(module_load_addresses) {
    // Method: OnModuleEvents
    // Call: OnModuleEvents(module_load_addresses)
  }

};

mojom.ModuleEventSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
