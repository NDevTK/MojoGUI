// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};


// Interface: PageHandlerFactory
ash.media_app_ui.mojom.PageHandlerFactory = {};

ash.media_app_ui.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      null,
      [handler],
      undefined,
      undefined
    );
  }

};

ash.media_app_ui.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.mojom.PageHandlerFactoryPtr = ash.media_app_ui.mojom.PageHandlerFactoryRemote;
ash.media_app_ui.mojom.PageHandlerFactoryRequest = ash.media_app_ui.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.media_app_ui.mojom.PageHandler = {};

ash.media_app_ui.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFeedbackDialog() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  toggleBrowserFullscreenMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  maybeTriggerPdfHats() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  isFileArcWritable(token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec,
      [token],
      undefined,
      undefined
    );
  }

  isFileBrowserWritable(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec,
      [token],
      undefined,
      undefined
    );
  }

  editInPhotos(token, mime_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec,
      null,
      null,
      [token, mime_type],
      undefined,
      undefined
    );
  }

  submitForm(url, payload, header) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec,
      null,
      null,
      [url, payload, header],
      undefined,
      undefined
    );
  }

};

ash.media_app_ui.mojom.PageHandler.getRemote = function() {
  let remote = new ash.media_app_ui.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OpenFeedbackDialog
ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.OpenFeedbackDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleBrowserFullscreenMode
ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.ToggleBrowserFullscreenMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MaybeTriggerPdfHats
ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.MaybeTriggerPdfHats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsFileArcWritable
ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileArcWritable_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileArcWritable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'writable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsFileBrowserWritable
ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileBrowserWritable_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileBrowserWritable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'writable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EditInPhotos
ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.EditInPhotos_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SubmitForm
ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.SubmitForm_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'payload', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'header', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.mojom.PageHandlerPtr = ash.media_app_ui.mojom.PageHandlerRemote;
ash.media_app_ui.mojom.PageHandlerRequest = ash.media_app_ui.mojom.PageHandlerPendingReceiver;

