// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_download_progress_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ModelDownloadProgressObserver
blink.mojom.ModelDownloadProgressObserver = {};

blink.mojom.ModelDownloadProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ModelDownloadProgressObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ModelDownloadProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ModelDownloadProgressObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ModelDownloadProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ModelDownloadProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDownloadProgressUpdate(downloaded_bytes, total_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec,
      null,
      [downloaded_bytes, total_bytes]);
  }

};

blink.mojom.ModelDownloadProgressObserver.getRemote = function() {
  let remote = new blink.mojom.ModelDownloadProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ModelDownloadProgressObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDownloadProgressUpdate
blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ModelDownloadProgressObserver.OnDownloadProgressUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'downloaded_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'total_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ModelDownloadProgressObserverPtr = blink.mojom.ModelDownloadProgressObserverRemote;
blink.mojom.ModelDownloadProgressObserverRequest = blink.mojom.ModelDownloadProgressObserverPendingReceiver;

