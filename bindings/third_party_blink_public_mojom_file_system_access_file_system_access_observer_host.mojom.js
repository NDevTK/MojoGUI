// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessObserverHost
blink.mojom.FileSystemAccessObserverHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessObserverHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserverHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessObserverHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessObserverHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessObserverHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observe(token, is_recursive) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec.$,
      blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec.$,
      [token, is_recursive]);
  }

  unobserve(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec.$,
      null,
      [token]);
  }

};

blink.mojom.FileSystemAccessObserverHost.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessObserverHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserverHost',
    'context');
  return remote.$;
};

// ParamsSpec for Observe
blink.mojom.FileSystemAccessObserverHost_Observe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Observe_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_recursive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FileSystemAccessObserverHost_Observe_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Observe_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Unobserve
blink.mojom.FileSystemAccessObserverHost_Unobserve_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserverHost.Unobserve_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FileSystemAccessObserverHostPtr = blink.mojom.FileSystemAccessObserverHostRemote;
blink.mojom.FileSystemAccessObserverHostRequest = blink.mojom.FileSystemAccessObserverHostPendingReceiver;

