// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/drive_suggestion.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};

file_suggestion.mojom.DriveSuggestionHandler = {};
file_suggestion.mojom.DriveSuggestionHandler.$interfaceName = 'file_suggestion.mojom.DriveSuggestionHandler';
file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec = { $: {} };
file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec = { $: {} };
file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec = { $: {} };
file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: DriveSuggestionHandler
mojo.internal.Struct(
    file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec, 'file_suggestion.mojom.DriveSuggestionHandler_GetFiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec, 'file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParams', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(file_suggestion.mojom.FileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec, 'file_suggestion.mojom.DriveSuggestionHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec, 'file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

file_suggestion.mojom.DriveSuggestionHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

file_suggestion.mojom.DriveSuggestionHandlerRemote = class {
  static get $interfaceName() {
    return 'file_suggestion.mojom.DriveSuggestionHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      file_suggestion.mojom.DriveSuggestionHandlerPendingReceiver,
      handle);
    this.$ = new file_suggestion.mojom.DriveSuggestionHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

file_suggestion.mojom.DriveSuggestionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFiles() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec,
      file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

file_suggestion.mojom.DriveSuggestionHandler.getRemote = function() {
  let remote = new file_suggestion.mojom.DriveSuggestionHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'file_suggestion.mojom.DriveSuggestionHandler',
    'context');
  return remote.$;
};

file_suggestion.mojom.DriveSuggestionHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const params = file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec.$.decode(message.payload);
          const result = this.impl.restoreModule();
          break;
        }
      }
    }});
  }
};

file_suggestion.mojom.DriveSuggestionHandlerReceiver = file_suggestion.mojom.DriveSuggestionHandlerReceiver;

file_suggestion.mojom.DriveSuggestionHandlerPtr = file_suggestion.mojom.DriveSuggestionHandlerRemote;
file_suggestion.mojom.DriveSuggestionHandlerRequest = file_suggestion.mojom.DriveSuggestionHandlerPendingReceiver;

