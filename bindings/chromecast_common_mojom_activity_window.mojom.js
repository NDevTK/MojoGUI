// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_window.mojom
// Module: chromecast.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ActivityWindow = {};
chromecast.mojom.ActivityWindow.$interfaceName = 'chromecast.mojom.ActivityWindow';
chromecast.mojom.ActivityWindow_Show_ParamsSpec = { $: {} };
chromecast.mojom.ActivityWindow_Hide_ParamsSpec = { $: {} };

// Interface: ActivityWindow
mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Show_ParamsSpec, 'chromecast.mojom.ActivityWindow_Show_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ActivityWindow_Hide_ParamsSpec, 'chromecast.mojom.ActivityWindow_Hide_Params', [
    ],
    [[0, 8]]);

chromecast.mojom.ActivityWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ActivityWindowRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ActivityWindowPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ActivityWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  show() {
    return this.$.show();
  }
  hide() {
    return this.$.hide();
  }
};

chromecast.mojom.ActivityWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ActivityWindow', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  show() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.ActivityWindow_Show_ParamsSpec,
      null,
      [],
      false);
  }

  hide() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.ActivityWindow_Hide_ParamsSpec,
      null,
      [],
      false);
  }

};

chromecast.mojom.ActivityWindow.getRemote = function() {
  let remote = new chromecast.mojom.ActivityWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityWindow',
    'context');
  return remote.$;
};

chromecast.mojom.ActivityWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ActivityWindow', [
      { explicit: null },
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
             decoder.decodeStructInline(chromecast.mojom.ActivityWindow_Show_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.ActivityWindow_Hide_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ActivityWindow_Show_ParamsSpec.$.structSpec);
          const result = this.impl.show();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ActivityWindow_Hide_ParamsSpec.$.structSpec);
          const result = this.impl.hide();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chromecast.mojom.ActivityWindowReceiver = chromecast.mojom.ActivityWindowReceiver;

chromecast.mojom.ActivityWindowPtr = chromecast.mojom.ActivityWindowRemote;
chromecast.mojom.ActivityWindowRequest = chromecast.mojom.ActivityWindowPendingReceiver;

