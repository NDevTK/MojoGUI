// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/on_device_translation_service.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};


on_device_translation.mojom.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kOnDeviceTranslation;

on_device_translation.mojom.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kService;

on_device_translation.mojom.mojom.kOnDeviceTranslationSandbox = sandbox.mojom.Sandbox.kNoSandbox;

// Enum: CreateTranslatorResult
on_device_translation.mojom.mojom.CreateTranslatorResult = {
  kSuccess: 0,
  kErrorInvalidBinary: 1,
  kErrorInvalidFunctionPointer: 2,
  kErrorFailedToInitialize: 3,
  kErrorFailedToCreateTranslator: 4,
  kErrorInvalidVersion: 5,
};
on_device_translation.mojom.mojom.CreateTranslatorResultSpec = { $: mojo.internal.Enum() };

// Struct: OnDeviceTranslationLanguagePackage
on_device_translation.mojom.mojom.OnDeviceTranslationLanguagePackageSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationLanguagePackage',
      packedSize: 24,
      fields: [
        { name: 'language1', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language2', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OnDeviceTranslationServiceConfig
on_device_translation.mojom.mojom.OnDeviceTranslationServiceConfigSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationServiceConfig',
      packedSize: 24,
      fields: [
        { name: 'packages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(on_device_translation.mojom.OnDeviceTranslationLanguagePackageSpec, false), nullable: false, minVersion: 0 },
        { name: 'file_operation_proxy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: FileOperationProxy
on_device_translation.mojom.mojom.FileOperationProxy = {};

on_device_translation.mojom.mojom.FileOperationProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.mojom.FileOperationProxyRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.FileOperationProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.mojom.FileOperationProxyPendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.mojom.FileOperationProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.mojom.FileOperationProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fileExists(package_index, relative_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.mojom.FileOperationProxy_FileExists_ParamsSpec,
      on_device_translation.mojom.mojom.FileOperationProxy_FileExists_ResponseParamsSpec,
      [package_index, relative_path]);
  }

  open(package_index, relative_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.mojom.FileOperationProxy_Open_ParamsSpec,
      on_device_translation.mojom.mojom.FileOperationProxy_Open_ResponseParamsSpec,
      [package_index, relative_path]);
  }

};

on_device_translation.mojom.mojom.FileOperationProxy.getRemote = function() {
  let remote = new on_device_translation.mojom.mojom.FileOperationProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.FileOperationProxy',
    'context');
  return remote.$;
};

// ParamsSpec for FileExists
on_device_translation.mojom.mojom.FileOperationProxy_FileExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.FileExists_Params',
      packedSize: 24,
      fields: [
        { name: 'package_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_translation.mojom.mojom.FileOperationProxy_FileExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.FileExists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'exists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_directory', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Open
on_device_translation.mojom.mojom.FileOperationProxy_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.Open_Params',
      packedSize: 24,
      fields: [
        { name: 'package_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'relative_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_translation.mojom.mojom.FileOperationProxy_Open_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.Open_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_translation.mojom.mojom.FileOperationProxyPtr = on_device_translation.mojom.mojom.FileOperationProxyRemote;
on_device_translation.mojom.mojom.FileOperationProxyRequest = on_device_translation.mojom.mojom.FileOperationProxyPendingReceiver;


// Interface: OnDeviceTranslationService
on_device_translation.mojom.mojom.OnDeviceTranslationService = {};

on_device_translation.mojom.mojom.OnDeviceTranslationServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.mojom.OnDeviceTranslationServiceRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.OnDeviceTranslationService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.mojom.OnDeviceTranslationServicePendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.mojom.OnDeviceTranslationServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.mojom.OnDeviceTranslationServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setServiceConfig(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec,
      null,
      [config]);
  }

  createTranslator(source_lang, target_lang, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec,
      on_device_translation.mojom.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec,
      [source_lang, target_lang, receiver]);
  }

  canTranslate(source_lang, target_lang) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_translation.mojom.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec,
      on_device_translation.mojom.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec,
      [source_lang, target_lang]);
  }

};

on_device_translation.mojom.mojom.OnDeviceTranslationService.getRemote = function() {
  let remote = new on_device_translation.mojom.mojom.OnDeviceTranslationServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.OnDeviceTranslationService',
    'context');
  return remote.$;
};

// ParamsSpec for SetServiceConfig
on_device_translation.mojom.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.SetServiceConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: on_device_translation.mojom.OnDeviceTranslationServiceConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateTranslator
on_device_translation.mojom.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CreateTranslator_Params',
      packedSize: 32,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

on_device_translation.mojom.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CreateTranslator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: on_device_translation.mojom.CreateTranslatorResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CanTranslate
on_device_translation.mojom.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CanTranslate_Params',
      packedSize: 24,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

on_device_translation.mojom.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CanTranslate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_stranslate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
on_device_translation.mojom.mojom.OnDeviceTranslationServicePtr = on_device_translation.mojom.mojom.OnDeviceTranslationServiceRemote;
on_device_translation.mojom.mojom.OnDeviceTranslationServiceRequest = on_device_translation.mojom.mojom.OnDeviceTranslationServicePendingReceiver;

