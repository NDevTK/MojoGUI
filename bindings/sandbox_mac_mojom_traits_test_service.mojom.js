// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/mac/mojom/traits_test_service.mojom
// Module: sandbox.mac.mojom

'use strict';

// Module namespace
var sandbox = sandbox || {};
sandbox.mac = sandbox.mac || {};
sandbox.mac.mac.mojom = sandbox.mac.mac.mojom || {};


// Interface: TraitsTestService
sandbox.mac.mac.mojom.mojom.TraitsTestService = {};

sandbox.mac.mac.mojom.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sandbox.mac.mac.mojom.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'sandbox.mac.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sandbox.mac.mac.mojom.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new sandbox.mac.mac.mojom.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sandbox.mac.mac.mojom.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoSeatbeltExtensionToken(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sandbox.mac.mac.mojom.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec,
      sandbox.mac.mac.mojom.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec,
      [in]);
  }

};

sandbox.mac.mac.mojom.mojom.TraitsTestService.getRemote = function() {
  let remote = new sandbox.mac.mac.mojom.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sandbox.mac.mojom.TraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoSeatbeltExtensionToken
sandbox.mac.mac.mojom.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sandbox.mac.mojom.TraitsTestService.EchoSeatbeltExtensionToken_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: sandbox.mac.mojom.SeatbeltExtensionTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

sandbox.mac.mac.mojom.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sandbox.mac.mojom.TraitsTestService.EchoSeatbeltExtensionToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: sandbox.mac.mojom.SeatbeltExtensionTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
sandbox.mac.mac.mojom.mojom.TraitsTestServicePtr = sandbox.mac.mac.mojom.mojom.TraitsTestServiceRemote;
sandbox.mac.mac.mojom.mojom.TraitsTestServiceRequest = sandbox.mac.mac.mojom.mojom.TraitsTestServicePendingReceiver;

