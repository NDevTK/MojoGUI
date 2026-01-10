// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/watermark/watermark.mojom
// Module: watermark.mojom

'use strict';

// Module namespace
var watermark = watermark || {};
watermark.mojom = watermark.mojom || {};


// Struct: WatermarkStyle
watermark.mojom.mojom.WatermarkStyleSpec = {
  $: {
    structSpec: {
      name: 'watermark.mojom.WatermarkStyle',
      packedSize: 24,
      fields: [
        { name: 'fill_opacity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'outline_opacity', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'font_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandlerFactory
watermark.mojom.mojom.PageHandlerFactory = {};

watermark.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

watermark.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'watermark.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      watermark.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new watermark.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

watermark.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      watermark.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

watermark.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new watermark.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'watermark.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
watermark.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'watermark.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
watermark.mojom.mojom.PageHandlerFactoryPtr = watermark.mojom.mojom.PageHandlerFactoryRemote;
watermark.mojom.mojom.PageHandlerFactoryRequest = watermark.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
watermark.mojom.mojom.PageHandler = {};

watermark.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

watermark.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'watermark.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      watermark.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new watermark.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

watermark.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWatermarkStyle(style) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      watermark.mojom.mojom.PageHandler_SetWatermarkStyle_ParamsSpec,
      null,
      [style]);
  }

  showNotificationToast() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      watermark.mojom.mojom.PageHandler_ShowNotificationToast_ParamsSpec,
      null,
      []);
  }

};

watermark.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new watermark.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'watermark.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetWatermarkStyle
watermark.mojom.mojom.PageHandler_SetWatermarkStyle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'watermark.mojom.PageHandler.SetWatermarkStyle_Params',
      packedSize: 16,
      fields: [
        { name: 'style', packedOffset: 0, packedBitOffset: 0, type: watermark.mojom.WatermarkStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowNotificationToast
watermark.mojom.mojom.PageHandler_ShowNotificationToast_ParamsSpec = {
  $: {
    structSpec: {
      name: 'watermark.mojom.PageHandler.ShowNotificationToast_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
watermark.mojom.mojom.PageHandlerPtr = watermark.mojom.mojom.PageHandlerRemote;
watermark.mojom.mojom.PageHandlerRequest = watermark.mojom.mojom.PageHandlerPendingReceiver;

