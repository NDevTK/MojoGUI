// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: MemoryUsageMonitorLinux
blink.mojom.MemoryUsageMonitorLinux = {};

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
      null,
      [statm_file, status_file],
      undefined,
      undefined
    );
  }

};

blink.mojom.MemoryUsageMonitorLinux.getRemote = function() {
  let remote = new blink.mojom.MemoryUsageMonitorLinuxRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MemoryUsageMonitorLinux',
    'context');
  return remote.$;
};

// ParamsSpec for SetProcFiles
blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MemoryUsageMonitorLinux.SetProcFiles_Params',
      packedSize: 24,
      fields: [
        { name: 'statm_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.MemoryUsageMonitorLinuxPtr = blink.mojom.MemoryUsageMonitorLinuxRemote;
blink.mojom.MemoryUsageMonitorLinuxRequest = blink.mojom.MemoryUsageMonitorLinuxPendingReceiver;

