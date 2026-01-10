// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/smart_card/smart_card.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};

blink.mojom.SmartCardService = {};
blink.mojom.SmartCardService.$interfaceName = 'blink.mojom.SmartCardService';
blink.mojom.SmartCardService_CreateContext_ParamsSpec = { $: {} };
blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec = { $: {} };

// Interface: SmartCardService
mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ParamsSpec, 'blink.mojom.SmartCardService_CreateContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec, 'blink.mojom.SmartCardService_CreateContext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardCreateContextResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.SmartCardServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SmartCardServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SmartCardService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SmartCardServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SmartCardServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SmartCardServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SmartCardService_CreateContext_ParamsSpec,
      blink.mojom.SmartCardService_CreateContext_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.SmartCardService.getRemote = function() {
  let remote = new blink.mojom.SmartCardServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SmartCardService',
    'context');
  return remote.$;
};

blink.mojom.SmartCardServicePtr = blink.mojom.SmartCardServiceRemote;
blink.mojom.SmartCardServiceRequest = blink.mojom.SmartCardServicePendingReceiver;

