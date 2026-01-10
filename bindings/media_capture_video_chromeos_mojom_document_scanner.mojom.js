// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/document_scanner.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: DetectCornersResult
cros.mojom.DetectCornersResultSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.DetectCornersResult',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'corners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: CrosDocumentScanner
cros.mojom.CrosDocumentScanner = {};

cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_Params',
      packedSize: 16,
      fields: [
        { name: 'nv12_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [nv12_image]);
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

// ParamsSpec for DetectCornersFromNV12Image
cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosDocumentScanner.DetectCornersFromNV12Image_Params',
      packedSize: 16,
      fields: [
        { name: 'nv12_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosDocumentScanner.DetectCornersFromNV12Image_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.DetectCornersResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.CrosDocumentScannerPtr = cros.mojom.CrosDocumentScannerRemote;
cros.mojom.CrosDocumentScannerRequest = cros.mojom.CrosDocumentScannerPendingReceiver;

