// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_service.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};

ui.mojom.ScenicGpuService = {};
ui.mojom.ScenicGpuService.$interfaceName = 'ui.mojom.ScenicGpuService';
ui.mojom.ScenicGpuService_Initialize_ParamsSpec = { $: {} };

// Interface: ScenicGpuService
mojo.internal.Struct(
    ui.mojom.ScenicGpuService_Initialize_ParamsSpec, 'ui.mojom.ScenicGpuService_Initialize_Params', [
      mojo.internal.StructField('scenic_gpu_host', 0, 0, mojo.internal.InterfaceProxy(ui.mojom.ScenicGpuHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ui.mojom.ScenicGpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.mojom.ScenicGpuServiceRemote = class {
  static get $interfaceName() {
    return 'ui.mojom.ScenicGpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.mojom.ScenicGpuServicePendingReceiver,
      handle);
    this.$ = new ui.mojom.ScenicGpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.mojom.ScenicGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(scenic_gpu_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.mojom.ScenicGpuService_Initialize_ParamsSpec,
      null,
      [scenic_gpu_host],
      false);
  }

};

ui.mojom.ScenicGpuService.getRemote = function() {
  let remote = new ui.mojom.ScenicGpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.mojom.ScenicGpuService',
    'context');
  return remote.$;
};

ui.mojom.ScenicGpuServicePtr = ui.mojom.ScenicGpuServiceRemote;
ui.mojom.ScenicGpuServiceRequest = ui.mojom.ScenicGpuServicePendingReceiver;

