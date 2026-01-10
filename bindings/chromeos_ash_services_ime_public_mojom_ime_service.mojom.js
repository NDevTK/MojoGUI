// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/ime_service.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.ime.mojom = ash.ime.ime.mojom || {};
var url = url || {};


// Interface: InputEngineManager
ash.ime.ime.mojom.mojom.InputEngineManager = {};

ash.ime.ime.mojom.mojom.InputEngineManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.InputEngineManagerRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputEngineManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.InputEngineManagerPendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.InputEngineManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.InputEngineManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToImeEngine(ime_spec, to_engine_request, from_engine, extra) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec,
      ash.ime.ime.mojom.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec,
      [ime_spec, to_engine_request, from_engine, extra]);
  }

  initializeConnectionFactory(connection_factory) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.ime.mojom.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec,
      ash.ime.ime.mojom.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec,
      [connection_factory]);
  }

};

ash.ime.ime.mojom.mojom.InputEngineManager.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.InputEngineManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputEngineManager',
    'context');
  return remote.$;
};

// ParamsSpec for ConnectToImeEngine
ash.ime.ime.mojom.mojom.InputEngineManager_ConnectToImeEngine_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.ConnectToImeEngine_Params',
      packedSize: 32,
      fields: [
        { name: 'ime_spec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'to_engine_request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'from_engine', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'extra', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.ime.ime.mojom.mojom.InputEngineManager_ConnectToImeEngine_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.ConnectToImeEngine_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InitializeConnectionFactory
ash.ime.ime.mojom.mojom.InputEngineManager_InitializeConnectionFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.InitializeConnectionFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'connection_factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.ime.ime.mojom.mojom.InputEngineManager_InitializeConnectionFactory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputEngineManager.InitializeConnectionFactory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.InputEngineManagerPtr = ash.ime.ime.mojom.mojom.InputEngineManagerRemote;
ash.ime.ime.mojom.mojom.InputEngineManagerRequest = ash.ime.ime.mojom.mojom.InputEngineManagerPendingReceiver;


// Interface: PlatformAccessProvider
ash.ime.ime.mojom.mojom.PlatformAccessProvider = {};

ash.ime.ime.mojom.mojom.PlatformAccessProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.PlatformAccessProviderRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.PlatformAccessProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.PlatformAccessProviderPendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.PlatformAccessProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.PlatformAccessProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  downloadImeFileTo(url, file_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec,
      ash.ime.ime.mojom.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec,
      [url, file_path]);
  }

};

ash.ime.ime.mojom.mojom.PlatformAccessProvider.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.PlatformAccessProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.PlatformAccessProvider',
    'context');
  return remote.$;
};

// ParamsSpec for DownloadImeFileTo
ash.ime.ime.mojom.mojom.PlatformAccessProvider_DownloadImeFileTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PlatformAccessProvider.DownloadImeFileTo_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'file_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.ime.ime.mojom.mojom.PlatformAccessProvider_DownloadImeFileTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.PlatformAccessProvider.DownloadImeFileTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.PlatformAccessProviderPtr = ash.ime.ime.mojom.mojom.PlatformAccessProviderRemote;
ash.ime.ime.mojom.mojom.PlatformAccessProviderRequest = ash.ime.ime.mojom.mojom.PlatformAccessProviderPendingReceiver;


// Interface: ImeService
ash.ime.ime.mojom.mojom.ImeService = {};

ash.ime.ime.mojom.mojom.ImeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.ImeServiceRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ImeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.ImeServicePendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.ImeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.ImeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPlatformAccessProvider(provider) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec,
      null,
      [provider]);
  }

  bindInputEngineManager(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.ime.mojom.mojom.ImeService_BindInputEngineManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindInputMethodUserDataService(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.ime.mojom.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec,
      null,
      [receiver]);
  }

};

ash.ime.ime.mojom.mojom.ImeService.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.ImeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ImeService',
    'context');
  return remote.$;
};

// ParamsSpec for SetPlatformAccessProvider
ash.ime.ime.mojom.mojom.ImeService_SetPlatformAccessProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.SetPlatformAccessProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindInputEngineManager
ash.ime.ime.mojom.mojom.ImeService_BindInputEngineManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.BindInputEngineManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindInputMethodUserDataService
ash.ime.ime.mojom.mojom.ImeService_BindInputMethodUserDataService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.ImeService.BindInputMethodUserDataService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.ImeServicePtr = ash.ime.ime.mojom.mojom.ImeServiceRemote;
ash.ime.ime.mojom.mojom.ImeServiceRequest = ash.ime.ime.mojom.mojom.ImeServicePendingReceiver;

