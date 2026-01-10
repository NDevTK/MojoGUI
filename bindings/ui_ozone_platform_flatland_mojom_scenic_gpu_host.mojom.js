// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_host.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.ScenicGpuHost = {};
ui.mojom.ScenicGpuHost.$interfaceName = 'ui.mojom.ScenicGpuHost';
ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec = { $: {} };

// Interface: ScenicGpuHost
mojo.internal.Struct(
    ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec, 'ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_Params', [
      mojo.internal.StructField('window_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('view_holder_token', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ui.mojom.ScenicGpuHost_AttachSurfaceToWindow_ParamsSpec,
      null,
      [window_id, view_holder_token],
      false);
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
};

ui.mojom.ScenicGpuHostPtr = ui.mojom.ScenicGpuHostRemote;
ui.mojom.ScenicGpuHostRequest = ui.mojom.ScenicGpuHostPendingReceiver;

