// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accelerator_fetcher.mojom
// Module: ash.common.mojom

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};
var ui = ui || {};

ash.common.mojom.AcceleratorFetcherObserver = {};
ash.common.mojom.AcceleratorFetcherObserver.$interfaceName = 'ash.common.mojom.AcceleratorFetcherObserver';
ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher = {};
ash.common.mojom.AcceleratorFetcher.$interfaceName = 'ash.common.mojom.AcceleratorFetcher';
ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec = { $: {} };
ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec = { $: {} };

// Interface: AcceleratorFetcherObserver
mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec, 'ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_Params', [
      mojo.internal.StructField('actionId', 0, 0, ash.mojom.AcceleratorActionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerators', 8, 0, mojo.internal.Array(ash.mojom.StandardAcceleratorPropertiesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.common.mojom.AcceleratorFetcherObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.AcceleratorFetcherObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AcceleratorFetcherObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.AcceleratorFetcherObserverPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.AcceleratorFetcherObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAcceleratorsUpdated(actionId, accelerators) {
    return this.$.onAcceleratorsUpdated(actionId, accelerators);
  }
};

ash.common.mojom.AcceleratorFetcherObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorFetcherObserver', [
      { explicit: null },
    ]);
  }

  onAcceleratorsUpdated(actionId, accelerators) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec,
      null,
      [actionId, accelerators],
      false);
  }

};

ash.common.mojom.AcceleratorFetcherObserver.getRemote = function() {
  let remote = new ash.common.mojom.AcceleratorFetcherObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AcceleratorFetcherObserver',
    'context');
  return remote.$;
};

ash.common.mojom.AcceleratorFetcherObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorFetcherObserver', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcherObserver_OnAcceleratorsUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onAcceleratorsUpdated(params.actionId, params.accelerators);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.common.mojom.AcceleratorFetcherObserverReceiver = ash.common.mojom.AcceleratorFetcherObserverReceiver;

ash.common.mojom.AcceleratorFetcherObserverPtr = ash.common.mojom.AcceleratorFetcherObserverRemote;
ash.common.mojom.AcceleratorFetcherObserverRequest = ash.common.mojom.AcceleratorFetcherObserverPendingReceiver;


// Interface: AcceleratorFetcher
mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec, 'ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_Params', [
      mojo.internal.StructField('actionIds', 0, 0, mojo.internal.Array(ash.mojom.AcceleratorActionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(ash.common.mojom.AcceleratorFetcherObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec, 'ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec, 'ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParams', [
      mojo.internal.StructField('meta_key', 0, 0, ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.common.mojom.AcceleratorFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.AcceleratorFetcherRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AcceleratorFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.AcceleratorFetcherPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.AcceleratorFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeAcceleratorChanges(actionIds, observer) {
    return this.$.observeAcceleratorChanges(actionIds, observer);
  }
  getMetaKeyToDisplay() {
    return this.$.getMetaKeyToDisplay();
  }
};

ash.common.mojom.AcceleratorFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceleratorFetcher', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  observeAcceleratorChanges(actionIds, observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec,
      null,
      [actionIds, observer],
      false);
  }

  getMetaKeyToDisplay() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec,
      ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec,
      [],
      false);
  }

};

ash.common.mojom.AcceleratorFetcher.getRemote = function() {
  let remote = new ash.common.mojom.AcceleratorFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AcceleratorFetcher',
    'context');
  return remote.$;
};

ash.common.mojom.AcceleratorFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceleratorFetcher', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcher_ObserveAcceleratorChanges_ParamsSpec.$.structSpec);
          const result = this.impl.observeAcceleratorChanges(params.actionIds, params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ParamsSpec.$.structSpec);
          const result = this.impl.getMetaKeyToDisplay();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.common.mojom.AcceleratorFetcher_GetMetaKeyToDisplay_ResponseParamsSpec);
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

ash.common.mojom.AcceleratorFetcherReceiver = ash.common.mojom.AcceleratorFetcherReceiver;

ash.common.mojom.AcceleratorFetcherPtr = ash.common.mojom.AcceleratorFetcherRemote;
ash.common.mojom.AcceleratorFetcherRequest = ash.common.mojom.AcceleratorFetcherPendingReceiver;

