// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MemoryUsageMonitorLinux = {};
blink.mojom.MemoryUsageMonitorLinux.$interfaceName = 'blink.mojom.MemoryUsageMonitorLinux';
blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec = { $: {} };

// Interface: MemoryUsageMonitorLinux
mojo.internal.Struct(
    blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec, 'blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_Params', [
      mojo.internal.StructField('statm_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.MemoryUsageMonitorLinuxPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MemoryUsageMonitorLinuxRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MemoryUsageMonitorLinux';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MemoryUsageMonitorLinuxPendingReceiver,
      handle);
    this.$ = new blink.mojom.MemoryUsageMonitorLinuxRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MemoryUsageMonitorLinuxRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProcFiles(statm_file, status_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec,
      null,
      [statm_file, status_file],
      false);
  }

};

blink.mojom.MemoryUsageMonitorLinux.getRemote = function() {
  let remote = new blink.mojom.MemoryUsageMonitorLinuxRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.MemoryUsageMonitorLinux',
    'context');
  return remote.$;
};

blink.mojom.MemoryUsageMonitorLinuxPtr = blink.mojom.MemoryUsageMonitorLinuxRemote;
blink.mojom.MemoryUsageMonitorLinuxRequest = blink.mojom.MemoryUsageMonitorLinuxPendingReceiver;

