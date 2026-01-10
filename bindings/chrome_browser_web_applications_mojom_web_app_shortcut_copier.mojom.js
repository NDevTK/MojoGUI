// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/web_applications/mojom/web_app_shortcut_copier.mojom
// Module: web_app.mojom

'use strict';

// Module namespace
var web_app = web_app || {};
web_app.mojom = web_app.mojom || {};
var mojo_base = mojo_base || {};

web_app.mojom.WebAppShortcutCopier = {};
web_app.mojom.WebAppShortcutCopier.$interfaceName = 'web_app.mojom.WebAppShortcutCopier';
web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec = { $: {} };
web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec = { $: {} };

// Interface: WebAppShortcutCopier
mojo.internal.Struct(
    web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec, 'web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_Params', [
      mojo.internal.StructField('source_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec, 'web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

web_app.mojom.WebAppShortcutCopierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_app.mojom.WebAppShortcutCopierRemote = class {
  static get $interfaceName() {
    return 'web_app.mojom.WebAppShortcutCopier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_app.mojom.WebAppShortcutCopierPendingReceiver,
      handle);
    this.$ = new web_app.mojom.WebAppShortcutCopierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_app.mojom.WebAppShortcutCopierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  copyWebAppShortcut(source_path, destination_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec,
      web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec,
      [source_path, destination_path],
      false);
  }

};

web_app.mojom.WebAppShortcutCopier.getRemote = function() {
  let remote = new web_app.mojom.WebAppShortcutCopierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_app.mojom.WebAppShortcutCopier',
    'context');
  return remote.$;
};

web_app.mojom.WebAppShortcutCopierReceiver = class {
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
        
        // Try Method 0: CopyWebAppShortcut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyWebAppShortcut (0)');
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
          const params = decoder.decodeStructInline(web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.copyWebAppShortcut');
          const result = this.impl.copyWebAppShortcut(params.source_path, params.destination_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

web_app.mojom.WebAppShortcutCopierReceiver = web_app.mojom.WebAppShortcutCopierReceiver;

web_app.mojom.WebAppShortcutCopierPtr = web_app.mojom.WebAppShortcutCopierRemote;
web_app.mojom.WebAppShortcutCopierRequest = web_app.mojom.WebAppShortcutCopierPendingReceiver;

