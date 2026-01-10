// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/digital_identity_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.RequestDigitalIdentityStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.DigitalCredentialGetRequestSpec = { $: {} };
blink.mojom.DigitalCredentialCreateRequestSpec = { $: {} };
blink.mojom.DigitalIdentityRequest = {};
blink.mojom.DigitalIdentityRequest.$interfaceName = 'blink.mojom.DigitalIdentityRequest';
blink.mojom.DigitalIdentityRequest_Get_ParamsSpec = { $: {} };
blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec = { $: {} };
blink.mojom.DigitalIdentityRequest_Create_ParamsSpec = { $: {} };
blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec = { $: {} };
blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec = { $: {} };

// Enum: RequestDigitalIdentityStatus
blink.mojom.RequestDigitalIdentityStatus = {
  kSuccess: 0,
  kError: 1,
  kErrorTooManyRequests: 2,
  kErrorCanceled: 3,
  kErrorNoRequests: 4,
  kErrorNoTransientUserActivation: 5,
  kErrorInvalidJson: 6,
};

// Struct: DigitalCredentialGetRequest
mojo.internal.Struct(
    blink.mojom.DigitalCredentialGetRequestSpec, 'blink.mojom.DigitalCredentialGetRequest', [
      mojo.internal.StructField('protocol', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DigitalCredentialCreateRequest
mojo.internal.Struct(
    blink.mojom.DigitalCredentialCreateRequestSpec, 'blink.mojom.DigitalCredentialCreateRequest', [
      mojo.internal.StructField('protocol', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DigitalIdentityRequest
mojo.internal.Struct(
    blink.mojom.DigitalIdentityRequest_Get_ParamsSpec, 'blink.mojom.DigitalIdentityRequest_Get_Params', [
      mojo.internal.StructField('digital_credential_requests', 0, 0, mojo.internal.Array(blink.mojom.DigitalCredentialGetRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec, 'blink.mojom.DigitalIdentityRequest_Get_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RequestDigitalIdentityStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DigitalIdentityRequest_Create_ParamsSpec, 'blink.mojom.DigitalIdentityRequest_Create_Params', [
      mojo.internal.StructField('digital_credential_requests', 0, 0, mojo.internal.Array(blink.mojom.DigitalCredentialCreateRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec, 'blink.mojom.DigitalIdentityRequest_Create_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RequestDigitalIdentityStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec, 'blink.mojom.DigitalIdentityRequest_Abort_Params', [
    ],
    [[0, 8]]);

blink.mojom.DigitalIdentityRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DigitalIdentityRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DigitalIdentityRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DigitalIdentityRequestPendingReceiver,
      handle);
    this.$ = new blink.mojom.DigitalIdentityRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DigitalIdentityRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  get(digital_credential_requests) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DigitalIdentityRequest_Get_ParamsSpec,
      blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec,
      [digital_credential_requests],
      false);
  }

  create(digital_credential_requests) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DigitalIdentityRequest_Create_ParamsSpec,
      blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec,
      [digital_credential_requests],
      false);
  }

  abort() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DigitalIdentityRequest.getRemote = function() {
  let remote = new blink.mojom.DigitalIdentityRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DigitalIdentityRequest',
    'context');
  return remote.$;
};

blink.mojom.DigitalIdentityRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Get
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Get_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Get (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Create_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Get_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.get');
          const result = this.impl.get(params.digital_credential_requests);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Create_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.digital_credential_requests);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DigitalIdentityRequestReceiver = blink.mojom.DigitalIdentityRequestReceiver;

blink.mojom.DigitalIdentityRequestPtr = blink.mojom.DigitalIdentityRequestRemote;
blink.mojom.DigitalIdentityRequestRequest = blink.mojom.DigitalIdentityRequestPendingReceiver;

