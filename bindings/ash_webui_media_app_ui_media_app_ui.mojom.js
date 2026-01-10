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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ToggleBrowserFullscreenMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleBrowserFullscreenMode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MaybeTriggerPdfHats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeTriggerPdfHats (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsFileArcWritable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsFileArcWritable (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: IsFileBrowserWritable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsFileBrowserWritable (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: EditInPhotos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EditInPhotos (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SubmitForm
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitForm (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_ToggleBrowserFullscreenMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleBrowserFullscreenMode');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_MaybeTriggerPdfHats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.maybeTriggerPdfHats');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_IsFileArcWritable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isFileArcWritable');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_IsFileBrowserWritable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isFileBrowserWritable');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_EditInPhotos_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.editInPhotos');
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
          const params = decoder.decodeStruct(ash.media_app_ui.mojom.PageHandler_SubmitForm_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.submitForm');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.media_app_ui.mojom.PageHandlerReceiver = ash.media_app_ui.mojom.PageHandlerReceiver;

ash.media_app_ui.mojom.PageHandlerPtr = ash.media_app_ui.mojom.PageHandlerRemote;
ash.media_app_ui.mojom.PageHandlerRequest = ash.media_app_ui.mojom.PageHandlerPendingReceiver;

