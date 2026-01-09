// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/chrome_feature_flags.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: RoundedWindowCompatStrategy
arc.mojom.RoundedWindowCompatStrategy = {
  kBottomOnlyGesture: 0,
  kLeftRightBottomGesture: 1,
};

// Struct: FeatureFlags
arc.mojom.FeatureFlagsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FeatureFlags',
      packedSize: 16,
      fields: [
        { name: 'deprecated_qs_revamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'jelly_colors', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ChromeFeatureFlagsInstance
arc.mojom.ChromeFeatureFlagsInstance = {};

arc.mojom.ChromeFeatureFlagsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ChromeFeatureFlagsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ChromeFeatureFlagsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ChromeFeatureFlagsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ChromeFeatureFlagsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ChromeFeatureFlagsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.ChromeFeatureFlagsInstance.getRemote = function() {
  let remote = new arc.mojom.ChromeFeatureFlagsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ChromeFeatureFlagsInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.ChromeFeatureFlagsInstancePtr = arc.mojom.ChromeFeatureFlagsInstanceRemote;
arc.mojom.ChromeFeatureFlagsInstanceRequest = arc.mojom.ChromeFeatureFlagsInstancePendingReceiver;

