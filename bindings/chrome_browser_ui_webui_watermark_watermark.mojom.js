// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/watermark/watermark.mojom
// Module: watermark.mojom

'use strict';

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(watermark.mojom.PageHandlerSpec), null, false, 0, undefined),
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
};

watermark.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(watermark.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

watermark.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWatermarkStyle(style) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec,
      null,
      [style],
      false);
  }

  showNotificationToast() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(watermark.mojom.PageHandler_SetWatermarkStyle_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWatermarkStyle');
          const result = this.impl.setWatermarkStyle(params.style);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(watermark.mojom.PageHandler_ShowNotificationToast_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showNotificationToast');
          const result = this.impl.showNotificationToast();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

watermark.mojom.PageHandlerReceiver = watermark.mojom.PageHandlerReceiver;

watermark.mojom.PageHandlerPtr = watermark.mojom.PageHandlerRemote;
watermark.mojom.PageHandlerRequest = watermark.mojom.PageHandlerPendingReceiver;

