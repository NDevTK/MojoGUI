// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/watermark/watermark.mojom
// Module: watermark.mojom

// Module namespace
var watermark = watermark || {};
watermark.mojom = watermark.mojom || {};

watermark.mojom.WatermarkStyleSpec = { $: {} };
watermark.mojom.PageHandlerFactory = {};
watermark.mojom.PageHandlerFactory.$interfaceName = 'watermark.mojom.PageHandlerFactory';
watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
watermark.mojom.PageHandler = {};
watermark.mojom.PageHandler.$interfaceName = 'watermark.mojom.PageHandler';
watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec = { $: {} };
watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec = { $: {} };

// Struct: WatermarkStyle
mojo.internal.Struct(
    watermark.mojom.WatermarkStyleSpec, 'watermark.mojom.WatermarkStyle', [
      mojo.internal.StructField('fill_opacity', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('outline_opacity', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('font_size', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'watermark.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(watermark.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

watermark.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

watermark.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'watermark.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      watermark.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new watermark.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

watermark.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

watermark.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new watermark.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'watermark.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

watermark.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
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
             decoder.decodeStructInline(watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

watermark.mojom.PageHandlerFactoryReceiver = watermark.mojom.PageHandlerFactoryReceiver;

watermark.mojom.PageHandlerFactoryPtr = watermark.mojom.PageHandlerFactoryRemote;
watermark.mojom.PageHandlerFactoryRequest = watermark.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec, 'watermark.mojom.PageHandler_SetWatermarkStyle_Params', [
      mojo.internal.StructField('style', 0, 0, watermark.mojom.WatermarkStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec, 'watermark.mojom.PageHandler_ShowNotificationToast_Params', [
    ],
    [[0, 8]]);

watermark.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

watermark.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'watermark.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      watermark.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new watermark.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setWatermarkStyle(style) {
    return this.$.setWatermarkStyle(style);
  }
  showNotificationToast() {
    return this.$.showNotificationToast();
  }
};

watermark.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setWatermarkStyle(style) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec,
      null,
      [style],
      false);
  }

  showNotificationToast() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec,
      null,
      [],
      false);
  }

};

watermark.mojom.PageHandler.getRemote = function() {
  let remote = new watermark.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'watermark.mojom.PageHandler',
    'context');
  return remote.$;
};

watermark.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec.$.structSpec);
          const result = this.impl.setWatermarkStyle(params.style);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec.$.structSpec);
          const result = this.impl.showNotificationToast();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

watermark.mojom.PageHandlerReceiver = watermark.mojom.PageHandlerReceiver;

watermark.mojom.PageHandlerPtr = watermark.mojom.PageHandlerRemote;
watermark.mojom.PageHandlerRequest = watermark.mojom.PageHandlerPendingReceiver;

