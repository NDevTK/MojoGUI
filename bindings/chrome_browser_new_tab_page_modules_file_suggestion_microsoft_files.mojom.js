// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/microsoft_files.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};

file_suggestion.mojom.MicrosoftFilesPageHandler = {};
file_suggestion.mojom.MicrosoftFilesPageHandler.$interfaceName = 'file_suggestion.mojom.MicrosoftFilesPageHandler';
file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec = { $: {} };
file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec = { $: {} };
file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec = { $: {} };
file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: MicrosoftFilesPageHandler
mojo.internal.Struct(
    file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec, 'file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec, 'file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParams', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(file_suggestion.mojom.FileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec, 'file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec, 'file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

file_suggestion.mojom.MicrosoftFilesPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

file_suggestion.mojom.MicrosoftFilesPageHandlerRemote = class {
  static get $interfaceName() {
    return 'file_suggestion.mojom.MicrosoftFilesPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      file_suggestion.mojom.MicrosoftFilesPageHandlerPendingReceiver,
      handle);
    this.$ = new file_suggestion.mojom.MicrosoftFilesPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

file_suggestion.mojom.MicrosoftFilesPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFiles() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec,
      file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

file_suggestion.mojom.MicrosoftFilesPageHandler.getRemote = function() {
  let remote = new file_suggestion.mojom.MicrosoftFilesPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'file_suggestion.mojom.MicrosoftFilesPageHandler',
    'context');
  return remote.$;
};

file_suggestion.mojom.MicrosoftFilesPageHandlerReceiver = class {
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
          const params = file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const params = file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreModule();
          break;
        }
      }
    });
  }
};

file_suggestion.mojom.MicrosoftFilesPageHandlerReceiver = file_suggestion.mojom.MicrosoftFilesPageHandlerReceiver;

file_suggestion.mojom.MicrosoftFilesPageHandlerPtr = file_suggestion.mojom.MicrosoftFilesPageHandlerRemote;
file_suggestion.mojom.MicrosoftFilesPageHandlerRequest = file_suggestion.mojom.MicrosoftFilesPageHandlerPendingReceiver;

