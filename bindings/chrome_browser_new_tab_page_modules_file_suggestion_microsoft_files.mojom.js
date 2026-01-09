// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/microsoft_files.mojom
// Module: file_suggestion.mojom

'use strict';

// Module namespace
var file_suggestion = file_suggestion || {};
file_suggestion.mojom = file_suggestion.mojom || {};


// Interface: MicrosoftFilesPageHandler
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
      file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec.$,
      file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec.$,
      []);
  }

  dismissModule() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec.$,
      null,
      []);
  }

  restoreModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for GetFiles
file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.MicrosoftFilesPageHandler.GetFiles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.MicrosoftFilesPageHandler.GetFiles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DismissModule
file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.MicrosoftFilesPageHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RestoreModule
file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'file_suggestion.mojom.MicrosoftFilesPageHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
file_suggestion.mojom.MicrosoftFilesPageHandlerPtr = file_suggestion.mojom.MicrosoftFilesPageHandlerRemote;
file_suggestion.mojom.MicrosoftFilesPageHandlerRequest = file_suggestion.mojom.MicrosoftFilesPageHandlerPendingReceiver;

