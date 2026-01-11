// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/text_input_host.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.TextInputHost = {};
blink.mojom.TextInputHost.$interfaceName = 'blink.mojom.TextInputHost';
blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec = { $: {} };
blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec = { $: {} };

// Interface: TextInputHost
mojo.internal.Struct(
    blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec, 'blink.mojom.TextInputHost_GotCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec, 'blink.mojom.TextInputHost_GotFirstRectForRange_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.TextInputHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextInputHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextInputHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextInputHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextInputHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  gotCharacterIndexAtPoint(index) {
    return this.$.gotCharacterIndexAtPoint(index);
  }
  gotFirstRectForRange(rect) {
    return this.$.gotFirstRectForRange(rect);
  }
};

blink.mojom.TextInputHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextInputHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  gotCharacterIndexAtPoint(index) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec,
      null,
      [index],
      false);
  }

  gotFirstRectForRange(rect) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec,
      null,
      [rect],
      false);
  }

};

blink.mojom.TextInputHost.getRemote = function() {
  let remote = new blink.mojom.TextInputHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextInputHost',
    'context');
  return remote.$;
};

blink.mojom.TextInputHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextInputHost', [
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
             decoder.decodeStructInline(blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextInputHost_GotCharacterIndexAtPoint_ParamsSpec.$.structSpec);
          const result = this.impl.gotCharacterIndexAtPoint(params.index);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextInputHost_GotFirstRectForRange_ParamsSpec.$.structSpec);
          const result = this.impl.gotFirstRectForRange(params.rect);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.TextInputHostReceiver = blink.mojom.TextInputHostReceiver;

blink.mojom.TextInputHostPtr = blink.mojom.TextInputHostRemote;
blink.mojom.TextInputHostRequest = blink.mojom.TextInputHostPendingReceiver;

