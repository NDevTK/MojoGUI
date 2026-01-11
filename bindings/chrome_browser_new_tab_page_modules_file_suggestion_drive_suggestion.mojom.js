// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/file_suggestion/drive_suggestion.mojom
// Module: file_suggestion.mojom

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
  getFiles() {
    return this.$.getFiles();
  }
  dismissModule() {
    return this.$.dismissModule();
  }
  restoreModule() {
    return this.$.restoreModule();
  }
};

file_suggestion.mojom.DriveSuggestionHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DriveSuggestionHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getFiles() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec,
      file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ResponseParamsSpec,
      [],
      false);
  }

  dismissModule() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DriveSuggestionHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_GetFiles_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_DismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.dismissModule();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(file_suggestion.mojom.DriveSuggestionHandler_RestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

file_suggestion.mojom.DriveSuggestionHandlerReceiver = file_suggestion.mojom.DriveSuggestionHandlerReceiver;

file_suggestion.mojom.DriveSuggestionHandlerPtr = file_suggestion.mojom.DriveSuggestionHandlerRemote;
file_suggestion.mojom.DriveSuggestionHandlerRequest = file_suggestion.mojom.DriveSuggestionHandlerPendingReceiver;

