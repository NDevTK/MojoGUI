// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/ntp_promo/ntp_promo.mojom
// Module: ntp_promo.mojom

'use strict';

// Module namespace
var ntp_promo = ntp_promo || {};
ntp_promo.mojom = ntp_promo.mojom || {};

ntp_promo.mojom.ShowNtpPromosResultSpec = { $: mojo.internal.Enum() };
ntp_promo.mojom.PromosShownSpec = { $: {} };
ntp_promo.mojom.PromoSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler = {};
ntp_promo.mojom.NtpPromoHandler.$interfaceName = 'ntp_promo.mojom.NtpPromoHandler';
ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoClient = {};
ntp_promo.mojom.NtpPromoClient.$interfaceName = 'ntp_promo.mojom.NtpPromoClient';
ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec = { $: {} };
ntp_promo.mojom.NtpPromoHandlerFactory = {};
ntp_promo.mojom.NtpPromoHandlerFactory.$interfaceName = 'ntp_promo.mojom.NtpPromoHandlerFactory';
ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec = { $: {} };

// Enum: ShowNtpPromosResult
ntp_promo.mojom.ShowNtpPromosResult = {
  kShown: 0,
  kNotShownNoPromos: 1,
  kNotShownDueToPolicy: 2,
};

// Struct: PromosShown
mojo.internal.Struct(
    ntp_promo.mojom.PromosShownSpec, 'ntp_promo.mojom.PromosShown', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('completed', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Promo
mojo.internal.Struct(
    ntp_promo.mojom.PromoSpec, 'ntp_promo.mojom.Promo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('body_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('button_text', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NtpPromoHandler
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_RequestPromos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_OnPromosShown_Params', [
      mojo.internal.StructField('eligible_shown', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('completed_shown', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_Params', [
      mojo.internal.StructField('promo_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_DisableSetupList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_Params', [
    ],
    [[0, 8]]);

ntp_promo.mojom.NtpPromoHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoHandlerPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPromos() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec,
      null,
      [],
      false);
  }

  onPromosShown(eligible_shown, completed_shown) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec,
      null,
      [eligible_shown, completed_shown],
      false);
  }

  onPromoClicked(promo_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  snoozeSetupList() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  unsnoozeSetupList() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  disableSetupList() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  undisableSetupList() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp_promo.mojom.NtpPromoHandler.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoHandler',
    'context');
  return remote.$;
};

ntp_promo.mojom.NtpPromoHandlerReceiver = class {
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
        
        // Try Method 0: RequestPromos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPromos (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPromosShown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPromosShown (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPromoClicked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPromoClicked (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SnoozeSetupList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SnoozeSetupList (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UnsnoozeSetupList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnsnoozeSetupList (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DisableSetupList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableSetupList (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UndisableSetupList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndisableSetupList (6)');
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
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPromos');
          const result = this.impl.requestPromos();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPromosShown');
          const result = this.impl.onPromosShown(params.eligible_shown, params.completed_shown);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPromoClicked');
          const result = this.impl.onPromoClicked(params.promo_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.snoozeSetupList');
          const result = this.impl.snoozeSetupList();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unsnoozeSetupList');
          const result = this.impl.unsnoozeSetupList();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableSetupList');
          const result = this.impl.disableSetupList();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.undisableSetupList');
          const result = this.impl.undisableSetupList();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp_promo.mojom.NtpPromoHandlerReceiver = ntp_promo.mojom.NtpPromoHandlerReceiver;

ntp_promo.mojom.NtpPromoHandlerPtr = ntp_promo.mojom.NtpPromoHandlerRemote;
ntp_promo.mojom.NtpPromoHandlerRequest = ntp_promo.mojom.NtpPromoHandlerPendingReceiver;


// Interface: NtpPromoClient
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec, 'ntp_promo.mojom.NtpPromoClient_SetPromos_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Array(ntp_promo.mojom.PromoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('completed', 8, 0, mojo.internal.Array(ntp_promo.mojom.PromoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

ntp_promo.mojom.NtpPromoClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoClientRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoClientPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPromos(eligible, completed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec,
      null,
      [eligible, completed],
      false);
  }

};

ntp_promo.mojom.NtpPromoClient.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoClient',
    'context');
  return remote.$;
};

ntp_promo.mojom.NtpPromoClientReceiver = class {
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
        
        // Try Method 0: SetPromos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPromos (0)');
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
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPromos');
          const result = this.impl.setPromos(params.eligible, params.completed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp_promo.mojom.NtpPromoClientReceiver = ntp_promo.mojom.NtpPromoClientReceiver;

ntp_promo.mojom.NtpPromoClientPtr = ntp_promo.mojom.NtpPromoClientRemote;
ntp_promo.mojom.NtpPromoClientRequest = ntp_promo.mojom.NtpPromoClientPendingReceiver;


// Interface: NtpPromoHandlerFactory
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(ntp_promo.mojom.NtpPromoClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ntp_promo.mojom.NtpPromoHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ntp_promo.mojom.NtpPromoHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ntp_promo.mojom.NtpPromoHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createNtpPromoHandler(client, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec,
      null,
      [client, handler],
      false);
  }

};

ntp_promo.mojom.NtpPromoHandlerFactory.getRemote = function() {
  let remote = new ntp_promo.mojom.NtpPromoHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp_promo.mojom.NtpPromoHandlerFactory',
    'context');
  return remote.$;
};

ntp_promo.mojom.NtpPromoHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreateNtpPromoHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNtpPromoHandler (0)');
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
          const params = decoder.decodeStruct(ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNtpPromoHandler');
          const result = this.impl.createNtpPromoHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryReceiver = ntp_promo.mojom.NtpPromoHandlerFactoryReceiver;

ntp_promo.mojom.NtpPromoHandlerFactoryPtr = ntp_promo.mojom.NtpPromoHandlerFactoryRemote;
ntp_promo.mojom.NtpPromoHandlerFactoryRequest = ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver;

