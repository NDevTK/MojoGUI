// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/media_app_ui/media_app_ui.mojom
// Module: ash.media_app_ui.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.media_app_ui.mojom.PageHandlerRemote), null, false, 0, undefined),
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
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

ash.media_app_ui.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
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
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  toggleBrowserFullscreenMode() {
    return this.$.toggleBrowserFullscreenMode();
  }
  maybeTriggerPdfHats() {
    return this.$.maybeTriggerPdfHats();
  }
  isFileArcWritable(token) {
    return this.$.isFileArcWritable(token);
  }
  isFileBrowserWritable(token) {
    return this.$.isFileBrowserWritable(token);
  }
  editInPhotos(token, mime_type) {
    return this.$.editInPhotos(token, mime_type);
  }
  submitForm(url, payload, header) {
    return this.$.submitForm(url, payload, header);
  }
};

ash.media_app_ui.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  toggleBrowserFullscreenMode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ResponseParamsSpec,
      [],
      false);
  }

  maybeTriggerPdfHats() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ResponseParamsSpec,
      [],
      false);
  }

  isFileArcWritable(token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ResponseParamsSpec,
      [token],
      false);
  }

  isFileBrowserWritable(token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ResponseParamsSpec,
      [token],
      false);
  }

  editInPhotos(token, mime_type) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec,
      ash.media_app_ui.mojom.PageHandler_EditInPhotos_ResponseParamsSpec,
      [token, mime_type],
      false);
  }

  submitForm(url, payload, header) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ash.media_app_ui.mojom.PageHandlerReceiver = ash.media_app_ui.mojom.PageHandlerReceiver;

ash.media_app_ui.mojom.PageHandlerPtr = ash.media_app_ui.mojom.PageHandlerRemote;
ash.media_app_ui.mojom.PageHandlerRequest = ash.media_app_ui.mojom.PageHandlerPendingReceiver;

