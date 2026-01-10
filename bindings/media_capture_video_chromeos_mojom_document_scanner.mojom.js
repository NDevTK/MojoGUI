// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/document_scanner.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

cros.mojom.DetectCornersResultSpec = { $: {} };
cros.mojom.CrosDocumentScanner = {};
cros.mojom.CrosDocumentScanner.$interfaceName = 'cros.mojom.CrosDocumentScanner';
cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec = { $: {} };
cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec = { $: {} };

// Struct: DetectCornersResult
mojo.internal.Struct(
    cros.mojom.DetectCornersResultSpec, 'cros.mojom.DetectCornersResult', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('corners', 8, 0, mojo.internal.Array(gfx.mojom.PointFSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CrosDocumentScanner
mojo.internal.Struct(
    cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec, 'cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_Params', [
      mojo.internal.StructField('nv12_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec, 'cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.DetectCornersResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CrosDocumentScannerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosDocumentScannerRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosDocumentScanner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosDocumentScannerPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosDocumentScannerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosDocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detectCornersFromNV12Image(nv12_image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec,
      cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec,
      [nv12_image],
      false);
  }

};

cros.mojom.CrosDocumentScanner.getRemote = function() {
  let remote = new cros.mojom.CrosDocumentScannerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosDocumentScanner',
    'context');
  return remote.$;
};

cros.mojom.CrosDocumentScannerPtr = cros.mojom.CrosDocumentScannerRemote;
cros.mojom.CrosDocumentScannerRequest = cros.mojom.CrosDocumentScannerPendingReceiver;

