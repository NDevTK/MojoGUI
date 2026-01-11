// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/network_health/public/mojom/network_health.mojom
// Module: chromeos.network_health.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromeos = chromeos || {};
chromeos.network_health = chromeos.network_health || {};
chromeos.network_health.mojom = chromeos.network_health.mojom || {};

chromeos.network_health.mojom.NetworkEventsObserver = {};
chromeos.network_health.mojom.NetworkEventsObserver.$interfaceName = 'chromeos.network_health.mojom.NetworkEventsObserver';
chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService = {};
chromeos.network_health.mojom.NetworkHealthService.$interfaceName = 'chromeos.network_health.mojom.NetworkHealthService';
chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec = { $: {} };
chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec = { $: {} };

// Interface: NetworkEventsObserver
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, chromeos.network_health.mojom.NetworkStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 8, 0, chromeos.network_health.mojom.UInt32ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec, 'chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_Params', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkEventsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnectionStateChanged(guid, state) {
    return this.$.onConnectionStateChanged(guid, state);
  }
  onSignalStrengthChanged(guid, signal_strength) {
    return this.$.onSignalStrengthChanged(guid, signal_strength);
  }
  onNetworkListChanged(networks) {
    return this.$.onNetworkListChanged(networks);
  }
};

chromeos.network_health.mojom.NetworkEventsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkEventsObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onConnectionStateChanged(guid, state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec,
      null,
      [guid, state],
      false);
  }

  onSignalStrengthChanged(guid, signal_strength) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec,
      null,
      [guid, signal_strength],
      false);
  }

  onNetworkListChanged(networks) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec,
      null,
      [networks],
      false);
  }

};

chromeos.network_health.mojom.NetworkEventsObserver.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkEventsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkEventsObserver',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkEventsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkEventsObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnConnectionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onConnectionStateChanged(params.guid, params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnSignalStrengthChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSignalStrengthChanged(params.guid, params.signal_strength);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkEventsObserver_OnNetworkListChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkListChanged(params.networks);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.network_health.mojom.NetworkEventsObserverReceiver = chromeos.network_health.mojom.NetworkEventsObserverReceiver;

chromeos.network_health.mojom.NetworkEventsObserverPtr = chromeos.network_health.mojom.NetworkEventsObserverRemote;
chromeos.network_health.mojom.NetworkEventsObserverRequest = chromeos.network_health.mojom.NetworkEventsObserverPendingReceiver;


// Interface: NetworkHealthService
mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.network_health.mojom.NetworkEventsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParams', [
      mojo.internal.StructField('networks', 0, 0, mojo.internal.Array(chromeos.network_health.mojom.NetworkSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_health.mojom.NetworkHealthStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec, 'chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParams', [
      mojo.internal.StructField('guids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.network_health.mojom.NetworkHealthServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.network_health.mojom.NetworkHealthService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.network_health.mojom.NetworkHealthServicePendingReceiver,
      handle);
    this.$ = new chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  getNetworkList() {
    return this.$.getNetworkList();
  }
  getHealthSnapshot() {
    return this.$.getHealthSnapshot();
  }
  getRecentlyActiveNetworks() {
    return this.$.getRecentlyActiveNetworks();
  }
};

chromeos.network_health.mojom.NetworkHealthServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NetworkHealthService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getNetworkList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec,
      [],
      false);
  }

  getHealthSnapshot() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec,
      [],
      false);
  }

  getRecentlyActiveNetworks() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec,
      chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec,
      [],
      false);
  }

};

chromeos.network_health.mojom.NetworkHealthService.getRemote = function() {
  let remote = new chromeos.network_health.mojom.NetworkHealthServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.network_health.mojom.NetworkHealthService',
    'context');
  return remote.$;
};

chromeos.network_health.mojom.NetworkHealthServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NetworkHealthService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ParamsSpec.$.structSpec);
          const result = this.impl.getNetworkList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetNetworkList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ParamsSpec.$.structSpec);
          const result = this.impl.getHealthSnapshot();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetHealthSnapshot_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ParamsSpec.$.structSpec);
          const result = this.impl.getRecentlyActiveNetworks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.network_health.mojom.NetworkHealthService_GetRecentlyActiveNetworks_ResponseParamsSpec);
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

chromeos.network_health.mojom.NetworkHealthServiceReceiver = chromeos.network_health.mojom.NetworkHealthServiceReceiver;

chromeos.network_health.mojom.NetworkHealthServicePtr = chromeos.network_health.mojom.NetworkHealthServiceRemote;
chromeos.network_health.mojom.NetworkHealthServiceRequest = chromeos.network_health.mojom.NetworkHealthServicePendingReceiver;

