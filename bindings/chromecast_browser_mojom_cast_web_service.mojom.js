// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Enum: BackgroundColor
chromecast.mojom.BackgroundColor = {
  NONE: 0,
  WHITE: 1,
  BLACK: 2,
  TRANSPARENT: 3,
};

// Enum: RendererType
chromecast.mojom.RendererType = {
  DEFAULT_RENDERER: 0,
  MOJO_RENDERER: 1,
  REMOTING_RENDERER: 2,
};

// Enum: RendererPool
chromecast.mojom.RendererPool = {
  NONE: 0,
  OVERLAY: 1,
};

// Enum: GesturePriority
chromecast.mojom.GesturePriority = {
  NONE: 0,
  ROOT_UI: 1,
  MAIN_ACTIVITY: 2,
  SETTINGS_UI: 3,
};

// Interface: CastWebService
chromecast.mojom.CastWebService = {};

chromecast.mojom.CastWebServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebView(params, web_contents, window) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastWebService_CreateWebView_ParamsSpec,
      null,
      null,
      [params, web_contents, window],
      undefined,
      undefined
    );
  }

  registerWebUiClient(client, hosts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec,
      null,
      null,
      [client, hosts],
      undefined,
      undefined
    );
  }

  flushDomLocalStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  clearLocalStorage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

chromecast.mojom.CastWebService.getRemote = function() {
  let remote = new chromecast.mojom.CastWebServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebService',
    'context');
  return remote.$;
};

// ParamsSpec for CreateWebView
chromecast.mojom.CastWebService_CreateWebView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.CreateWebView_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'web_contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'window', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RegisterWebUiClient
chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.RegisterWebUiClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for FlushDomLocalStorage
chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.FlushDomLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClearLocalStorage
chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.ClearLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

