// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/document_scanner.mojom
// Module: chromeos.machine_learning.mojom

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
  detectCornersFromNV12Image(nv12_image) {
    return this.$.detectCornersFromNV12Image(nv12_image);
  }
  detectCornersFromJPEGImage(jpeg_image) {
    return this.$.detectCornersFromJPEGImage(jpeg_image);
  }
  doPostProcessing(jpeg_image, corners, rotation) {
    return this.$.doPostProcessing(jpeg_image, corners, rotation);
  }
};

chromeos.machine_learning.mojom.DocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentScanner', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  detectCornersFromNV12Image(nv12_image) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec,
      [nv12_image],
      false);
  }

  detectCornersFromJPEGImage(jpeg_image) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec,
      chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ResponseParamsSpec,
      [jpeg_image],
      false);
  }

  doPostProcessing(jpeg_image, corners, rotation) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DocumentScanner', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromNV12Image_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DetectCornersFromJPEGImage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromeos.machine_learning.mojom.DocumentScanner_DoPostProcessing_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

chromeos.machine_learning.mojom.DocumentScannerReceiver = chromeos.machine_learning.mojom.DocumentScannerReceiver;

chromeos.machine_learning.mojom.DocumentScannerPtr = chromeos.machine_learning.mojom.DocumentScannerRemote;
chromeos.machine_learning.mojom.DocumentScannerRequest = chromeos.machine_learning.mojom.DocumentScannerPendingReceiver;

