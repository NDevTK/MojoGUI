// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/drive_suggestion.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};


// Interface: DriveSuggestionHandler
file_suggestion.mojom.DriveSuggestionHandler = {};

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
      []);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetFiles
file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.DriveSuggestionHandler.GetFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.DriveSuggestionHandler.GetFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(file_suggestion.mojom.FileSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DismissModule
file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.DriveSuggestionHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestoreModule
file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.DriveSuggestionHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
file_suggestion.mojom.DriveSuggestionHandlerPtr = file_suggestion.mojom.DriveSuggestionHandlerRemote;
file_suggestion.mojom.DriveSuggestionHandlerRequest = file_suggestion.mojom.DriveSuggestionHandlerPendingReceiver;

