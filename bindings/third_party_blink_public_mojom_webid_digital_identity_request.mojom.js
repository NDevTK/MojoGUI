// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/digital_identity_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: DigitalIdentityRequest
blink.mojom.DigitalIdentityRequest = {};

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
      blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec,
      [digital_credential_requests],
      undefined,
      undefined
    );
  }

  create(digital_credential_requests) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DigitalIdentityRequest_Create_ParamsSpec,
      blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec,
      blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec,
      [digital_credential_requests],
      undefined,
      undefined
    );
  }

  abort() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for Get
blink.mojom.DigitalIdentityRequest_Get_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DigitalIdentityRequest.Get_Params',
      packedSize: 16,
      fields: [
        { name: 'digital_credential_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.DigitalIdentityRequest_Get_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DigitalIdentityRequest.Get_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'protocol', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Create
blink.mojom.DigitalIdentityRequest_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DigitalIdentityRequest.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'digital_credential_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.DigitalIdentityRequest_Create_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DigitalIdentityRequest.Create_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'protocol', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.DigitalIdentityRequest_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DigitalIdentityRequest.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.DigitalIdentityRequestPtr = blink.mojom.DigitalIdentityRequestRemote;
blink.mojom.DigitalIdentityRequestRequest = blink.mojom.DigitalIdentityRequestPendingReceiver;

