// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/smart_card/smart_card.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SmartCardService
blink.mojom.mojom.SmartCardService = {};

blink.mojom.mojom.SmartCardServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SmartCardServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SmartCardService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SmartCardServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SmartCardServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SmartCardServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SmartCardService_CreateContext_ParamsSpec,
      blink.mojom.mojom.SmartCardService_CreateContext_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.SmartCardService.getRemote = function() {
  let remote = new blink.mojom.mojom.SmartCardServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SmartCardService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateContext
blink.mojom.mojom.SmartCardService_CreateContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SmartCardService.CreateContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.SmartCardService_CreateContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SmartCardService.CreateContext_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardCreateContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SmartCardServicePtr = blink.mojom.mojom.SmartCardServiceRemote;
blink.mojom.mojom.SmartCardServiceRequest = blink.mojom.mojom.SmartCardServicePendingReceiver;

