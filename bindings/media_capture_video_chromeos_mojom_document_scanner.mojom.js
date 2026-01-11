// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/document_scanner.mojom
// Module: cros.mojom

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var gfx = gfx || {};
var mojo_base = mojo_base || {};

cros.mojom.DetectCornersResultSpec = { $: {} };
cros.mojom.CrosDocumentScanner = {};
cros.mojom.CrosDocumentScanner.$interfaceName = 'cros.mojom.CrosDocumentScanner';
cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec = { $: {} };
cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec = { $: {} };

// Struct: DetectCornersResult
mojo.internal.Struct(
    cros.mojom.DetectCornersResultSpec, 'cros.mojom.DetectCornersResult', [
      mojo.internal.StructField('corners', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CrosDocumentScanner
mojo.internal.Struct(
    cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec, 'cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_Params', [
      mojo.internal.StructField('nv12_image', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec, 'cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.DetectCornersResultSpec.$, null, false, 0, undefined),
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
  detectCornersFromNV12Image(nv12_image) {
    return this.$.detectCornersFromNV12Image(nv12_image);
  }
};

cros.mojom.CrosDocumentScannerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosDocumentScanner', [
      { explicit: 0 },
    ]);
  }

  detectCornersFromNV12Image(nv12_image) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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

cros.mojom.CrosDocumentScannerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosDocumentScanner', [
      { explicit: 0 },
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
             decoder.decodeStructInline(cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ParamsSpec.$.structSpec);
          const result = this.impl.detectCornersFromNV12Image(params.nv12_image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosDocumentScanner_DetectCornersFromNV12Image_ResponseParamsSpec);
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

cros.mojom.CrosDocumentScannerReceiver = cros.mojom.CrosDocumentScannerReceiver;

cros.mojom.CrosDocumentScannerPtr = cros.mojom.CrosDocumentScannerRemote;
cros.mojom.CrosDocumentScannerRequest = cros.mojom.CrosDocumentScannerPendingReceiver;

