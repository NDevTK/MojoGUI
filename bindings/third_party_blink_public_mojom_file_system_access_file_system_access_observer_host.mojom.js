// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Interface: FileSystemAccessObserverHost
blink.mojom.mojom.FileSystemAccessObserverHost = {};

blink.mojom.mojom.FileSystemAccessObserverHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FileSystemAccessObserverHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserverHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FileSystemAccessObserverHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FileSystemAccessObserverHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FileSystemAccessObserverHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observe(token, is_recursive) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec,
      blink.mojom.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec,
      [token, is_recursive]);
  }

  unobserve(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec,
      null,
      [token]);
  }

};

blink.mojom.mojom.FileSystemAccessObserverHost.getRemote = function() {
  let remote = new blink.mojom.mojom.FileSystemAccessObserverHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserverHost',
    'context');
  return remote.$;
};

// ParamsSpec for Observe
blink.mojom.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Observe_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
        { name: 'is_recursive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Observe_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FileSystemAccessErrorSpec, nullable: false, minVersion: 0 },
        { name: 'observer_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Unobserve
blink.mojom.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Unobserve_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FileSystemAccessObserverHostPtr = blink.mojom.mojom.FileSystemAccessObserverHostRemote;
blink.mojom.mojom.FileSystemAccessObserverHostRequest = blink.mojom.mojom.FileSystemAccessObserverHostPendingReceiver;

