// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/credentialmanagement/credential_manager.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialMediationRequirementSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialManagerErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.CredentialInfoSpec = { $: {} };
blink.mojom.CredentialManager = {};
blink.mojom.CredentialManager.$interfaceName = 'blink.mojom.CredentialManager';
blink.mojom.CredentialManager_Store_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_Store_ResponseParamsSpec = { $: {} };
blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec = { $: {} };
blink.mojom.CredentialManager_Get_ParamsSpec = { $: {} };
blink.mojom.CredentialManager_Get_ResponseParamsSpec = { $: {} };

// Enum: CredentialType
blink.mojom.CredentialType = {
  EMPTY: 0,
  PASSWORD: 1,
  FEDERATED: 2,
};

// Enum: CredentialMediationRequirement
blink.mojom.CredentialMediationRequirement = {
  kSilent: 0,
  kOptional: 1,
  kRequired: 2,
  kConditional: 3,
};

// Enum: CredentialManagerError
blink.mojom.CredentialManagerError = {
  SUCCESS: 0,
  PENDING_REQUEST: 1,
  PASSWORD_STORE_UNAVAILABLE: 2,
  UNKNOWN: 3,
};

// Struct: CredentialInfo
mojo.internal.Struct(
    blink.mojom.CredentialInfoSpec, 'blink.mojom.CredentialInfo', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.CredentialTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('password', 32, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('federation', 40, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CredentialManager
mojo.internal.Struct(
    blink.mojom.CredentialManager_Store_ParamsSpec, 'blink.mojom.CredentialManager_Store_Params', [
      mojo.internal.StructField('credential', 0, 0, blink.mojom.CredentialInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Store_ResponseParamsSpec, 'blink.mojom.CredentialManager_Store_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec, 'blink.mojom.CredentialManager_PreventSilentAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec, 'blink.mojom.CredentialManager_PreventSilentAccess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Get_ParamsSpec, 'blink.mojom.CredentialManager_Get_Params', [
      mojo.internal.StructField('mediation', 0, 0, blink.mojom.CredentialMediationRequirementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('federations', 8, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_passwords', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.CredentialManager_Get_ResponseParamsSpec, 'blink.mojom.CredentialManager_Get_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.CredentialManagerErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credential', 8, 0, blink.mojom.CredentialInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.CredentialManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.CredentialManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.CredentialManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.CredentialManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.CredentialManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  store(credential) {
    return this.$.store(credential);
  }
  preventSilentAccess() {
    return this.$.preventSilentAccess();
  }
  get(mediation, include_passwords, federations) {
    return this.$.get(mediation, include_passwords, federations);
  }
};

blink.mojom.CredentialManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CredentialManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  store(credential) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.CredentialManager_Store_ParamsSpec,
      blink.mojom.CredentialManager_Store_ResponseParamsSpec,
      [credential],
      false);
  }

  preventSilentAccess() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec,
      blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec,
      [],
      false);
  }

  get(mediation, include_passwords, federations) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.CredentialManager_Get_ParamsSpec,
      blink.mojom.CredentialManager_Get_ResponseParamsSpec,
      [mediation, include_passwords, federations],
      false);
  }

};

blink.mojom.CredentialManager.getRemote = function() {
  let remote = new blink.mojom.CredentialManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.CredentialManager',
    'context');
  return remote.$;
};

blink.mojom.CredentialManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CredentialManager', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CredentialManager_Store_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.CredentialManager_Get_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CredentialManager_Store_ParamsSpec.$.structSpec);
          const result = this.impl.store(params.credential);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CredentialManager_Store_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CredentialManager_PreventSilentAccess_ParamsSpec.$.structSpec);
          const result = this.impl.preventSilentAccess();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CredentialManager_PreventSilentAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.CredentialManager_Get_ParamsSpec.$.structSpec);
          const result = this.impl.get(params.mediation, params.include_passwords, params.federations);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.CredentialManager_Get_ResponseParamsSpec);
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

blink.mojom.CredentialManagerReceiver = blink.mojom.CredentialManagerReceiver;

blink.mojom.CredentialManagerPtr = blink.mojom.CredentialManagerRemote;
blink.mojom.CredentialManagerRequest = blink.mojom.CredentialManagerPendingReceiver;

