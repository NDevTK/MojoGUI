// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preference_watcher.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  notifyUpdate(new_prefs) {
    return this.$.notifyUpdate(new_prefs);
  }
};

blink.mojom.RendererPreferenceWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererPreferenceWatcher', [
      { explicit: null },
    ]);
  }

  notifyUpdate(new_prefs) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererPreferenceWatcher', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RendererPreferenceWatcher_NotifyUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.notifyUpdate(params.new_prefs);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.RendererPreferenceWatcherReceiver = blink.mojom.RendererPreferenceWatcherReceiver;

blink.mojom.RendererPreferenceWatcherPtr = blink.mojom.RendererPreferenceWatcherRemote;
blink.mojom.RendererPreferenceWatcherRequest = blink.mojom.RendererPreferenceWatcherPendingReceiver;

