// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_service.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

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

ui.mojom.ScenicGpuServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ui.mojom.ScenicGpuService_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.scenic_gpu_host);
          break;
        }
      }
    }});
  }
};

ui.mojom.ScenicGpuServiceReceiver = ui.mojom.ScenicGpuServiceReceiver;

ui.mojom.ScenicGpuServicePtr = ui.mojom.ScenicGpuServiceRemote;
ui.mojom.ScenicGpuServiceRequest = ui.mojom.ScenicGpuServicePendingReceiver;

