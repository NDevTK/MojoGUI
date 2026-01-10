// Auto-generated MojoJS binding
// Source: chromium_src/components/language_detection/content/common/language_detection.mojom
// Module: language_detection.mojom

'use strict';

// Module namespace
var language_detection = language_detection || {};
language_detection.mojom = language_detection.mojom || {};
var mojo_base = mojo_base || {};

language_detection.mojom.LanguageDetectionModelStatusSpec = { $: mojo.internal.Enum() };
language_detection.mojom.ContentLanguageDetectionDriver = {};
language_detection.mojom.ContentLanguageDetectionDriver.$interfaceName = 'language_detection.mojom.ContentLanguageDetectionDriver';
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ParamsSpec = { $: {} };
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParamsSpec = { $: {} };
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec = { $: {} };
language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec = { $: {} };

// Enum: LanguageDetectionModelStatus
language_detection.mojom.LanguageDetectionModelStatus = {
  kReadily: 0,
  kAfterDownload: 1,
  kNotAvailable: 2,
};

// Interface: ContentLanguageDetectionDriver
mojo.internal.Struct(
    language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ParamsSpec, 'language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParamsSpec, 'language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParams', [
      mojo.internal.StructField('model_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec, 'language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec, 'language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, language_detection.mojom.LanguageDetectionModelStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getLanguageDetectionModelStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec,
      language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec,
      [],
      false);
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

language_detection.mojom.ContentLanguageDetectionDriverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLanguageDetectionModel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModel_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLanguageDetectionModelStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, language_detection.mojom.ContentLanguageDetectionDriver_GetLanguageDetectionModelStatus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

language_detection.mojom.ContentLanguageDetectionDriverReceiver = language_detection.mojom.ContentLanguageDetectionDriverReceiver;

language_detection.mojom.ContentLanguageDetectionDriverPtr = language_detection.mojom.ContentLanguageDetectionDriverRemote;
language_detection.mojom.ContentLanguageDetectionDriverRequest = language_detection.mojom.ContentLanguageDetectionDriverPendingReceiver;

