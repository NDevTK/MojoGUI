// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/quick_pair/public/mojom/quick_pair_service.mojom
// Module: ash.quick_pair.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.quick_pair = ash.quick_pair || {};
ash.quick_pair.mojom = ash.quick_pair.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var services = services || {};

ash.quick_pair.mojom.QuickPairService = {};
ash.quick_pair.mojom.QuickPairService.$interfaceName = 'ash.quick_pair.mojom.QuickPairService';
ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec = { $: {} };

// Interface: QuickPairService
mojo.internal.Struct(
    ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec, 'ash.quick_pair.mojom.QuickPairService_Connect_Params', [
      mojo.internal.StructField('fast_pair_data_parser', 0, 0, mojo.internal.InterfaceRequest(ash.quick_pair.mojom.FastPairDataParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.quick_pair.mojom.QuickPairServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.quick_pair.mojom.QuickPairServiceRemote = class {
  static get $interfaceName() {
    return 'ash.quick_pair.mojom.QuickPairService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.quick_pair.mojom.QuickPairServicePendingReceiver,
      handle);
    this.$ = new ash.quick_pair.mojom.QuickPairServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.quick_pair.mojom.QuickPairServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(fast_pair_data_parser) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.quick_pair.mojom.QuickPairService_Connect_ParamsSpec,
      null,
      [fast_pair_data_parser],
      false);
  }

};

ash.quick_pair.mojom.QuickPairService.getRemote = function() {
  let remote = new ash.quick_pair.mojom.QuickPairServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.quick_pair.mojom.QuickPairService',
    'context');
  return remote.$;
};

ash.quick_pair.mojom.QuickPairServicePtr = ash.quick_pair.mojom.QuickPairServiceRemote;
ash.quick_pair.mojom.QuickPairServiceRequest = ash.quick_pair.mojom.QuickPairServicePendingReceiver;

