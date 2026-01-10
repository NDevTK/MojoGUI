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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DigitalIdentityRequest_Get_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.DigitalIdentityRequest_Create_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.abort();
          break;
        }
      }
    }});
  }
};

blink.mojom.DigitalIdentityRequestReceiver = blink.mojom.DigitalIdentityRequestReceiver;

blink.mojom.DigitalIdentityRequestPtr = blink.mojom.DigitalIdentityRequestRemote;
blink.mojom.DigitalIdentityRequestRequest = blink.mojom.DigitalIdentityRequestPendingReceiver;

