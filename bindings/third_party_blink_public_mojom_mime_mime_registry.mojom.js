// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mime/mime_registry.mojom
// Module: blink.mojom

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
  getMimeTypeFromExtension(extension) {
    return this.$.getMimeTypeFromExtension(extension);
  }
};

blink.mojom.MimeRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MimeRegistry', [
      { explicit: null },
    ]);
  }

  getMimeTypeFromExtension(extension) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MimeRegistry', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MimeRegistry_GetMimeTypeFromExtension_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.MimeRegistryReceiver = blink.mojom.MimeRegistryReceiver;

blink.mojom.MimeRegistryPtr = blink.mojom.MimeRegistryRemote;
blink.mojom.MimeRegistryRequest = blink.mojom.MimeRegistryPendingReceiver;

