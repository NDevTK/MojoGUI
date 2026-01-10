// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_read_icon.mojom
// Module: chrome.mojom

'use strict';

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
};

chrome.mojom.UtilReadIconRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readIcon(file, size, scale) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

chrome.mojom.UtilReadIconReceiver = chrome.mojom.UtilReadIconReceiver;

chrome.mojom.UtilReadIconPtr = chrome.mojom.UtilReadIconRemote;
chrome.mojom.UtilReadIconRequest = chrome.mojom.UtilReadIconPendingReceiver;

