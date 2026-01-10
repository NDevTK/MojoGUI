// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/ime_service.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var sandbox = sandbox || {};

ash.ime.mojom.InputEngineManager = {};
ash.ime.mojom.InputEngineManager.$interfaceName = 'ash.ime.mojom.InputEngineManager';
ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec = { $: {} };
ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec = { $: {} };
ash.ime.mojom.PlatformAccessProvider = {};
ash.ime.mojom.PlatformAccessProvider.$interfaceName = 'ash.ime.mojom.PlatformAccessProvider';
ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec = { $: {} };
ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec = { $: {} };
ash.ime.mojom.ImeService = {};
ash.ime.mojom.ImeService.$interfaceName = 'ash.ime.mojom.ImeService';
ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec = { $: {} };
ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec = { $: {} };
ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec = { $: {} };

// Interface: InputEngineManager
mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec, 'ash.ime.mojom.InputEngineManager_ConnectToImeEngine_Params', [
      mojo.internal.StructField('ime_spec', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('to_engine_request', 8, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputChannelRemote), null, false, 0, undefined),
      mojo.internal.StructField('from_engine', 16, 0, mojo.internal.InterfaceProxy(ash.ime.mojom.InputChannelRemote), null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec, 'ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec, 'ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_Params', [
      mojo.internal.StructField('connection_factory', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.ConnectionFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec, 'ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputEngineManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputEngineManagerRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputEngineManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputEngineManagerPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputEngineManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputEngineManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToImeEngine(ime_spec, to_engine_request, from_engine, extra) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec,
      ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec,
      [ime_spec, to_engine_request, from_engine, extra],
      false);
  }

  initializeConnectionFactory(connection_factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec,
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec,
      [connection_factory],
      false);
  }

};

ash.ime.mojom.InputEngineManager.getRemote = function() {
  let remote = new ash.ime.mojom.InputEngineManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputEngineManager',
    'context');
  return remote.$;
};

ash.ime.mojom.InputEngineManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToImeEngine(params.ime_spec, params.to_engine_request, params.from_engine, params.extra);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initializeConnectionFactory(params.connection_factory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.ime.mojom.InputEngineManagerReceiver = ash.ime.mojom.InputEngineManagerReceiver;

ash.ime.mojom.InputEngineManagerPtr = ash.ime.mojom.InputEngineManagerRemote;
ash.ime.mojom.InputEngineManagerRequest = ash.ime.mojom.InputEngineManagerPendingReceiver;


// Interface: PlatformAccessProvider
mojo.internal.Struct(
    ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec, 'ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec, 'ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParams', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.PlatformAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.PlatformAccessProviderRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.PlatformAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.PlatformAccessProviderPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.PlatformAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.PlatformAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  downloadImeFileTo(url, file_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec,
      ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec,
      [url, file_path],
      false);
  }

};

ash.ime.mojom.PlatformAccessProvider.getRemote = function() {
  let remote = new ash.ime.mojom.PlatformAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.PlatformAccessProvider',
    'context');
  return remote.$;
};

ash.ime.mojom.PlatformAccessProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.downloadImeFileTo(params.url, params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.ime.mojom.PlatformAccessProviderReceiver = ash.ime.mojom.PlatformAccessProviderReceiver;

ash.ime.mojom.PlatformAccessProviderPtr = ash.ime.mojom.PlatformAccessProviderRemote;
ash.ime.mojom.PlatformAccessProviderRequest = ash.ime.mojom.PlatformAccessProviderPendingReceiver;


// Interface: ImeService
mojo.internal.Struct(
    ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec, 'ash.ime.mojom.ImeService_SetPlatformAccessProvider_Params', [
      mojo.internal.StructField('provider', 0, 0, mojo.internal.InterfaceProxy(ash.ime.mojom.PlatformAccessProviderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec, 'ash.ime.mojom.ImeService_BindInputEngineManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputEngineManagerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec, 'ash.ime.mojom.ImeService_BindInputMethodUserDataService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ash.ime.mojom.InputMethodUserDataServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.ImeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.ImeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ImeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.ImeServicePendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.ImeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.ImeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPlatformAccessProvider(provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec,
      null,
      [provider],
      false);
  }

  bindInputEngineManager(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInputMethodUserDataService(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

ash.ime.mojom.ImeService.getRemote = function() {
  let remote = new ash.ime.mojom.ImeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ImeService',
    'context');
  return remote.$;
};

ash.ime.mojom.ImeServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPlatformAccessProvider(params.provider);
          break;
        }
        case 1: {
          const params = ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInputEngineManager(params.receiver);
          break;
        }
        case 2: {
          const params = ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInputMethodUserDataService(params.receiver);
          break;
        }
      }
    }});
  }
};

ash.ime.mojom.ImeServiceReceiver = ash.ime.mojom.ImeServiceReceiver;

ash.ime.mojom.ImeServicePtr = ash.ime.mojom.ImeServiceRemote;
ash.ime.mojom.ImeServiceRequest = ash.ime.mojom.ImeServicePendingReceiver;

