// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/file_system_access_context.mojom
// Module: storage.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.FileSystemAccessContext = {};
storage.mojom.FileSystemAccessContext.$interfaceName = 'storage.mojom.FileSystemAccessContext';
storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec = { $: {} };
storage.mojom.FileSystemAccessContext_Clone_ParamsSpec = { $: {} };

// Interface: FileSystemAccessContext
mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec, 'storage.mojom.FileSystemAccessContext_SerializeHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec, 'storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParams', [
      mojo.internal.StructField('bits', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec, 'storage.mojom.FileSystemAccessContext_DeserializeHandle_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bits', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.FileSystemAccessContext_Clone_ParamsSpec, 'storage.mojom.FileSystemAccessContext_Clone_Params', [
      mojo.internal.StructField('receiever', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.FileSystemAccessContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.FileSystemAccessContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.FileSystemAccessContextRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.FileSystemAccessContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.FileSystemAccessContextPendingReceiver,
      handle);
    this.$ = new storage.mojom.FileSystemAccessContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  serializeHandle(token) {
    return this.$.serializeHandle(token);
  }
  deserializeHandle(storage_key, bits, token) {
    return this.$.deserializeHandle(storage_key, bits, token);
  }
  clone(receiever) {
    return this.$.clone(receiever);
  }
};

storage.mojom.FileSystemAccessContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  serializeHandle(token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec,
      storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec,
      [token],
      false);
  }

  deserializeHandle(storage_key, bits, token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec,
      null,
      [storage_key, bits, token],
      false);
  }

  clone(receiever) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.FileSystemAccessContext_Clone_ParamsSpec,
      null,
      [receiever],
      false);
  }

};

storage.mojom.FileSystemAccessContext.getRemote = function() {
  let remote = new storage.mojom.FileSystemAccessContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.FileSystemAccessContext',
    'context');
  return remote.$;
};

storage.mojom.FileSystemAccessContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessContext', [
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_SerializeHandle_ParamsSpec.$.structSpec);
          const result = this.impl.serializeHandle(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.FileSystemAccessContext_SerializeHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_DeserializeHandle_ParamsSpec.$.structSpec);
          const result = this.impl.deserializeHandle(params.storage_key, params.bits, params.token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.FileSystemAccessContext_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.receiever);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.FileSystemAccessContextReceiver = storage.mojom.FileSystemAccessContextReceiver;

storage.mojom.FileSystemAccessContextPtr = storage.mojom.FileSystemAccessContextRemote;
storage.mojom.FileSystemAccessContextRequest = storage.mojom.FileSystemAccessContextPendingReceiver;

