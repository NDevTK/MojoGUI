// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/safe_browsing/safe_browsing.mojom
// Module: ntp.safe_browsing.mojom

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
  canShowModule() {
    return this.$.canShowModule();
  }
  processModuleClick() {
    return this.$.processModuleClick();
  }
  dismissModule() {
    return this.$.dismissModule();
  }
  restoreModule() {
    return this.$.restoreModule();
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SafeBrowsingHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  canShowModule() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec,
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec,
      [],
      false);
  }

  processModuleClick() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec,
      null,
      [],
      false);
  }

  dismissModule() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SafeBrowsingHandler', [
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
             decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec.$.structSpec);
          const result = this.impl.processModuleClick();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec.$.structSpec);
          const result = this.impl.dismissModule();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec.$.structSpec);
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver = ntp.safe_browsing.mojom.SafeBrowsingHandlerReceiver;

ntp.safe_browsing.mojom.SafeBrowsingHandlerPtr = ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote;
ntp.safe_browsing.mojom.SafeBrowsingHandlerRequest = ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver;

