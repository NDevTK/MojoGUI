// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_read_icon.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

chrome.mojom.IconSizeSpec = { $: mojo.internal.Enum() };
chrome.mojom.UtilReadIcon = {};
chrome.mojom.UtilReadIcon.$interfaceName = 'chrome.mojom.UtilReadIcon';
chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec = { $: {} };
chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec = { $: {} };

// Enum: IconSize
chrome.mojom.IconSize = {
  kSmall: 0,
  kNormal: 1,
  kLarge: 2,
};

// Interface: UtilReadIcon
mojo.internal.Struct(
    chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec, 'chrome.mojom.UtilReadIcon_ReadIcon_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, chrome.mojom.IconSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec, 'chrome.mojom.UtilReadIcon_ReadIcon_ResponseParams', [
      mojo.internal.StructField('icon', 0, 0, gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.UtilReadIconPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.UtilReadIconRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.UtilReadIcon';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.UtilReadIconPendingReceiver,
      handle);
    this.$ = new chrome.mojom.UtilReadIconRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  readIcon(file, size, scale) {
    return this.$.readIcon(file, size, scale);
  }
};

chrome.mojom.UtilReadIconRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UtilReadIcon', [
      { explicit: null },
    ]);
  }

  readIcon(file, size, scale) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec,
      chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec,
      [file, size, scale],
      false);
  }

};

chrome.mojom.UtilReadIcon.getRemote = function() {
  let remote = new chrome.mojom.UtilReadIconRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.UtilReadIcon',
    'context');
  return remote.$;
};

chrome.mojom.UtilReadIconReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UtilReadIcon', [
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
             decoder.decodeStructInline(chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec.$.structSpec);
          const result = this.impl.readIcon(params.file, params.size, params.scale);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.UtilReadIconReceiver = chrome.mojom.UtilReadIconReceiver;

chrome.mojom.UtilReadIconPtr = chrome.mojom.UtilReadIconRemote;
chrome.mojom.UtilReadIconRequest = chrome.mojom.UtilReadIconPendingReceiver;

