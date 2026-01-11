// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/office_fallback/office_fallback.mojom
// Module: ash.office_fallback.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.office_fallback = ash.office_fallback || {};
ash.office_fallback.mojom = ash.office_fallback.mojom || {};

ash.office_fallback.mojom.DialogChoiceSpec = { $: mojo.internal.Enum() };
ash.office_fallback.mojom.PageHandlerFactory = {};
ash.office_fallback.mojom.PageHandlerFactory.$interfaceName = 'ash.office_fallback.mojom.PageHandlerFactory';
ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.office_fallback.mojom.PageHandler = {};
ash.office_fallback.mojom.PageHandler.$interfaceName = 'ash.office_fallback.mojom.PageHandler';
ash.office_fallback.mojom.PageHandler_Close_ParamsSpec = { $: {} };

// Enum: DialogChoice
ash.office_fallback.mojom.DialogChoice = {
  kCancel: 0,
  kOk: 1,
  kQuickOffice: 2,
  kTryAgain: 3,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.office_fallback.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.office_fallback.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.office_fallback.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.office_fallback.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

ash.office_fallback.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.office_fallback.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.office_fallback.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.office_fallback.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.office_fallback.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.office_fallback.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.office_fallback.mojom.PageHandlerFactoryReceiver = ash.office_fallback.mojom.PageHandlerFactoryReceiver;

ash.office_fallback.mojom.PageHandlerFactoryPtr = ash.office_fallback.mojom.PageHandlerFactoryRemote;
ash.office_fallback.mojom.PageHandlerFactoryRequest = ash.office_fallback.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.office_fallback.mojom.PageHandler_Close_ParamsSpec, 'ash.office_fallback.mojom.PageHandler_Close_Params', [
      mojo.internal.StructField('choice', 0, 0, ash.office_fallback.mojom.DialogChoiceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.office_fallback.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.office_fallback.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.office_fallback.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.office_fallback.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.office_fallback.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  close(choice) {
    return this.$.close(choice);
  }
};

ash.office_fallback.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
    ]);
  }

  close(choice) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.office_fallback.mojom.PageHandler_Close_ParamsSpec,
      null,
      [choice],
      false);
  }

};

ash.office_fallback.mojom.PageHandler.getRemote = function() {
  let remote = new ash.office_fallback.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.office_fallback.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.office_fallback.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(ash.office_fallback.mojom.PageHandler_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.office_fallback.mojom.PageHandler_Close_ParamsSpec.$.structSpec);
          const result = this.impl.close(params.choice);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.office_fallback.mojom.PageHandlerReceiver = ash.office_fallback.mojom.PageHandlerReceiver;

ash.office_fallback.mojom.PageHandlerPtr = ash.office_fallback.mojom.PageHandlerRemote;
ash.office_fallback.mojom.PageHandlerRequest = ash.office_fallback.mojom.PageHandlerPendingReceiver;

