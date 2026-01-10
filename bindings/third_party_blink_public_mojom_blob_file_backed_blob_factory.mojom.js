// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/file_backed_blob_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileBackedBlobFactory = {};
blink.mojom.FileBackedBlobFactory.$interfaceName = 'blink.mojom.FileBackedBlobFactory';
blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec = { $: {} };
blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec = { $: {} };
blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec = { $: {} };

// Interface: FileBackedBlobFactory
mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlob_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, blink.mojom.DataElementFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlobSync_Params', [
      mojo.internal.StructField('blob', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, blink.mojom.DataElementFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec, 'blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.FileBackedBlobFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileBackedBlobFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileBackedBlobFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileBackedBlobFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileBackedBlobFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileBackedBlobFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerBlob(blob, uuid, content_type, file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec,
      null,
      [blob, uuid, content_type, file],
      false);
  }

  registerBlobSync(blob, uuid, content_type, file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec,
      blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec,
      [blob, uuid, content_type, file],
      false);
  }

};

blink.mojom.FileBackedBlobFactory.getRemote = function() {
  let remote = new blink.mojom.FileBackedBlobFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileBackedBlobFactory',
    'context');
  return remote.$;
};

blink.mojom.FileBackedBlobFactoryReceiver = class {
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
        
        // Try Method 0: RegisterBlob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBlob (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterBlobSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBlobSync (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.FileBackedBlobFactory_RegisterBlob_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerBlob');
          const result = this.impl.registerBlob(params.blob, params.uuid, params.content_type, params.file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerBlobSync');
          const result = this.impl.registerBlobSync(params.blob, params.uuid, params.content_type, params.file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileBackedBlobFactory_RegisterBlobSync_ResponseParamsSpec);
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

blink.mojom.FileBackedBlobFactoryReceiver = blink.mojom.FileBackedBlobFactoryReceiver;

blink.mojom.FileBackedBlobFactoryPtr = blink.mojom.FileBackedBlobFactoryRemote;
blink.mojom.FileBackedBlobFactoryRequest = blink.mojom.FileBackedBlobFactoryPendingReceiver;

