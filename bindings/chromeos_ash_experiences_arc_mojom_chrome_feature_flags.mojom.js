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
      mojo.internal.StructField('xdg_mode', 0, 4, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('enable_pip_double_tap', 0, 5, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('render_arc_notifications_by_chrome', 0, 6, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('game_dashboard', 0, 7, mojo.internal.Bool, false, false, 7, undefined),
      mojo.internal.StructField('resize_compat', 1, 0, mojo.internal.Bool, false, false, 8, undefined),
      mojo.internal.StructField('ignore_hover_event_anr', 1, 1, mojo.internal.Bool, false, false, 9, undefined),
      mojo.internal.StructField('extend_input_anr_timeout', 1, 2, mojo.internal.Bool, false, false, 10, undefined),
      mojo.internal.StructField('notification_width_increase', 1, 3, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('enable_friendlier_error_dialog', 1, 4, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('extend_service_anr_timeout', 1, 5, mojo.internal.Bool, false, false, 13, undefined),
      mojo.internal.StructField('extend_intent_anr_timeout', 1, 6, mojo.internal.Bool, false, false, 14, undefined),
    ],
    [[0, 16], [2, 16], [3, 24], [4, 16], [5, 16], [6, 16], [7, 16], [8, 16], [9, 16], [10, 16], [11, 16], [12, 16], [13, 16], [14, 16]]);

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

