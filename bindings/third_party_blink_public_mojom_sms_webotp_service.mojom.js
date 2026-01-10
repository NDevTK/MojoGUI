// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SmsStatus
blink.mojom.mojom.SmsStatus = {
  kSuccess: 0,
  kUnhandledRequest: 1,
  kCancelled: 2,
  kAborted: 3,
  kTimeout: 4,
  kBackendNotAvailable: 5,
};
blink.mojom.mojom.SmsStatusSpec = { $: mojo.internal.Enum() };

// Interface: WebOTPService
blink.mojom.mojom.WebOTPService = {};

blink.mojom.mojom.WebOTPServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebOTPServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebOTPService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebOTPServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebOTPServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebOTPServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  receive() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebOTPService_Receive_ParamsSpec,
      blink.mojom.mojom.WebOTPService_Receive_ResponseParamsSpec,
      []);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.WebOTPService_Abort_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.WebOTPService.getRemote = function() {
  let remote = new blink.mojom.mojom.WebOTPServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebOTPService',
    'context');
  return remote.$;
};

// ParamsSpec for Receive
blink.mojom.mojom.WebOTPService_Receive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Receive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.WebOTPService_Receive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Receive_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SmsStatusSpec, nullable: false, minVersion: 0 },
        { name: 'otp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.mojom.WebOTPService_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebOTPService.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebOTPServicePtr = blink.mojom.mojom.WebOTPServiceRemote;
blink.mojom.mojom.WebOTPServiceRequest = blink.mojom.mojom.WebOTPServicePendingReceiver;

