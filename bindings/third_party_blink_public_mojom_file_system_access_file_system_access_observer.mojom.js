// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessObserver
blink.mojom.FileSystemAccessObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FileSystemAccessObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFileChanges(changes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec.$,
      null,
      [changes]);
  }

};

blink.mojom.FileSystemAccessObserver.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnFileChanges
blink.mojom.FileSystemAccessObserver_OnFileChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessObserver.OnFileChanges_Params',
      packedSize: 16,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.FileSystemAccessObserverPtr = blink.mojom.FileSystemAccessObserverRemote;
blink.mojom.FileSystemAccessObserverRequest = blink.mojom.FileSystemAccessObserverPendingReceiver;

