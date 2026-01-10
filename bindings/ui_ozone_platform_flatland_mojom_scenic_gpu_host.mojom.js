// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_host.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.ScenicGpuHost = {};
ui.mojom.ScenicGpuHost.$interfaceName = 'ui.mojom.ScenicGpuHost';
ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec = { $: {} };

// Interface: ScenicGpuHost
mojo.internal.Struct(
    ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec, 'ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_Params', [
      mojo.internal.StructField('view_holder_token', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('window_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

ui.mojom.ScenicGpuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.mojom.ScenicGpuHostRemote = class {
  static get $interfaceName() {
    return 'ui.mojom.ScenicGpuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.mojom.ScenicGpuHostPendingReceiver,
      handle);
    this.$ = new ui.mojom.ScenicGpuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.mojom.ScenicGpuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachSurfaceToWindow(window_id, view_holder_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec,
      null,
      [window_id, view_holder_token],
      false);
  }

};

ui.mojom.ScenicGpuHost.getRemote = function() {
  let remote = new ui.mojom.ScenicGpuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.mojom.ScenicGpuHost',
    'context');
  return remote.$;
};

ui.mojom.ScenicGpuHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AttachSurfaceToWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachSurfaceToWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.attachSurfaceToWindow');
          const result = this.impl.attachSurfaceToWindow(params.window_id, params.view_holder_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.mojom.ScenicGpuHostReceiver = ui.mojom.ScenicGpuHostReceiver;

ui.mojom.ScenicGpuHostPtr = ui.mojom.ScenicGpuHostRemote;
ui.mojom.ScenicGpuHostRequest = ui.mojom.ScenicGpuHostPendingReceiver;

