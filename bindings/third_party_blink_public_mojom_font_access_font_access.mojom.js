// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_access/font_access.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Enum: FontEnumerationStatus
blink.mojom.mojom.FontEnumerationStatus = {
  kOk: 0,
  kUnimplemented: 1,
  kUnexpectedError: 2,
  kNeedsUserActivation: 3,
  kNotVisible: 4,
  kPermissionDenied: 5,
};
blink.mojom.mojom.FontEnumerationStatusSpec = { $: mojo.internal.Enum() };

// Struct: FontData
blink.mojom.mojom.FontDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontData',
      packedSize: 40,
      fields: [
        { name: 'postscript_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'full_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'family', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: FontAccessManager
blink.mojom.mojom.FontAccessManager = {};

blink.mojom.mojom.FontAccessManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FontAccessManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FontAccessManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FontAccessManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FontAccessManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FontAccessManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enumerateLocalFonts() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec,
      blink.mojom.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec,
      []);
  }

};

blink.mojom.mojom.FontAccessManager.getRemote = function() {
  let remote = new blink.mojom.mojom.FontAccessManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FontAccessManager',
    'context');
  return remote.$;
};

// ParamsSpec for EnumerateLocalFonts
blink.mojom.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontAccessManager.EnumerateLocalFonts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FontAccessManager.EnumerateLocalFonts_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'enumeration_status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.FontEnumerationStatusSpec, nullable: false, minVersion: 0 },
        { name: 'enumeration_table', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FontAccessManagerPtr = blink.mojom.mojom.FontAccessManagerRemote;
blink.mojom.mojom.FontAccessManagerRequest = blink.mojom.mojom.FontAccessManagerPendingReceiver;

