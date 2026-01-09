// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/debugger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: Debugger
media_router.mojom.DebuggerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.Debugger';
  }

  shouldFetchMirroringStats() {
    // Method: ShouldFetchMirroringStats
    return new Promise((resolve) => {
      // Call: ShouldFetchMirroringStats()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onMirroringStats(json_stats) {
    // Method: OnMirroringStats
    // Call: OnMirroringStats(json_stats)
  }

  bindReceiver(receiver) {
    // Method: BindReceiver
    // Call: BindReceiver(receiver)
  }

};

media_router.mojom.DebuggerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
