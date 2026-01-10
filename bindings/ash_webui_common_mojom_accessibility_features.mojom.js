// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accessibility_features.mojom
// Module: ash.common.mojom

'use strict';

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
};

ash.common.mojom.ForceHiddenElementsVisibleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onForceHiddenElementsVisibleChange(forceVisible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onForceHiddenElementsVisibleChange(params.forceVisible);
          break;
        }
      }
    });
  }
};

ash.common.mojom.ForceHiddenElementsVisibleObserverReceiver = ash.common.mojom.ForceHiddenElementsVisibleObserverReceiver;

ash.common.mojom.ForceHiddenElementsVisibleObserverPtr = ash.common.mojom.ForceHiddenElementsVisibleObserverRemote;
ash.common.mojom.ForceHiddenElementsVisibleObserverRequest = ash.common.mojom.ForceHiddenElementsVisibleObserverPendingReceiver;


// Interface: AccessibilityFeatures
mojo.internal.Struct(
    ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec, 'ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.common.mojom.ForceHiddenElementsVisibleObserverSpec), null, false, 0, undefined),
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
};

ash.common.mojom.AccessibilityFeaturesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeForceHiddenElementsVisible(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

ash.common.mojom.AccessibilityFeaturesReceiver = ash.common.mojom.AccessibilityFeaturesReceiver;

ash.common.mojom.AccessibilityFeaturesPtr = ash.common.mojom.AccessibilityFeaturesRemote;
ash.common.mojom.AccessibilityFeaturesRequest = ash.common.mojom.AccessibilityFeaturesPendingReceiver;

