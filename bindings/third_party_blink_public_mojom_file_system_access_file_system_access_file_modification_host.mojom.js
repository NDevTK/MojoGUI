// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_file_modification_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessFileModificationHost = {};
blink.mojom.FileSystemAccessFileModificationHost.$interfaceName = 'blink.mojom.FileSystemAccessFileModificationHost';
blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec = { $: {} };

// Interface: FileSystemAccessFileModificationHost
mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_Params', [
      mojo.internal.StructField('capacity_delta', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParams', [
      mojo.internal.StructField('granted_capacity_delta', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec, 'blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_Params', [
    ],
    [[0, 8]]);

blink.mojom.FileSystemAccessFileModificationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessFileModificationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessFileModificationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessFileModificationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessFileModificationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessFileModificationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestCapacityChange(capacity_delta) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ParamsSpec,
      blink.mojom.FileSystemAccessFileModificationHost_RequestCapacityChange_ResponseParamsSpec,
      [capacity_delta],
      false);
  }

  onContentsModified() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessFileModificationHost_OnContentsModified_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessFileModificationHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessFileModificationHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.FileSystemAccessFileModificationHost',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessFileModificationHostPtr = blink.mojom.FileSystemAccessFileModificationHostRemote;
blink.mojom.FileSystemAccessFileModificationHostRequest = blink.mojom.FileSystemAccessFileModificationHostPendingReceiver;

