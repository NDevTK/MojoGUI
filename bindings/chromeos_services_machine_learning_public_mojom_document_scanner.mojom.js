// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/document_scanner.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: DocumentScannerResultStatus
chromeos.machine_learning.mojom.DocumentScannerResultStatus = {
  OK: 0,
  ERROR: 1,
};
chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec = { $: mojo.internal.Enum() };

// Struct: DocumentScannerConfig
chromeos.machine_learning.mojom.DocumentScannerConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScannerConfig',
      packedSize: 24,
      fields: [
        { name: 'deprecated_library_dlc_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'library_dlc_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
    }
  }
};

// Struct: DetectCornersResult
chromeos.machine_learning.mojom.DetectCornersResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DetectCornersResult',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec, nullable: false, minVersion: 0 },
        { name: 'corners', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DoPostProcessingResult
chromeos.machine_learning.mojom.DoPostProcessingResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DoPostProcessingResult',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec, nullable: false, minVersion: 0 },
        { name: 'processed_jpeg_image', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: DocumentScanner
chromeos.machine_learning.mojom.DocumentScanner = {};

chromeos.machine_learning.mojom.DocumentScannerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.DocumentScannerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.DocumentScanner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.DocumentScannerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.DocumentScannerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.DocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  detectCornersFromNV12Image(nv12_image) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec,
      [nv12_image]);
  }

  detectCornersFromJPEGImage(jpeg_image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec,
      [jpeg_image]);
  }

  doPostProcessing(jpeg_image, corners, rotation) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec,
      [jpeg_image, corners, rotation]);
  }

};

chromeos.machine_learning.mojom.DocumentScanner.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.DocumentScannerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.DocumentScanner',
    'context');
  return remote.$;
};

// ParamsSpec for DetectCornersFromNV12Image
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DetectCornersFromNV12Image_Params',
      packedSize: 16,
      fields: [
        { name: 'nv12_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DetectCornersFromNV12Image_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DetectCornersResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DetectCornersFromJPEGImage
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DetectCornersFromJPEGImage_Params',
      packedSize: 16,
      fields: [
        { name: 'jpeg_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DetectCornersFromJPEGImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DetectCornersResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DoPostProcessing
chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DoPostProcessing_Params',
      packedSize: 32,
      fields: [
        { name: 'jpeg_image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'corners', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.PointFSpec, false), nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.RotationSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}]
    }
  }
};

chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.DocumentScanner.DoPostProcessing_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.DoPostProcessingResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.DocumentScannerPtr = chromeos.machine_learning.mojom.DocumentScannerRemote;
chromeos.machine_learning.mojom.DocumentScannerRequest = chromeos.machine_learning.mojom.DocumentScannerPendingReceiver;

