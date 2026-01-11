// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.AppWindow = {};
extensions.mojom.AppWindow.$interfaceName = 'extensions.mojom.AppWindow';
extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec = { $: {} };

// Interface: AppWindow
mojo.internal.Struct(
    extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec, 'extensions.mojom.AppWindow_SetVisuallyDeemphasized_Params', [
      mojo.internal.StructField('deemphasized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.AppWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.AppWindowRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.AppWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.AppWindowPendingReceiver,
      handle);
    this.$ = new extensions.mojom.AppWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setVisuallyDeemphasized(deemphasized) {
    return this.$.setVisuallyDeemphasized(deemphasized);
  }
};

extensions.mojom.AppWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppWindow', [
      { explicit: null },
    ]);
  }

  setVisuallyDeemphasized(deemphasized) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec,
      null,
      [deemphasized],
      false);
  }

};

extensions.mojom.AppWindow.getRemote = function() {
  let remote = new extensions.mojom.AppWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.AppWindow',
    'context');
  return remote.$;
};

extensions.mojom.AppWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppWindow', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.AppWindow_SetVisuallyDeemphasized_ParamsSpec.$.structSpec);
          const result = this.impl.setVisuallyDeemphasized(params.deemphasized);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.AppWindowReceiver = extensions.mojom.AppWindowReceiver;

extensions.mojom.AppWindowPtr = extensions.mojom.AppWindowRemote;
extensions.mojom.AppWindowRequest = extensions.mojom.AppWindowPendingReceiver;

