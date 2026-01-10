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
      mojo.internal.StructField('touchscreen_emulation', 0, 3, mojo.internal.Bool, true, false, 2, undefined),
      mojo.internal.StructField('rounded_window_compat_strategy', 8, 0, arc.mojom.RoundedWindowCompatStrategySpec.$, null, false, 3, undefined),
      mojo.internal.StructField('rounded_window_radius', 16, 0, mojo.internal.Int32, 0, false, 3, undefined),
      mojo.internal.StructField('xdg_mode', 20, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('enable_pip_double_tap', 20, 1, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('render_arc_notifications_by_chrome', 20, 2, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('game_dashboard', 20, 3, mojo.internal.Bool, false, false, 7, undefined),
      mojo.internal.StructField('resize_compat', 20, 4, mojo.internal.Bool, false, false, 8, undefined),
      mojo.internal.StructField('ignore_hover_event_anr', 20, 5, mojo.internal.Bool, false, false, 9, undefined),
      mojo.internal.StructField('extend_input_anr_timeout', 20, 6, mojo.internal.Bool, false, false, 10, undefined),
      mojo.internal.StructField('notification_width_increase', 20, 7, mojo.internal.Bool, false, false, 11, undefined),
      mojo.internal.StructField('enable_friendlier_error_dialog', 21, 0, mojo.internal.Bool, false, false, 12, undefined),
      mojo.internal.StructField('extend_service_anr_timeout', 21, 1, mojo.internal.Bool, false, false, 13, undefined),
      mojo.internal.StructField('extend_intent_anr_timeout', 21, 2, mojo.internal.Bool, false, false, 14, undefined),
    ],
    [[0, 16], [2, 16], [3, 32], [4, 32], [5, 32], [6, 32], [7, 32], [8, 32], [9, 32], [10, 32], [11, 32], [12, 32], [13, 32], [14, 32]]);

// Interface: ChromeFeatureFlagsInstance
mojo.internal.Struct(
    arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec, 'arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_Params', [
      mojo.internal.StructField('flags', 0, 0, arc.mojom.FeatureFlagsSpec.$, null, false, 0, undefined),
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
      [flags],
      false);
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

arc.mojom.ChromeFeatureFlagsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: NotifyFeatureFlags
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyFeatureFlags (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ChromeFeatureFlagsInstance_NotifyFeatureFlags_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyFeatureFlags');
          const result = this.impl.notifyFeatureFlags(params.flags);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ChromeFeatureFlagsInstanceReceiver = arc.mojom.ChromeFeatureFlagsInstanceReceiver;

arc.mojom.ChromeFeatureFlagsInstancePtr = arc.mojom.ChromeFeatureFlagsInstanceRemote;
arc.mojom.ChromeFeatureFlagsInstanceRequest = arc.mojom.ChromeFeatureFlagsInstancePendingReceiver;

