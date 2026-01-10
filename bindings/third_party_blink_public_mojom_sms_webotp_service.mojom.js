// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/sms/webotp_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SmsStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.WebOTPService = {};
blink.mojom.WebOTPService.$interfaceName = 'blink.mojom.WebOTPService';
blink.mojom.WebOTPService_Receive_ParamsSpec = { $: {} };
blink.mojom.WebOTPService_Receive_ResponseParamsSpec = { $: {} };
blink.mojom.WebOTPService_Abort_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ParamsSpec, 'blink.mojom.WebOTPService_Receive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Receive_ResponseParamsSpec, 'blink.mojom.WebOTPService_Receive_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.SmsStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('otp', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebOTPService_Abort_ParamsSpec, 'blink.mojom.WebOTPService_Abort_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  abort() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebOTPService_Abort_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.WebOTPServicePtr = blink.mojom.WebOTPServiceRemote;
blink.mojom.WebOTPServiceRequest = blink.mojom.WebOTPServicePendingReceiver;

