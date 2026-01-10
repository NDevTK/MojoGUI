// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_modification_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessFileModificationHost = {};
blink.mojom.FileSystemAccessFileModificationHost.$interfaceName = 'blink.mojom.FileSystemAccessFileModificationHost';
blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec = { $: {} };

// Interface: FileSystemAccessFileModificationHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_Params', [
      mojo.internal.StructField('capacity_delta', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParams', [
      mojo.internal.StructField('granted_capacity_delta', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_Params', [
    ],
    [[0, 8]]);

blink.mojom.FileSystemAccessFileModificationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileModificationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileModificationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileModificationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileModificationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileModificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCapacityChange(capacity_delta) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec,
      blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec,
      [capacity_delta],
      false);
  }

  onContentsModified() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessFileModificationHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileModificationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileModificationHost',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessFileModificationHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: RequestCapacityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCapacityChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnContentsModified
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContentsModified (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestCapacityChange');
          const result = this.impl.requestCapacityChange(params.capacity_delta);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onContentsModified');
          const result = this.impl.onContentsModified();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FileSystemAccessFileModificationHostReceiver = blink.mojom.FileSystemAccessFileModificationHostReceiver;

blink.mojom.FileSystemAccessFileModificationHostPtr = blink.mojom.FileSystemAccessFileModificationHostRemote;
blink.mojom.FileSystemAccessFileModificationHostRequest = blink.mojom.FileSystemAccessFileModificationHostPendingReceiver;

