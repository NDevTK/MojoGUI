// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_service.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};


// Interface: ScenicGpuService
ui.mojom.mojom.ScenicGpuService = {};

ui.mojom.mojom.ScenicGpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.mojom.mojom.ScenicGpuServiceRemote = class {
  static get $interfaceName() {
    return 'ui.mojom.ScenicGpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.mojom.mojom.ScenicGpuServicePendingReceiver,
      handle);
    this.$ = new ui.mojom.mojom.ScenicGpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.mojom.mojom.ScenicGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(scenic_gpu_host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.mojom.mojom.ScenicGpuService_Initialize_ParamsSpec,
      null,
      [scenic_gpu_host]);
  }

};

ui.mojom.mojom.ScenicGpuService.getRemote = function() {
  let remote = new ui.mojom.mojom.ScenicGpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.mojom.ScenicGpuService',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
ui.mojom.mojom.ScenicGpuService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ScenicGpuService.Initialize_Params',
      packedSize: 16,
      fields: [
        { name: 'scenic_gpu_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ui.mojom.mojom.ScenicGpuServicePtr = ui.mojom.mojom.ScenicGpuServiceRemote;
ui.mojom.mojom.ScenicGpuServiceRequest = ui.mojom.mojom.ScenicGpuServicePendingReceiver;

