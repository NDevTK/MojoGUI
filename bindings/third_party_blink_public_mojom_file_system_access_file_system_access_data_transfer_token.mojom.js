// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_data_transfer_token.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FileSystemAccessDataTransferToken = {};
blink.mojom.FileSystemAccessDataTransferToken.$interfaceName = 'blink.mojom.FileSystemAccessDataTransferToken';
blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec = { $: {} };

// Interface: FileSystemAccessDataTransferToken
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec, 'blink.mojom.FileSystemAccessDataTransferToken_Clone_Params', [
      mojo.internal.StructField('token_clone', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessDataTransferTokenSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDataTransferTokenRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDataTransferToken';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDataTransferTokenRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessDataTransferTokenRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInternalId() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec,
      blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec,
      [],
      false);
  }

  clone(token_clone) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec,
      null,
      [token_clone],
      false);
  }

};

blink.mojom.FileSystemAccessDataTransferToken.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDataTransferTokenRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDataTransferToken',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDataTransferTokenReceiver = class {
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
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getInternalId');
          const result = this.impl.getInternalId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDataTransferToken_GetInternalId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FileSystemAccessDataTransferToken_Clone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.token_clone);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FileSystemAccessDataTransferTokenReceiver = blink.mojom.FileSystemAccessDataTransferTokenReceiver;

blink.mojom.FileSystemAccessDataTransferTokenPtr = blink.mojom.FileSystemAccessDataTransferTokenRemote;
blink.mojom.FileSystemAccessDataTransferTokenRequest = blink.mojom.FileSystemAccessDataTransferTokenPendingReceiver;

