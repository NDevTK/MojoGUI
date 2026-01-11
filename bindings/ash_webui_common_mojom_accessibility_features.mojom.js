// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accessibility_features.mojom
// Module: ash.common.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};

ash.common.mojom.ForceHiddenElementsVisibleObserver = {};
ash.common.mojom.ForceHiddenElementsVisibleObserver.$interfaceName = 'ash.common.mojom.ForceHiddenElementsVisibleObserver';
ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec = { $: {} };
ash.common.mojom.AccessibilityFeatures = {};
ash.common.mojom.AccessibilityFeatures.$interfaceName = 'ash.common.mojom.AccessibilityFeatures';
ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec = { $: {} };
ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec = { $: {} };

// Interface: ForceHiddenElementsVisibleObserver
mojo.internal.Struct(
    ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec, 'ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_Params', [
      mojo.internal.StructField('forceVisible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.common.mojom.ForceHiddenElementsVisibleObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.ForceHiddenElementsVisibleObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ForceHiddenElementsVisibleObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.ForceHiddenElementsVisibleObserverPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.ForceHiddenElementsVisibleObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onForceHiddenElementsVisibleChange(forceVisible) {
    return this.$.onForceHiddenElementsVisibleChange(forceVisible);
  }
};

ash.common.mojom.ForceHiddenElementsVisibleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ForceHiddenElementsVisibleObserver', [
      { explicit: null },
    ]);
  }

  onForceHiddenElementsVisibleChange(forceVisible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec,
      null,
      [forceVisible],
      false);
  }

};

ash.common.mojom.ForceHiddenElementsVisibleObserver.getRemote = function() {
  let remote = new ash.common.mojom.ForceHiddenElementsVisibleObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ForceHiddenElementsVisibleObserver',
    'context');
  return remote.$;
};

ash.common.mojom.ForceHiddenElementsVisibleObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ForceHiddenElementsVisibleObserver', [
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
             decoder.decodeStructInline(ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec.$.structSpec);
          const result = this.impl.onForceHiddenElementsVisibleChange(params.forceVisible);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.common.mojom.ForceHiddenElementsVisibleObserverReceiver = ash.common.mojom.ForceHiddenElementsVisibleObserverReceiver;

ash.common.mojom.ForceHiddenElementsVisibleObserverPtr = ash.common.mojom.ForceHiddenElementsVisibleObserverRemote;
ash.common.mojom.ForceHiddenElementsVisibleObserverRequest = ash.common.mojom.ForceHiddenElementsVisibleObserverPendingReceiver;


// Interface: AccessibilityFeatures
mojo.internal.Struct(
    ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec, 'ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.common.mojom.ForceHiddenElementsVisibleObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec, 'ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParams', [
      mojo.internal.StructField('forceVisible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.common.mojom.AccessibilityFeaturesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.mojom.AccessibilityFeaturesRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AccessibilityFeatures';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.mojom.AccessibilityFeaturesPendingReceiver,
      handle);
    this.$ = new ash.common.mojom.AccessibilityFeaturesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  observeForceHiddenElementsVisible(observer) {
    return this.$.observeForceHiddenElementsVisible(observer);
  }
};

ash.common.mojom.AccessibilityFeaturesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AccessibilityFeatures', [
      { explicit: null },
    ]);
  }

  observeForceHiddenElementsVisible(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec,
      ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec,
      [observer],
      false);
  }

};

ash.common.mojom.AccessibilityFeatures.getRemote = function() {
  let remote = new ash.common.mojom.AccessibilityFeaturesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AccessibilityFeatures',
    'context');
  return remote.$;
};

ash.common.mojom.AccessibilityFeaturesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AccessibilityFeatures', [
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
             decoder.decodeStructInline(ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec.$.structSpec);
          const result = this.impl.observeForceHiddenElementsVisible(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

ash.common.mojom.AccessibilityFeaturesReceiver = ash.common.mojom.AccessibilityFeaturesReceiver;

ash.common.mojom.AccessibilityFeaturesPtr = ash.common.mojom.AccessibilityFeaturesRemote;
ash.common.mojom.AccessibilityFeaturesRequest = ash.common.mojom.AccessibilityFeaturesPendingReceiver;

