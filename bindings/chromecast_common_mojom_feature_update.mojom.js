// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_update.mojom
// Module: chromecast.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.FeatureUpdateObserver = {};
chromecast.mojom.FeatureUpdateObserver.$interfaceName = 'chromecast.mojom.FeatureUpdateObserver';
chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec = { $: {} };
chromecast.mojom.FeatureUpdateService = {};
chromecast.mojom.FeatureUpdateService.$interfaceName = 'chromecast.mojom.FeatureUpdateService';
chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec = { $: {} };

// Interface: FeatureUpdateObserver
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec, 'chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_Params', [
      mojo.internal.StructField('features', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.FeatureUpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFeaturesUpdated(features) {
    return this.$.onFeaturesUpdated(features);
  }
};

chromecast.mojom.FeatureUpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeatureUpdateObserver', [
      { explicit: null },
    ]);
  }

  onFeaturesUpdated(features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec,
      null,
      [features],
      false);
  }

};

chromecast.mojom.FeatureUpdateObserver.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateObserver',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FeatureUpdateObserver', [
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
             decoder.decodeStructInline(chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.FeatureUpdateObserver_OnFeaturesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onFeaturesUpdated(params.features);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.FeatureUpdateObserverReceiver = chromecast.mojom.FeatureUpdateObserverReceiver;

chromecast.mojom.FeatureUpdateObserverPtr = chromecast.mojom.FeatureUpdateObserverRemote;
chromecast.mojom.FeatureUpdateObserverRequest = chromecast.mojom.FeatureUpdateObserverPendingReceiver;


// Interface: FeatureUpdateService
mojo.internal.Struct(
    chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec, 'chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.FeatureUpdateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.FeatureUpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.FeatureUpdateServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.FeatureUpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.FeatureUpdateServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.FeatureUpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerFeatureUpdateObserver(observer) {
    return this.$.registerFeatureUpdateObserver(observer);
  }
};

chromecast.mojom.FeatureUpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeatureUpdateService', [
      { explicit: null },
    ]);
  }

  registerFeatureUpdateObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.mojom.FeatureUpdateService.getRemote = function() {
  let remote = new chromecast.mojom.FeatureUpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.FeatureUpdateService',
    'context');
  return remote.$;
};

chromecast.mojom.FeatureUpdateServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FeatureUpdateService', [
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
             decoder.decodeStructInline(chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.FeatureUpdateService_RegisterFeatureUpdateObserver_ParamsSpec.$.structSpec);
          const result = this.impl.registerFeatureUpdateObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.FeatureUpdateServiceReceiver = chromecast.mojom.FeatureUpdateServiceReceiver;

chromecast.mojom.FeatureUpdateServicePtr = chromecast.mojom.FeatureUpdateServiceRemote;
chromecast.mojom.FeatureUpdateServiceRequest = chromecast.mojom.FeatureUpdateServicePendingReceiver;

