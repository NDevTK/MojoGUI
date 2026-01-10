// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/chrome_feature_flags.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.RoundedWindowCompatStrategySpec = { $: mojo.internal.Enum() };
arc.mojom.FeatureFlagsSpec = { $: {} };
arc.mojom.ChromeFeatureFlagsInstance = {};
arc.mojom.ChromeFeatureFlagsInstance.$interfaceName = 'arc.mojom.ChromeFeatureFlagsInstance';
arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec = { $: {} };

// Enum: RoundedWindowCompatStrategy
arc.mojom.RoundedWindowCompatStrategy = {
  kDisabled: 0,
  kBottomOnlyGesture: 1,
  kLeftRightBottomGesture: 2,
};

// Struct: FeatureFlags
mojo.internal.Struct(
    arc.mojom.FeatureFlagsSpec, 'arc.mojom.FeatureFlags', [
      mojo.internal.StructField('deprecated_qs_revamp', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('jelly_colors', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deprecated_trackpad_scroll_touchscreen_emulation', 0, 2, mojo.internal.Bool, false, false, 2, undefined),
      mojo.internal.StructField('touchscreen_emulation', 0, 3, mojo.internal.Bool, false, false, 2, undefined),
      mojo.internal.StructField('rounded_window_compat_strategy', 4, 0, arc.mojom.RoundedWindowCompatStrategySpec, null, false, 3, undefined),
      mojo.internal.StructField('rounded_window_radius', 8, 0, mojo.internal.Int32, 0, false, 3, undefined),
      mojo.internal.StructField('xdg_mode', 12, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('enable_pip_double_tap', 12, 1, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('render_arc_notifications_by_chrome', 12, 2, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('game_dashboard', 12, 3, mojo.internal.Bool, false, false, 7, undefined),
      mojo.internal.StructField('resize_compat', 12, 4, mojo.internal.Bool, false, false, 8, undefined),
      mojo.internal.StructField('ignore_hover_event_anr', 12, 5, mojo.internal.Bool, false, false, 9, undefined),
      mojo.internal.StructField('extend_input_anr_timeout', 12, 6, mojo.internal.Bool, false, false, 10, undefined),
      mojo.internal.StructField('notification_width_increase', 12, 7, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('enable_friendlier_error_dialog', 13, 0, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('extend_service_anr_timeout', 13, 1, mojo.internal.Bool, false, false, 13, undefined),
      mojo.internal.StructField('extend_intent_anr_timeout', 13, 2, mojo.internal.Bool, false, false, 14, undefined),
    ],
    [[0, 16], [2, 16], [3, 24], [4, 24], [5, 24], [6, 24], [7, 24], [8, 24], [9, 24], [10, 24], [11, 24], [12, 24], [13, 24], [14, 24]]);

// Interface: ChromeFeatureFlagsInstance
mojo.internal.Struct(
    arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec, 'arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_Params', [
      mojo.internal.StructField('flags', 0, 0, arc.mojom.FeatureFlagsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

arc.mojom.ChromeFeatureFlagsInstancePtr = arc.mojom.ChromeFeatureFlagsInstanceRemote;
arc.mojom.ChromeFeatureFlagsInstanceRequest = arc.mojom.ChromeFeatureFlagsInstancePendingReceiver;

