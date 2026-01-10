// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_access/font_access.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.FontEnumerationStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.FontDataSpec = { $: {} };
blink.mojom.FontAccessManager = {};
blink.mojom.FontAccessManager.$interfaceName = 'blink.mojom.FontAccessManager';
blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec = { $: {} };
blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec = { $: {} };

// Enum: FontEnumerationStatus
blink.mojom.FontEnumerationStatus = {
  kOk: 0,
  kUnimplemented: 1,
  kUnexpectedError: 2,
  kNeedsUserActivation: 3,
  kNotVisible: 4,
  kPermissionDenied: 5,
};

// Struct: FontData
mojo.internal.Struct(
    blink.mojom.FontDataSpec, 'blink.mojom.FontData', [
      mojo.internal.StructField('postscript_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('full_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('family', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FontAccessManager
mojo.internal.Struct(
    blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec, 'blink.mojom.FontAccessManager_EnumerateLocalFonts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec, 'blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParams', [
      mojo.internal.StructField('enumeration_status', 0, 0, blink.mojom.FontEnumerationStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enumeration_table', 8, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ParamsSpec,
      blink.mojom.FontAccessManager_EnumerateLocalFonts_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.FontAccessManagerPtr = blink.mojom.FontAccessManagerRemote;
blink.mojom.FontAccessManagerRequest = blink.mojom.FontAccessManagerPendingReceiver;

