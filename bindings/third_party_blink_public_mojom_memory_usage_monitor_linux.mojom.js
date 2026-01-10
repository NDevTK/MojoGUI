// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: MemoryUsageMonitorLinux
blink.mojom.mojom.MemoryUsageMonitorLinux = {};

blink.mojom.mojom.MemoryUsageMonitorLinuxPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.MemoryUsageMonitorLinuxRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MemoryUsageMonitorLinux';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.MemoryUsageMonitorLinuxPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.MemoryUsageMonitorLinuxRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.MemoryUsageMonitorLinuxRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProcFiles(statm_file, status_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec,
      null,
      [statm_file, status_file]);
  }

};

blink.mojom.mojom.MemoryUsageMonitorLinux.getRemote = function() {
  let remote = new blink.mojom.mojom.MemoryUsageMonitorLinuxRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MemoryUsageMonitorLinux',
    'context');
  return remote.$;
};

// ParamsSpec for SetProcFiles
blink.mojom.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MemoryUsageMonitorLinux.SetProcFiles_Params',
      packedSize: 24,
      fields: [
        { name: 'statm_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'status_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.MemoryUsageMonitorLinuxPtr = blink.mojom.mojom.MemoryUsageMonitorLinuxRemote;
blink.mojom.mojom.MemoryUsageMonitorLinuxRequest = blink.mojom.mojom.MemoryUsageMonitorLinuxPendingReceiver;

