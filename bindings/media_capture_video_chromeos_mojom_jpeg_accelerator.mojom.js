// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/jpeg_accelerator.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};
var chromeos_camera = chromeos_camera || {};

cros.mojom.JpegAcceleratorProvider = {};
cros.mojom.JpegAcceleratorProvider.$interfaceName = 'cros.mojom.JpegAcceleratorProvider';
cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec = { $: {} };
cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec = { $: {} };

// Interface: JpegAcceleratorProvider
mojo.internal.Struct(
    cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec, 'cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_Params', [
      mojo.internal.StructField('jea', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.JpegEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec, 'cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.JpegAcceleratorProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.JpegAcceleratorProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.JpegAcceleratorProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.JpegAcceleratorProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.JpegAcceleratorProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.JpegAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getJpegEncodeAccelerator(jea) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea],
      false);
  }

  getMjpegDecodeAccelerator(jda) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

};

cros.mojom.JpegAcceleratorProvider.getRemote = function() {
  let remote = new cros.mojom.JpegAcceleratorProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.JpegAcceleratorProvider',
    'context');
  return remote.$;
};

cros.mojom.JpegAcceleratorProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetJpegEncodeAccelerator
        try {
             decoder.decodeStruct(cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetJpegEncodeAccelerator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetMjpegDecodeAccelerator
        try {
             decoder.decodeStruct(cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMjpegDecodeAccelerator (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getJpegEncodeAccelerator');
          const result = this.impl.getJpegEncodeAccelerator(params.jea);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMjpegDecodeAccelerator');
          const result = this.impl.getMjpegDecodeAccelerator(params.jda);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.JpegAcceleratorProviderReceiver = cros.mojom.JpegAcceleratorProviderReceiver;

cros.mojom.JpegAcceleratorProviderPtr = cros.mojom.JpegAcceleratorProviderRemote;
cros.mojom.JpegAcceleratorProviderRequest = cros.mojom.JpegAcceleratorProviderPendingReceiver;

