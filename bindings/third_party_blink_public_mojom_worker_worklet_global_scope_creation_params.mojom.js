// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worklet_global_scope_creation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WorkletGlobalScopeCreationParams
blink.mojom.WorkletGlobalScopeCreationParams = class {
  constructor(values = {}) {
    this.wait_for_debugger = values.wait_for_debugger !== undefined ? values.wait_for_debugger : 0;
  }
};

// Interface: WorkletDevToolsHost
blink.mojom.WorkletDevToolsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WorkletDevToolsHost';
  }

  onReadyForInspection(agent, agent_host) {
    // Method: OnReadyForInspection
    // Call: OnReadyForInspection(agent, agent_host)
  }

};

blink.mojom.WorkletDevToolsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
