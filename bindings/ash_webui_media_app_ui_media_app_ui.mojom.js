// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui.mojom
// Module: ash.media_app_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.media_app_ui = ash.media_app_ui || {};
ash.media_app_ui.mojom = ash.media_app_ui.mojom || {};
var blink = blink || {};
var url = url || {};

ash.media_app_ui.mojom.PageHandlerFactory = {};
ash.media_app_ui.mojom.PageHandlerFactory.$interfaceName = 'ash.media_app_ui.mojom.PageHandlerFactory';
ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler = {};
ash.media_app_ui.mojom.PageHandler.$interfaceName = 'ash.media_app_ui.mojom.PageHandler';
ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec = { $: {} };
ash.media_app_ui.mojom.PageHandler_SubmitForm_ResponseParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [handler],
      false);
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

ash.media_app_ui.mojom.PageHandlerFactoryReceiver = class {
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
          const params = ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
    });
  }
};

ash.media_app_ui.mojom.PageHandlerFactoryReceiver = ash.media_app_ui.mojom.PageHandlerFactoryReceiver;

ash.media_app_ui.mojom.PageHandlerFactoryPtr = ash.media_app_ui.mojom.PageHandlerFactoryRemote;
ash.media_app_ui.mojom.PageHandlerFactoryRequest = ash.media_app_ui.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParams', [
      mojo.internal.StructField('writable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParams', [
      mojo.internal.StructField('writable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_EditInPhotos_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec, 'ash.media_app_ui.mojom.PageHandler_SubmitForm_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payload', 8, 0, mojo.internal.Array(mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('header', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.media_app_ui.mojom.PageHandler_SubmitForm_ResponseParamsSpec, 'ash.media_app_ui.mojom.PageHandler_SubmitForm_ResponseParams', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  toggleBrowserFullscreenMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParamsSpec,
      [],
      false);
  }

  maybeTriggerPdfHats() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParamsSpec,
      [],
      false);
  }

  isFileArcWritable(token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec,
      [token],
      false);
  }

  isFileBrowserWritable(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec,
      [token],
      false);
  }

  editInPhotos(token, mime_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParamsSpec,
      [token, mime_type],
      false);
  }

  submitForm(url, payload, header) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_SubmitForm_ResponseParamsSpec,
      [url, payload, header],
      false);
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

ash.media_app_ui.mojom.PageHandlerReceiver = class {
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
          const params = ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFeedbackDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleBrowserFullscreenMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.maybeTriggerPdfHats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isFileArcWritable(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isFileBrowserWritable(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec.$.decode(message.payload);
          const result = this.impl.editInPhotos(params.token, params.mime_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec.$.decode(message.payload);
          const result = this.impl.submitForm(params.url, params.payload, params.header);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.media_app_ui.mojom.PageHandler_SubmitForm_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.media_app_ui.mojom.PageHandlerReceiver = ash.media_app_ui.mojom.PageHandlerReceiver;

ash.media_app_ui.mojom.PageHandlerPtr = ash.media_app_ui.mojom.PageHandlerRemote;
ash.media_app_ui.mojom.PageHandlerRequest = ash.media_app_ui.mojom.PageHandlerPendingReceiver;

