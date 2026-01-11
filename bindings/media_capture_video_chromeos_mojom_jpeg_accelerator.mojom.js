// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/jpeg_accelerator.mojom
// Module: cros.mojom

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
  getJpegEncodeAccelerator(jea) {
    return this.$.getJpegEncodeAccelerator(jea);
  }
  getMjpegDecodeAccelerator(jda) {
    return this.$.getMjpegDecodeAccelerator(jda);
  }
};

cros.mojom.JpegAcceleratorProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('JpegAcceleratorProvider', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  getJpegEncodeAccelerator(jea) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea],
      false);
  }

  getMjpegDecodeAccelerator(jda) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('JpegAcceleratorProvider', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.JpegAcceleratorProvider_GetJpegEncodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.getJpegEncodeAccelerator(params.jea);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.JpegAcceleratorProvider_GetMjpegDecodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.getMjpegDecodeAccelerator(params.jda);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

cros.mojom.JpegAcceleratorProviderReceiver = cros.mojom.JpegAcceleratorProviderReceiver;

cros.mojom.JpegAcceleratorProviderPtr = cros.mojom.JpegAcceleratorProviderRemote;
cros.mojom.JpegAcceleratorProviderRequest = cros.mojom.JpegAcceleratorProviderPendingReceiver;

