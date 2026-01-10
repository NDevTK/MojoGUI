// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file/file_utilities.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FileUtilitiesHost = {};
blink.mojom.FileUtilitiesHost.$interfaceName = 'blink.mojom.FileUtilitiesHost';
blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec = { $: {} };
blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec = { $: {} };

// Interface: FileUtilitiesHost
mojo.internal.Struct(
    blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec, 'blink.mojom.FileUtilitiesHost_GetFileInfo_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec, 'blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileUtilitiesHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileUtilitiesHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileUtilitiesHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileUtilitiesHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileUtilitiesHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileUtilitiesHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFileInfo(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec,
      blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

};

blink.mojom.FileUtilitiesHost.getRemote = function() {
  let remote = new blink.mojom.FileUtilitiesHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileUtilitiesHost',
    'context');
  return remote.$;
};

blink.mojom.FileUtilitiesHostReceiver = class {
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
        
        // Try Method 0: GetFileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileInfo (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.FileUtilitiesHost_GetFileInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileUtilitiesHost_GetFileInfo_ResponseParamsSpec);
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

blink.mojom.FileUtilitiesHostReceiver = blink.mojom.FileUtilitiesHostReceiver;

blink.mojom.FileUtilitiesHostPtr = blink.mojom.FileUtilitiesHostRemote;
blink.mojom.FileUtilitiesHostRequest = blink.mojom.FileUtilitiesHostPendingReceiver;

