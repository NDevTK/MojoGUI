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
arc.mojom.RoundedWindowCompatStrategySpec = { $: mojo.internal.Enum() };

// Struct: FeatureFlags
arc.mojom.FeatureFlagsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.FeatureFlags',
      packedSize: 24,
      fields: [
        { name: 'deprecated_qs_revamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'jelly_colors', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'deprecated_trackpad_scroll_touchscreen_emulation', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
        { name: 'touchscreen_emulation', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
        { name: 'rounded_window_compat_strategy', packedOffset: 4, packedBitOffset: 0, type: arc.mojom.RoundedWindowCompatStrategySpec, nullable: false, minVersion: 3 },
        { name: 'rounded_window_radius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 3 },
        { name: 'xdg_mode', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 4 },
        { name: 'enable_pip_double_tap', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
        { name: 'render_arc_notifications_by_chrome', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'game_dashboard', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 7 },
        { name: 'resize_compat', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 8 },
        { name: 'ignore_hover_event_anr', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 9 },
        { name: 'extend_input_anr_timeout', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 10 },
        { name: 'notification_width_increase', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 11 },
        { name: 'enable_friendlier_error_dialog', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 12 },
        { name: 'extend_service_anr_timeout', packedOffset: 1, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 13 },
        { name: 'extend_intent_anr_timeout', packedOffset: 1, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 14 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 16}, {version: 3, packedSize: 24}, {version: 4, packedSize: 24}, {version: 5, packedSize: 24}, {version: 6, packedSize: 24}, {version: 7, packedSize: 24}, {version: 8, packedSize: 24}, {version: 9, packedSize: 24}, {version: 10, packedSize: 24}, {version: 11, packedSize: 24}, {version: 12, packedSize: 24}, {version: 13, packedSize: 24}, {version: 14, packedSize: 24}]
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

  notifyFeatureFlags(flags) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec,
      null,
      [flags]);
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

// ParamsSpec for NotifyFeatureFlags
arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ChromeFeatureFlagsInstance.NotifyFeatureFlags_Params',
      packedSize: 16,
      fields: [
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.FeatureFlagsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ChromeFeatureFlagsInstancePtr = arc.mojom.ChromeFeatureFlagsInstanceRemote;
arc.mojom.ChromeFeatureFlagsInstanceRequest = arc.mojom.ChromeFeatureFlagsInstancePendingReceiver;

