// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/quick_pair_service.mojom
// Module: ash.quick_pair.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.quick_pair.mojom = ash.quick_pair.quick_pair.mojom || {};


// Interface: QuickPairService
ash.quick_pair.quick_pair.mojom.mojom.QuickPairService = {};

ash.quick_pair.quick_pair.mojom.mojom.QuickPairServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRemote = class {
  static get $interfaceName() {
    return 'ash.quick_pair.mojom.QuickPairService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_pair.quick_pair.mojom.mojom.QuickPairServicePendingReceiver,
      handle);
    this.$ = new ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(fast_pair_data_parser) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.quick_pair.quick_pair.mojom.mojom.QuickPairService_Connect_ParamsSpec,
      null,
      [fast_pair_data_parser]);
  }

};

ash.quick_pair.quick_pair.mojom.mojom.QuickPairService.getRemote = function() {
  let remote = new ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_pair.mojom.QuickPairService',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
ash.quick_pair.quick_pair.mojom.mojom.QuickPairService_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.quick_pair.mojom.QuickPairService.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'fast_pair_data_parser', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.quick_pair.quick_pair.mojom.mojom.QuickPairServicePtr = ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRemote;
ash.quick_pair.quick_pair.mojom.mojom.QuickPairServiceRequest = ash.quick_pair.quick_pair.mojom.mojom.QuickPairServicePendingReceiver;

