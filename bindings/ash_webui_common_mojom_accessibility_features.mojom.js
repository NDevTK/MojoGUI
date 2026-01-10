// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accessibility_features.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.common.mojom = ash.common.common.mojom || {};


// Interface: ForceHiddenElementsVisibleObserver
ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserver = {};

ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.ForceHiddenElementsVisibleObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverPendingReceiver,
      handle);
    this.$ = new ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onForceHiddenElementsVisibleChange(forceVisible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec,
      null,
      [forceVisible]);
  }

};

ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserver.getRemote = function() {
  let remote = new ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.ForceHiddenElementsVisibleObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnForceHiddenElementsVisibleChange
ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserver_OnForceHiddenElementsVisibleChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.ForceHiddenElementsVisibleObserver.OnForceHiddenElementsVisibleChange_Params',
      packedSize: 16,
      fields: [
        { name: 'forceVisible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverPtr = ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRemote;
ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverRequest = ash.common.common.mojom.mojom.ForceHiddenElementsVisibleObserverPendingReceiver;


// Interface: AccessibilityFeatures
ash.common.common.mojom.mojom.AccessibilityFeatures = {};

ash.common.common.mojom.mojom.AccessibilityFeaturesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.common.common.mojom.mojom.AccessibilityFeaturesRemote = class {
  static get $interfaceName() {
    return 'ash.common.mojom.AccessibilityFeatures';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.common.common.mojom.mojom.AccessibilityFeaturesPendingReceiver,
      handle);
    this.$ = new ash.common.common.mojom.mojom.AccessibilityFeaturesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.common.common.mojom.mojom.AccessibilityFeaturesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeForceHiddenElementsVisible(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.common.common.mojom.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec,
      ash.common.common.mojom.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec,
      [observer]);
  }

};

ash.common.common.mojom.mojom.AccessibilityFeatures.getRemote = function() {
  let remote = new ash.common.common.mojom.mojom.AccessibilityFeaturesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.common.mojom.AccessibilityFeatures',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveForceHiddenElementsVisible
ash.common.common.mojom.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AccessibilityFeatures.ObserveForceHiddenElementsVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.common.common.mojom.mojom.AccessibilityFeatures_ObserveForceHiddenElementsVisible_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.common.mojom.AccessibilityFeatures.ObserveForceHiddenElementsVisible_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'forceVisible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.common.common.mojom.mojom.AccessibilityFeaturesPtr = ash.common.common.mojom.mojom.AccessibilityFeaturesRemote;
ash.common.common.mojom.mojom.AccessibilityFeaturesRequest = ash.common.common.mojom.mojom.AccessibilityFeaturesPendingReceiver;

