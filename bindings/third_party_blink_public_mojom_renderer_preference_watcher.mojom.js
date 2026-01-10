// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preference_watcher.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.RendererPreferenceWatcher = {};
blink.mojom.RendererPreferenceWatcher.$interfaceName = 'blink.mojom.RendererPreferenceWatcher';
blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec = { $: {} };

// Interface: RendererPreferenceWatcher
mojo.internal.Struct(
    blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec, 'blink.mojom.RendererPreferenceWatcher_NotifyUpdate_Params', [
      mojo.internal.StructField('new_prefs', 0, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec,
      null,
      [new_prefs],
      false);
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

blink.mojom.RendererPreferenceWatcherReceiver = class {
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
          const params = blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyUpdate(params.new_prefs);
          break;
        }
      }
    }});
  }
};

blink.mojom.RendererPreferenceWatcherReceiver = blink.mojom.RendererPreferenceWatcherReceiver;

blink.mojom.RendererPreferenceWatcherPtr = blink.mojom.RendererPreferenceWatcherRemote;
blink.mojom.RendererPreferenceWatcherRequest = blink.mojom.RendererPreferenceWatcherPendingReceiver;

