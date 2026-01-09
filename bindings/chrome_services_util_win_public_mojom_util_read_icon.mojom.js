// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_read_icon.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: IconSize
chrome.mojom.IconSize = {
  kSmall: 0,
  kNormal: 1,
  kLarge: 2,
};

// Interface: UtilReadIcon
chrome.mojom.UtilReadIcon = {};

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
      chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec,
      [file, size, scale],
      undefined,
      undefined
    );
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

// ParamsSpec for ReadIcon
chrome.mojom.UtilReadIcon_ReadIcon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilReadIcon.ReadIcon_Params',
      packedSize: 32,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.UtilReadIcon_ReadIcon_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilReadIcon.ReadIcon_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.UtilReadIconPtr = chrome.mojom.UtilReadIconRemote;
chrome.mojom.UtilReadIconRequest = chrome.mojom.UtilReadIconPendingReceiver;

