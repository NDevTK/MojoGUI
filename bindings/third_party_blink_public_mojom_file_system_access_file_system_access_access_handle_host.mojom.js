// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_access_handle_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessAccessHandleHost
blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessAccessHandleHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessAccessHandleHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  close() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.FileSystemAccessAccessHandleHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessAccessHandleHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessAccessHandleHost',
    'context');
  return remote.$;
};

// ParamsSpec for Close
blink.mojom.FileSystemAccessAccessHandleHost_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessAccessHandleHost.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessAccessHandleHostPtr = blink.mojom.FileSystemAccessAccessHandleHostRemote;
blink.mojom.FileSystemAccessAccessHandleHostRequest = blink.mojom.FileSystemAccessAccessHandleHostPendingReceiver;

