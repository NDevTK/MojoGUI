// Auto-generated MojoJS binding
// Source: chromium_src/sandbox/mac/mojom/traits_test_service.mojom
// Module: sandbox.mac.mojom

'use strict';

// Module namespace
var sandbox = sandbox || {};
sandbox.mac = sandbox.mac || {};
sandbox.mac.mojom = sandbox.mac.mojom || {};


// Interface: TraitsTestService
sandbox.mac.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sandbox.mac.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'sandbox.mac.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sandbox.mac.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new sandbox.mac.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

sandbox.mac.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoSeatbeltExtensionToken(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec.$,
      sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec.$,
      [in]);
  }

};

sandbox.mac.mojom.TraitsTestService.getRemote = function() {
  let remote = new sandbox.mac.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sandbox.mac.mojom.TraitsTestService',
    'context');
  return remote.$;
}};

// ParamsSpec for EchoSeatbeltExtensionToken
sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'sandbox.mac.mojom.TraitsTestService.EchoSeatbeltExtensionToken_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

sandbox.mac.mojom.TraitsTestService_EchoSeatbeltExtensionToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'sandbox.mac.mojom.TraitsTestService.EchoSeatbeltExtensionToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
sandbox.mac.mojom.TraitsTestServicePtr = sandbox.mac.mojom.TraitsTestServiceRemote;
sandbox.mac.mojom.TraitsTestServiceRequest = sandbox.mac.mojom.TraitsTestServicePendingReceiver;

