// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/document_scanner.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.DocumentScannerConfigSpec = { $: {} };
chromeos.machine_learning.mojom.DetectCornersResultSpec = { $: {} };
chromeos.machine_learning.mojom.DoPostProcessingResultSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner = {};
chromeos.machine_learning.mojom.DocumentScanner.$interfaceName = 'chromeos.machine_learning.mojom.DocumentScanner';
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec = { $: {} };

// Enum: DocumentScannerResultStatus
chromeos.machine_learning.mojom.DocumentScannerResultStatus = {
  OK: 0,
  ERROR: 1,
};

// Struct: DocumentScannerConfig
mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScannerConfigSpec, 'chromeos.machine_learning.mojom.DocumentScannerConfig', [
      mojo.internal.StructField('deprecated_library_dlc_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('library_dlc_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Struct: DetectCornersResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.DetectCornersResultSpec, 'chromeos.machine_learning.mojom.DetectCornersResult', [
      mojo.internal.StructField('status', 0, 0, chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('corners', 8, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DoPostProcessingResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.DoPostProcessingResultSpec, 'chromeos.machine_learning.mojom.DoPostProcessingResult', [
      mojo.internal.StructField('status', 0, 0, chromeos.machine_learning.mojom.DocumentScannerResultStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('processed_jpeg_image', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DocumentScanner
mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_Params', [
      mojo.internal.StructField('nv12_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.DetectCornersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_Params', [
      mojo.internal.StructField('jpeg_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.DetectCornersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_Params', [
      mojo.internal.StructField('jpeg_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('corners', 8, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('rotation', 16, 0, chromeos.machine_learning.mojom.RotationSpec.$, null, false, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec, 'chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.machine_learning.mojom.DoPostProcessingResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [nv12_image],
      false);
  }

  detectCornersFromJPEGImage(jpeg_image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec,
      [jpeg_image],
      false);
  }

  doPostProcessing(jpeg_image, corners, rotation) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec,
      [jpeg_image, corners, rotation],
      false);
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

chromeos.machine_learning.mojom.DocumentScannerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DetectCornersFromNV12Image
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetectCornersFromNV12Image (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DetectCornersFromJPEGImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetectCornersFromJPEGImage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoPostProcessing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoPostProcessing (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.detectCornersFromNV12Image');
          const result = this.impl.detectCornersFromNV12Image(params.nv12_image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.detectCornersFromJPEGImage');
          const result = this.impl.detectCornersFromJPEGImage(params.jpeg_image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doPostProcessing');
          const result = this.impl.doPostProcessing(params.jpeg_image, params.corners, params.rotation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.machine_learning.mojom.DocumentScannerReceiver = chromeos.machine_learning.mojom.DocumentScannerReceiver;

chromeos.machine_learning.mojom.DocumentScannerPtr = chromeos.machine_learning.mojom.DocumentScannerRemote;
chromeos.machine_learning.mojom.DocumentScannerRequest = chromeos.machine_learning.mojom.DocumentScannerPendingReceiver;

