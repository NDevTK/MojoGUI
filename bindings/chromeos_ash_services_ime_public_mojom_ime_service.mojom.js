// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/ime_service.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: InputEngineManager
ash.ime.mojom.InputEngineManager = {};

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
      [ime_spec, to_engine_request, from_engine, extra]);
  }

  initializeConnectionFactory(connection_factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec,
      ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec,
      [connection_factory]);
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

// ParamsSpec for ConnectToImeEngine
ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.ConnectToImeEngine_Params',
      packedSize: 32,
      fields: [
        { name: 'ime_spec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'extra', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'to_engine_request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'from_engine', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.ConnectToImeEngine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InitializeConnectionFactory
ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.InitializeConnectionFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'connection_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.InitializeConnectionFactory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.InputEngineManagerPtr = ash.ime.mojom.InputEngineManagerRemote;
ash.ime.mojom.InputEngineManagerRequest = ash.ime.mojom.InputEngineManagerPendingReceiver;


// Interface: PlatformAccessProvider
ash.ime.mojom.PlatformAccessProvider = {};

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
      [url, file_path]);
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

// ParamsSpec for DownloadImeFileTo
ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PlatformAccessProvider.DownloadImeFileTo_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'file_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PlatformAccessProvider.DownloadImeFileTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.PlatformAccessProviderPtr = ash.ime.mojom.PlatformAccessProviderRemote;
ash.ime.mojom.PlatformAccessProviderRequest = ash.ime.mojom.PlatformAccessProviderPendingReceiver;


// Interface: ImeService
ash.ime.mojom.ImeService = {};

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
      [provider]);
  }

  bindInputEngineManager(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindInputMethodUserDataService(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec,
      null,
      [receiver]);
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

// ParamsSpec for SetPlatformAccessProvider
ash.ime.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.SetPlatformAccessProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindInputEngineManager
ash.ime.mojom.ImeService_BindInputEngineManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.BindInputEngineManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindInputMethodUserDataService
ash.ime.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.BindInputMethodUserDataService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.ImeServicePtr = ash.ime.mojom.ImeServiceRemote;
ash.ime.mojom.ImeServiceRequest = ash.ime.mojom.ImeServicePendingReceiver;

