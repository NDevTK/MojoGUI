// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ManifestUrlChangeObserver
blink.mojom.ManifestUrlChangeObserver = {};

blink.mojom.ManifestUrlChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ManifestUrlChangeObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ManifestUrlChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ManifestUrlChangeObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ManifestUrlChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ManifestUrlChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  manifestUrlChanged(manifest_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec,
      null,
      null,
      [manifest_url],
      undefined,
      undefined
    );
  }

};

blink.mojom.ManifestUrlChangeObserver.getRemote = function() {
  let remote = new blink.mojom.ManifestUrlChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ManifestUrlChangeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for ManifestUrlChanged
blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestUrlChangeObserver.ManifestUrlChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'manifest_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ManifestUrlChangeObserverPtr = blink.mojom.ManifestUrlChangeObserverRemote;
blink.mojom.ManifestUrlChangeObserverRequest = blink.mojom.ManifestUrlChangeObserverPendingReceiver;

