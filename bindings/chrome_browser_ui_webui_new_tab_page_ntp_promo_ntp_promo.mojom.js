// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page/ntp_promo/ntp_promo.mojom
// Module: ntp_promo.mojom

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
  requestPromos() {
    return this.$.requestPromos();
  }
  onPromosShown(eligible_shown, completed_shown) {
    return this.$.onPromosShown(eligible_shown, completed_shown);
  }
  onPromoClicked(promo_id) {
    return this.$.onPromoClicked(promo_id);
  }
  snoozeSetupList() {
    return this.$.snoozeSetupList();
  }
  unsnoozeSetupList() {
    return this.$.unsnoozeSetupList();
  }
  disableSetupList() {
    return this.$.disableSetupList();
  }
  undisableSetupList() {
    return this.$.undisableSetupList();
  }
};

ntp_promo.mojom.NtpPromoHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NtpPromoHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestPromos() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec,
      null,
      [],
      false);
  }

  onPromosShown(eligible_shown, completed_shown) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec,
      null,
      [eligible_shown, completed_shown],
      false);
  }

  onPromoClicked(promo_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec,
      null,
      [promo_id],
      false);
  }

  snoozeSetupList() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  unsnoozeSetupList() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  disableSetupList() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec,
      null,
      [],
      false);
  }

  undisableSetupList() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NtpPromoHandler', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_RequestPromos_ParamsSpec.$.structSpec);
          const result = this.impl.requestPromos();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_OnPromosShown_ParamsSpec.$.structSpec);
          const result = this.impl.onPromosShown(params.eligible_shown, params.completed_shown);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_OnPromoClicked_ParamsSpec.$.structSpec);
          const result = this.impl.onPromoClicked(params.promo_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_SnoozeSetupList_ParamsSpec.$.structSpec);
          const result = this.impl.snoozeSetupList();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_UnsnoozeSetupList_ParamsSpec.$.structSpec);
          const result = this.impl.unsnoozeSetupList();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_DisableSetupList_ParamsSpec.$.structSpec);
          const result = this.impl.disableSetupList();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandler_UndisableSetupList_ParamsSpec.$.structSpec);
          const result = this.impl.undisableSetupList();
          break;
        }
      }
      } catch (err) {}
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
  setPromos(eligible, completed) {
    return this.$.setPromos(eligible, completed);
  }
};

ntp_promo.mojom.NtpPromoClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NtpPromoClient', [
      { explicit: null },
    ]);
  }

  setPromos(eligible, completed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NtpPromoClient', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoClient_SetPromos_ParamsSpec.$.structSpec);
          const result = this.impl.setPromos(params.eligible, params.completed);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp_promo.mojom.NtpPromoClientReceiver = ntp_promo.mojom.NtpPromoClientReceiver;

ntp_promo.mojom.NtpPromoClientPtr = ntp_promo.mojom.NtpPromoClientRemote;
ntp_promo.mojom.NtpPromoClientRequest = ntp_promo.mojom.NtpPromoClientPendingReceiver;


// Interface: NtpPromoHandlerFactory
mojo.internal.Struct(
    ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec, 'ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(ntp_promo.mojom.NtpPromoClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ntp_promo.mojom.NtpPromoHandlerRemote), null, false, 0, undefined),
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
  createNtpPromoHandler(client, handler) {
    return this.$.createNtpPromoHandler(client, handler);
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NtpPromoHandlerFactory', [
      { explicit: null },
    ]);
  }

  createNtpPromoHandler(client, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('NtpPromoHandlerFactory', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp_promo.mojom.NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createNtpPromoHandler(params.client, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp_promo.mojom.NtpPromoHandlerFactoryReceiver = ntp_promo.mojom.NtpPromoHandlerFactoryReceiver;

ntp_promo.mojom.NtpPromoHandlerFactoryPtr = ntp_promo.mojom.NtpPromoHandlerFactoryRemote;
ntp_promo.mojom.NtpPromoHandlerFactoryRequest = ntp_promo.mojom.NtpPromoHandlerFactoryPendingReceiver;

