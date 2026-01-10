// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mime/mime_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MimeRegistry = {};
blink.mojom.MimeRegistry.$interfaceName = 'blink.mojom.MimeRegistry';
blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec = { $: {} };
blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec = { $: {} };

// Interface: MimeRegistry
mojo.internal.Struct(
    blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec, 'blink.mojom.MimeRegistry_GetMimeTypeFromExtension_Params', [
      mojo.internal.StructField('extension', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec, 'blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParams', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.MimeRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MimeRegistryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MimeRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MimeRegistryPendingReceiver,
      handle);
    this.$ = new blink.mojom.MimeRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MimeRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMimeTypeFromExtension(extension) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec,
      blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec,
      [extension],
      false);
  }

};

blink.mojom.MimeRegistry.getRemote = function() {
  let remote = new blink.mojom.MimeRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MimeRegistry',
    'context');
  return remote.$;
};

blink.mojom.MimeRegistryReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMimeTypeFromExtension');
          const result = this.impl.getMimeTypeFromExtension(params.extension);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ResponseParamsSpec);
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

blink.mojom.MimeRegistryReceiver = blink.mojom.MimeRegistryReceiver;

blink.mojom.MimeRegistryPtr = blink.mojom.MimeRegistryRemote;
blink.mojom.MimeRegistryRequest = blink.mojom.MimeRegistryPendingReceiver;

