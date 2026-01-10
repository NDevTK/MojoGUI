// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/on_device_translation_service.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

on_device_translation.mojom.CreateTranslatorResultSpec = { $: mojo.internal.Enum() };
on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy = {};
on_device_translation.mojom.FileOperationProxy.$interfaceName = 'on_device_translation.mojom.FileOperationProxy';
on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec = { $: {} };
on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService = {};
on_device_translation.mojom.OnDeviceTranslationService.$interfaceName = 'on_device_translation.mojom.OnDeviceTranslationService';
on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec = { $: {} };
on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec = { $: {} };

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kOnDeviceTranslation;

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kService;

on_device_translation.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Enum: CreateTranslatorResult
on_device_translation.mojom.CreateTranslatorResult = {
  kSuccess: 0,
  kErrorInvalidBinary: 1,
  kErrorInvalidFunctionPointer: 2,
  kErrorFailedToInitialize: 3,
  kErrorFailedToCreateTranslator: 4,
  kErrorInvalidVersion: 5,
};

// Struct: OnDeviceTranslationLanguagePackage
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec, 'on_device_translation.mojom.OnDeviceTranslationLanguagePackage', [
      mojo.internal.StructField('language1', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language2', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnDeviceTranslationServiceConfig
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec, 'on_device_translation.mojom.OnDeviceTranslationServiceConfig', [
      mojo.internal.StructField('packages', 0, 0, mojo.internal.Array(on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_operation_proxy', 8, 0, mojo.internal.InterfaceProxy(on_device_translation.mojom.FileOperationProxySpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileOperationProxy
mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec, 'on_device_translation.mojom.FileOperationProxy_FileExists_Params', [
      mojo.internal.StructField('relative_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec, 'on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParams', [
      mojo.internal.StructField('exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_directory', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec, 'on_device_translation.mojom.FileOperationProxy_Open_Params', [
      mojo.internal.StructField('relative_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('package_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec, 'on_device_translation.mojom.FileOperationProxy_Open_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.FileOperationProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.FileOperationProxyRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.FileOperationProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.FileOperationProxyPendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.FileOperationProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.FileOperationProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fileExists(package_index, relative_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec,
      on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec,
      [package_index, relative_path],
      false);
  }

  open(package_index, relative_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec,
      on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec,
      [package_index, relative_path],
      false);
  }

};

on_device_translation.mojom.FileOperationProxy.getRemote = function() {
  let remote = new on_device_translation.mojom.FileOperationProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.FileOperationProxy',
    'context');
  return remote.$;
};

on_device_translation.mojom.FileOperationProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fileExists(params.package_index, params.relative_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec.$.decode(message.payload);
          const result = this.impl.open(params.package_index, params.relative_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

on_device_translation.mojom.FileOperationProxyReceiver = on_device_translation.mojom.FileOperationProxyReceiver;

on_device_translation.mojom.FileOperationProxyPtr = on_device_translation.mojom.FileOperationProxyRemote;
on_device_translation.mojom.FileOperationProxyRequest = on_device_translation.mojom.FileOperationProxyPendingReceiver;


// Interface: OnDeviceTranslationService
mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_Params', [
      mojo.internal.StructField('config', 0, 0, on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_Params', [
      mojo.internal.StructField('source_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(on_device_translation.mojom.TranslatorRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, on_device_translation.mojom.CreateTranslatorResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_Params', [
      mojo.internal.StructField('source_lang', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec, 'on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParams', [
      mojo.internal.StructField('can_stranslate', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.OnDeviceTranslationServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.OnDeviceTranslationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.OnDeviceTranslationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.OnDeviceTranslationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServiceConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec,
      null,
      [config],
      false);
  }

  createTranslator(source_lang, target_lang, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec,
      [source_lang, target_lang, receiver],
      false);
  }

  canTranslate(source_lang, target_lang) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec,
      [source_lang, target_lang],
      false);
  }

};

on_device_translation.mojom.OnDeviceTranslationService.getRemote = function() {
  let remote = new on_device_translation.mojom.OnDeviceTranslationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.OnDeviceTranslationService',
    'context');
  return remote.$;
};

on_device_translation.mojom.OnDeviceTranslationServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setServiceConfig(params.config);
          break;
        }
        case 1: {
          const params = on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createTranslator(params.source_lang, params.target_lang, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.canTranslate(params.source_lang, params.target_lang);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

on_device_translation.mojom.OnDeviceTranslationServiceReceiver = on_device_translation.mojom.OnDeviceTranslationServiceReceiver;

on_device_translation.mojom.OnDeviceTranslationServicePtr = on_device_translation.mojom.OnDeviceTranslationServiceRemote;
on_device_translation.mojom.OnDeviceTranslationServiceRequest = on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver;

