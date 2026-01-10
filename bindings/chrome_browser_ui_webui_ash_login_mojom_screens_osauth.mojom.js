// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_osauth.mojom
// Module: ash.screens_osauth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_osauth = ash.screens_osauth || {};
ash.screens_osauth.mojom = ash.screens_osauth.mojom || {};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandler = {};
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.$interfaceName = 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler';
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec = { $: {} };
ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec = { $: {} };

// Interface: LocalDataLossWarningPageHandler
mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec, 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_Params', [
    ],
    [[0, 8]]);

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPowerwash() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec,
      null,
      [],
      false);
  }

  onRecreateUser() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec,
      null,
      [],
      false);
  }

  onCancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onBack() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandler.getRemote = function() {
  let remote = new ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler',
    'context');
  return remote.$;
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPowerwash
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPowerwash (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnRecreateUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRecreateUser (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCancel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBack (3)');
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
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnPowerwash_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onPowerwash');
          const result = this.impl.onPowerwash();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnRecreateUser_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onRecreateUser');
          const result = this.impl.onRecreateUser();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnCancel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onCancel');
          const result = this.impl.onCancel();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.screens_osauth.mojom.LocalDataLossWarningPageHandler_OnBack_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBack');
          const result = this.impl.onBack();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerReceiver;

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPtr = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRemote;
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRequest = ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPendingReceiver;

