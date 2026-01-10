// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.media_app_ui.mojom = ash.media_app_ui.media_app_ui.mojom || {};
var blink = blink || {};
var url = url || {};


// Interface: PageHandlerFactory
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactory = {};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryPtr = ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryRequest = ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler = {};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.media_app_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openFeedbackDialog() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      []);
  }

  toggleBrowserFullscreenMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec,
      null,
      []);
  }

  maybeTriggerPdfHats() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec,
      null,
      []);
  }

  isFileArcWritable(token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileArcWritable_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec,
      [token]);
  }

  isFileBrowserWritable(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec,
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec,
      [token]);
  }

  editInPhotos(token, mime_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_EditInPhotos_ParamsSpec,
      null,
      [token, mime_type]);
  }

  submitForm(url, payload, header) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_SubmitForm_ParamsSpec,
      null,
      [url, payload, header]);
  }

};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.media_app_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OpenFeedbackDialog
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = {
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

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.OpenFeedbackDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleBrowserFullscreenMode
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec = {
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
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec = {
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
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileArcWritable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileArcWritable_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileArcWritable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'writable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsFileBrowserWritable
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileBrowserWritable_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.IsFileBrowserWritable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'writable', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EditInPhotos
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_EditInPhotos_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.EditInPhotos_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SubmitForm
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandler_SubmitForm_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.media_app_ui.mojom.PageHandler.SubmitForm_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'payload', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int8, false), nullable: false, minVersion: 0 },
        { name: 'header', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerPtr = ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRemote;
ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerRequest = ash.media_app_ui.media_app_ui.mojom.mojom.PageHandlerPendingReceiver;

