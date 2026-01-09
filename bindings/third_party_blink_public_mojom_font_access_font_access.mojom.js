// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_access/font_access.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FontEnumerationStatus
blink.mojom.FontEnumerationStatus = {
  kOk: 0,
  kUnimplemented: 1,
  kUnexpectedError: 2,
  kNeedsUserActivation: 3,
  kNotVisible: 4,
  kPermissionDenied: 5,
};

// Interface: FontAccessManager
blink.mojom.FontAccessManager = {};

blink.mojom.FontAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FontAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FontAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FontAccessManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FontAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FontAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enumerateLocalFonts() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec.$,
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec.$,
      []);
  }

};

blink.mojom.FontAccessManager.getRemote = function() {
  let remote = new blink.mojom.FontAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FontAccessManager',
    'context');
  return remote.$;
};

// ParamsSpec for EnumerateLocalFonts
blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontAccessManager.EnumerateLocalFonts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontAccessManager.EnumerateLocalFonts_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'enumeration_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'enumeration_table', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FontAccessManagerPtr = blink.mojom.FontAccessManagerRemote;
blink.mojom.FontAccessManagerRequest = blink.mojom.FontAccessManagerPendingReceiver;

