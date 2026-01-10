// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/safe_browsing/safe_browsing.mojom
// Module: ntp.safe_browsing.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.safe_browsing = ntp.safe_browsing || {};
ntp.safe_browsing.mojom = ntp.safe_browsing.mojom || {};

ntp.safe_browsing.mojom.SafeBrowsingHandler = {};
ntp.safe_browsing.mojom.SafeBrowsingHandler.$interfaceName = 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec = { $: {} };
ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec = { $: {} };

// Interface: SafeBrowsingHandler
mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParams', [
      mojo.internal.StructField('show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec, 'ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver,
      handle);
    this.$ = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canShowModule() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec,
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec,
      [],
      false);
  }

  processModuleClick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec,
      null,
      [],
      false);
  }

  dismissModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp.safe_browsing.mojom.SafeBrowsingHandler.getRemote = function() {
  let remote = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.safe_browsing.mojom.SafeBrowsingHandler',
    'context');
  return remote.$;
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: CanShowModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanShowModule (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ProcessModuleClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessModuleClick (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.canShowModule');
          const result = this.impl.canShowModule();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processModuleClick');
          const result = this.impl.processModuleClick();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec.$, message.header.headerSize);
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

ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver = ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver;

ntp.safe_browsing.mojom.SafeBrowsingHandlerPtr = ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote;
ntp.safe_browsing.mojom.SafeBrowsingHandlerRequest = ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver;

