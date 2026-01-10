// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/model_download_progress_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ModelDownloadProgressObserver = {};
blink.mojom.ModelDownloadProgressObserver.$interfaceName = 'blink.mojom.ModelDownloadProgressObserver';
blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec = { $: {} };

// Interface: ModelDownloadProgressObserver
mojo.internal.Struct(
    blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec, 'blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_Params', [
      mojo.internal.StructField('downloaded_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [downloaded_bytes, total_bytes],
      false);
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

blink.mojom.ModelDownloadProgressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ModelDownloadProgressObserver_OnDownloadProgressUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDownloadProgressUpdate(params.downloaded_bytes, params.total_bytes);
          break;
        }
      }
    }});
  }
};

blink.mojom.ModelDownloadProgressObserverReceiver = blink.mojom.ModelDownloadProgressObserverReceiver;

blink.mojom.ModelDownloadProgressObserverPtr = blink.mojom.ModelDownloadProgressObserverRemote;
blink.mojom.ModelDownloadProgressObserverRequest = blink.mojom.ModelDownloadProgressObserverPendingReceiver;

