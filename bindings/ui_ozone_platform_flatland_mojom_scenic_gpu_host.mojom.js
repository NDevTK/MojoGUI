// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_host.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Interface: ScenicGpuHost
ui.mojom.ScenicGpuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.mojom.ScenicGpuHostRemote = class {
  static get $interfaceName() {
    return 'ui.mojom.ScenicGpuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.mojom.ScenicGpuHostPendingReceiver,
      handle);
    this.$ = new ui.mojom.ScenicGpuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.mojom.ScenicGpuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  attachSurfaceToWindow(window_id, view_holder_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec.$,
      null,
      [window_id, view_holder_token]);
  }

};

ui.mojom.ScenicGpuHost.getRemote = function() {
  let remote = new ui.mojom.ScenicGpuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.mojom.ScenicGpuHost',
    'context');
  return remote.$;
}};

// ParamsSpec for AttachSurfaceToWindow
ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.ScenicGpuHost.AttachSurfaceToWindow_Params',
      packedSize: 24,
      fields: [
        { name: 'window_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'view_holder_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ui.mojom.ScenicGpuHostPtr = ui.mojom.ScenicGpuHostRemote;
ui.mojom.ScenicGpuHostRequest = ui.mojom.ScenicGpuHostPendingReceiver;

