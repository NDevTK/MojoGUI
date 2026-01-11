// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_service.mojom
// Module: ui.mojom

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
  initialize(scenic_gpu_host) {
    return this.$.initialize(scenic_gpu_host);
  }
};

ui.mojom.ScenicGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScenicGpuService', [
      { explicit: null },
    ]);
  }

  initialize(scenic_gpu_host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScenicGpuService', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.mojom.ScenicGpuService_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.mojom.ScenicGpuService_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.scenic_gpu_host);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ui.mojom.ScenicGpuServiceReceiver = ui.mojom.ScenicGpuServiceReceiver;

ui.mojom.ScenicGpuServicePtr = ui.mojom.ScenicGpuServiceRemote;
ui.mojom.ScenicGpuServiceRequest = ui.mojom.ScenicGpuServicePendingReceiver;

