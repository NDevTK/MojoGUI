// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SmsStatus
blink.mojom.SmsStatus = {
  kSuccess: 0,
  kUnhandledRequest: 1,
  kCancelled: 2,
  kAborted: 3,
  kTimeout: 4,
  kBackendNotAvailable: 5,
};

// Interface: WebOTPService
blink.mojom.WebOTPService = {};

blink.mojom.WebOTPServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebOTPServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebOTPService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebOTPServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebOTPServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebOTPServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  receive() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebOTPService_Receive_ParamsSpec,
      blink.mojom.WebOTPService_Receive_ResponseParamsSpec,
      []);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebOTPService_Abort_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.WebOTPService.getRemote = function() {
  let remote = new blink.mojom.WebOTPServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebOTPService',
    'context');
  return remote.$;
};

// ParamsSpec for Receive
blink.mojom.WebOTPService_Receive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Receive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebOTPService_Receive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Receive_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SmsStatusSpec, nullable: false },
        { name: 'otp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.WebOTPService_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebOTPServicePtr = blink.mojom.WebOTPServiceRemote;
blink.mojom.WebOTPServiceRequest = blink.mojom.WebOTPServicePendingReceiver;

