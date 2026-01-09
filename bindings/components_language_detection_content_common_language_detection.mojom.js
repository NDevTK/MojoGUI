// Auto-generated MojoJS binding
// Source: chromium_src/components/language_detection/content/common/language_detection.mojom
// Module: language_detection.mojom

'use strict';

// Module namespace
var language_detection = language_detection || {};
language_detection.mojom = language_detection.mojom || {};


// Enum: LanguageDetectionModelStatus
language_detection.mojom.LanguageDetectionModelStatus = {
  kReadily: 0,
  kAfterDownload: 1,
  kNotAvailable: 2,
};

// Interface: ContentLanguageDetectionDriver
language_detection.mojom.ContentLanguageDetectionDriver = {};

language_detection.mojom.ContentLanguageDetectionDriverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

language_detection.mojom.ContentLanguageDetectionDriverRemote = class {
  static get $interfaceName() {
    return 'language_detection.mojom.ContentLanguageDetectionDriver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      language_detection.mojom.ContentLanguageDetectionDriverPendingReceiver,
      handle);
    this.$ = new language_detection.mojom.ContentLanguageDetectionDriverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

language_detection.mojom.ContentLanguageDetectionDriverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getLanguageDetectionModel() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ParamsSpec,
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParamsSpec,
      []);
  }

  getLanguageDetectionModelStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec,
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec,
      []);
  }

};

language_detection.mojom.ContentLanguageDetectionDriver.getRemote = function() {
  let remote = new language_detection.mojom.ContentLanguageDetectionDriverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'language_detection.mojom.ContentLanguageDetectionDriver',
    'context');
  return remote.$;
};

// ParamsSpec for GetLanguageDetectionModel
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'language_detection.mojom.ContentLanguageDetectionDriver.GetLanguageDetectionModel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'language_detection.mojom.ContentLanguageDetectionDriver.GetLanguageDetectionModel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'model_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLanguageDetectionModelStatus
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'language_detection.mojom.ContentLanguageDetectionDriver.GetLanguageDetectionModelStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'language_detection.mojom.ContentLanguageDetectionDriver.GetLanguageDetectionModelStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: language_detection.mojom.LanguageDetectionModelStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
language_detection.mojom.ContentLanguageDetectionDriverPtr = language_detection.mojom.ContentLanguageDetectionDriverRemote;
language_detection.mojom.ContentLanguageDetectionDriverRequest = language_detection.mojom.ContentLanguageDetectionDriverPendingReceiver;

