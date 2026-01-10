// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_modification_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessFileModificationHost
blink.mojom.mojom.FileSystemAccessFileModificationHost = {};

blink.mojom.mojom.FileSystemAccessFileModificationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FileSystemAccessFileModificationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileModificationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FileSystemAccessFileModificationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FileSystemAccessFileModificationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FileSystemAccessFileModificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCapacityChange(capacity_delta) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec,
      blink.mojom.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec,
      [capacity_delta]);
  }

  onContentsModified() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.FileSystemAccessFileModificationHost.getRemote = function() {
  let remote = new blink.mojom.mojom.FileSystemAccessFileModificationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessFileModificationHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestCapacityChange
blink.mojom.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileModificationHost.RequestCapacityChange_Params',
      packedSize: 16,
      fields: [
        { name: 'capacity_delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileModificationHost.RequestCapacityChange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'granted_capacity_delta', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnContentsModified
blink.mojom.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessFileModificationHost.OnContentsModified_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FileSystemAccessFileModificationHostPtr = blink.mojom.mojom.FileSystemAccessFileModificationHostRemote;
blink.mojom.mojom.FileSystemAccessFileModificationHostRequest = blink.mojom.mojom.FileSystemAccessFileModificationHostPendingReceiver;

