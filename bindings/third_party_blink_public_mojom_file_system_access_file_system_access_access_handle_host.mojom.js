// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_access_handle_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessAccessHandleHost = {};
blink.mojom.FileSystemAccessAccessHandleHost.$interfaceName = 'blink.mojom.FileSystemAccessAccessHandleHost';
blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec = { $: {} };

// Interface: FileSystemAccessAccessHandleHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec, 'blink.mojom.FileSystemAccessAccessHandleHost_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec, 'blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessAccessHandleHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  close() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec,
      blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessAccessHandleHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessAccessHandleHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessAccessHandleHost',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessAccessHandleHostReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Close
        try {
             decoder.decodeStruct(blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessAccessHandleHost_Close_ResponseParamsSpec);
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

blink.mojom.FileSystemAccessAccessHandleHostReceiver = blink.mojom.FileSystemAccessAccessHandleHostReceiver;

blink.mojom.FileSystemAccessAccessHandleHostPtr = blink.mojom.FileSystemAccessAccessHandleHostRemote;
blink.mojom.FileSystemAccessAccessHandleHostRequest = blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver;

