// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ManifestUrlChangeObserver = {};
blink.mojom.ManifestUrlChangeObserver.$interfaceName = 'blink.mojom.ManifestUrlChangeObserver';
blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec = { $: {} };

// Interface: ManifestUrlChangeObserver
mojo.internal.Struct(
    blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_ParamsSpec, 'blink.mojom.ManifestUrlChangeObserver_ManifestUrlChanged_Params', [
      mojo.internal.StructField('manifest_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [manifest_url]);
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

blink.mojom.ManifestUrlChangeObserverPtr = blink.mojom.ManifestUrlChangeObserverRemote;
blink.mojom.ManifestUrlChangeObserverRequest = blink.mojom.ManifestUrlChangeObserverPendingReceiver;

