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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: GetFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFiles (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFiles');
          const result = this.impl.getFiles();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, file_suggestion.mojom.MicrosoftFilesPageHandler_GetFiles_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(file_suggestion.mojom.MicrosoftFilesPageHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.restoreModule');
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

file_suggestion.mojom.MicrosoftFilesPageHandlerReceiver = file_suggestion.mojom.MicrosoftFilesPageHandlerReceiver;

file_suggestion.mojom.MicrosoftFilesPageHandlerPtr = file_suggestion.mojom.MicrosoftFilesPageHandlerRemote;
file_suggestion.mojom.MicrosoftFilesPageHandlerRequest = file_suggestion.mojom.MicrosoftFilesPageHandlerPendingReceiver;

