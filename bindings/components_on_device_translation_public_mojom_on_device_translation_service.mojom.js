// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/on_device_translation_service.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};


// Enum: CreateTranslatorResult
on_device_translation.mojom.CreateTranslatorResult = {
  kSuccess: 0,
  kErrorInvalidBinary: 1,
  kErrorInvalidFunctionPointer: 2,
  kErrorFailedToInitialize: 3,
  kErrorFailedToCreateTranslator: 4,
  kErrorInvalidVersion: 5,
};

// Interface: FileOperationProxy
on_device_translation.mojom.FileOperationProxy = {};

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
      [package_index, relative_path]);
  }

  open(package_index, relative_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec,
      on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec,
      [package_index, relative_path]);
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

// ParamsSpec for FileExists
on_device_translation.mojom.FileOperationProxy_FileExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.FileExists_Params',
      packedSize: 24,
      fields: [
        { name: 'package_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'relative_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_translation.mojom.FileOperationProxy_FileExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.FileExists_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'exists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_directory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Open
on_device_translation.mojom.FileOperationProxy_Open_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.Open_Params',
      packedSize: 24,
      fields: [
        { name: 'package_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'relative_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_translation.mojom.FileOperationProxy_Open_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.FileOperationProxy.Open_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_translation.mojom.FileOperationProxyPtr = on_device_translation.mojom.FileOperationProxyRemote;
on_device_translation.mojom.FileOperationProxyRequest = on_device_translation.mojom.FileOperationProxyPendingReceiver;


// Interface: OnDeviceTranslationService
on_device_translation.mojom.OnDeviceTranslationService = {};

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
      [config]);
  }

  createTranslator(source_lang, target_lang, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec,
      [source_lang, target_lang, receiver]);
  }

  canTranslate(source_lang, target_lang) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec,
      on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec,
      [source_lang, target_lang]);
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

// ParamsSpec for SetServiceConfig
on_device_translation.mojom.OnDeviceTranslationService_SetServiceConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.SetServiceConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateTranslator
on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CreateTranslator_Params',
      packedSize: 32,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_translation.mojom.OnDeviceTranslationService_CreateTranslator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CreateTranslator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CanTranslate
on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CanTranslate_Params',
      packedSize: 24,
      fields: [
        { name: 'source_lang', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

on_device_translation.mojom.OnDeviceTranslationService_CanTranslate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'on_device_translation.mojom.OnDeviceTranslationService.CanTranslate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_stranslate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
on_device_translation.mojom.OnDeviceTranslationServicePtr = on_device_translation.mojom.OnDeviceTranslationServiceRemote;
on_device_translation.mojom.OnDeviceTranslationServiceRequest = on_device_translation.mojom.OnDeviceTranslationServicePendingReceiver;

