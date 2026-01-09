// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accessibility_features.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: ForceHiddenElementsVisibleObserver
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
      ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec.$,
      null,
      [forceVisible]);
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
}};

// ParamsSpec for OnForceHiddenElementsVisibleChange
ash.common.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ForceHiddenElementsVisibleObserver.OnForceHiddenElementsVisibleChange_Params',
      packedSize: 16,
      fields: [
        { name: 'forceVisible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.common.mojom.ForceHiddenElementsVisibleObserverPtr = ash.common.mojom.ForceHiddenElementsVisibleObserverRemote;
ash.common.mojom.ForceHiddenElementsVisibleObserverRequest = ash.common.mojom.ForceHiddenElementsVisibleObserverPendingReceiver;


// Interface: AccessibilityFeatures
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
      ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec.$,
      ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec.$,
      [observer]);
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
}};

// ParamsSpec for ObserveForceHiddenElementsVisible
ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AccessibilityFeatures.ObserveForceHiddenElementsVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.common.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AccessibilityFeatures.ObserveForceHiddenElementsVisible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'forceVisible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.common.mojom.AccessibilityFeaturesPtr = ash.common.mojom.AccessibilityFeaturesRemote;
ash.common.mojom.AccessibilityFeaturesRequest = ash.common.mojom.AccessibilityFeaturesPendingReceiver;

