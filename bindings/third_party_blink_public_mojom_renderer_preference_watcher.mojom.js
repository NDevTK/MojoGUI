// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preference_watcher.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererPreferenceWatcher
blink.mojom.RendererPreferenceWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RendererPreferenceWatcherRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RendererPreferenceWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RendererPreferenceWatcherPendingReceiver,
      handle);
    this.$ = new blink.mojom.RendererPreferenceWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RendererPreferenceWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyUpdate(new_prefs) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec.$,
      null,
      [new_prefs]);
  }

};

blink.mojom.RendererPreferenceWatcher.getRemote = function() {
  let remote = new blink.mojom.RendererPreferenceWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RendererPreferenceWatcher',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyUpdate
blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererPreferenceWatcher.NotifyUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'new_prefs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.RendererPreferenceWatcherPtr = blink.mojom.RendererPreferenceWatcherRemote;
blink.mojom.RendererPreferenceWatcherRequest = blink.mojom.RendererPreferenceWatcherPendingReceiver;

