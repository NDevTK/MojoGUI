// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/render_accessibility.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var blink = blink || {};

blink.mojom.HitTestResponseSpec = { $: {} };
blink.mojom.RenderAccessibilityHost = {};
blink.mojom.RenderAccessibilityHost.$interfaceName = 'blink.mojom.RenderAccessibilityHost';
blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec = { $: {} };
blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility = {};
blink.mojom.RenderAccessibility.$interfaceName = 'blink.mojom.RenderAccessibility';
blink.mojom.RenderAccessibility_SetMode_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_FatalError_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_HitTest_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_PerformAction_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_Reset_ParamsSpec = { $: {} };

// Struct: HitTestResponse
mojo.internal.Struct(
    blink.mojom.HitTestResponseSpec, 'blink.mojom.HitTestResponse', [
      mojo.internal.StructField('stitched_child_tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('hit_frame_token', 16, 0, blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('hit_frame_transformed_point', 32, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('hit_node_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: RenderAccessibilityHost
mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXEvents_Params', [
      mojo.internal.StructField('events_and_updates', 0, 0, ax.mojom.AXUpdatesAndEventsSpec, null, false, 0, undefined),
      mojo.internal.StructField('location_and_scroll_updates', 8, 0, ax.mojom.AXLocationAndScrollUpdatesSpec, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_Params', [
      mojo.internal.StructField('changes', 0, 0, ax.mojom.AXLocationAndScrollUpdatesSpec, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.RenderAccessibilityHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderAccessibilityHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderAccessibilityHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderAccessibilityHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderAccessibilityHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RenderAccessibilityHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec,
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec,
      [events_and_updates, location_and_scroll_updates, reset_token]);
  }

  handleAXLocationChanges(changes, reset_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec,
      null,
      [changes, reset_token]);
  }

};

blink.mojom.RenderAccessibilityHost.getRemote = function() {
  let remote = new blink.mojom.RenderAccessibilityHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderAccessibilityHost',
    'context');
  return remote.$;
};

blink.mojom.RenderAccessibilityHostPtr = blink.mojom.RenderAccessibilityHostRemote;
blink.mojom.RenderAccessibilityHostRequest = blink.mojom.RenderAccessibilityHostPendingReceiver;


// Interface: RenderAccessibility
mojo.internal.Struct(
    blink.mojom.RenderAccessibility_SetMode_ParamsSpec, 'blink.mojom.RenderAccessibility_SetMode_Params', [
      mojo.internal.StructField('ax_mode', 0, 0, ax.mojom.AXModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_FatalError_ParamsSpec, 'blink.mojom.RenderAccessibility_FatalError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_HitTest_ParamsSpec, 'blink.mojom.RenderAccessibility_HitTest_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_to_fire', 8, 0, ax.mojom.EventSpec, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec, 'blink.mojom.RenderAccessibility_HitTest_ResponseParams', [
      mojo.internal.StructField('hit_test_response', 0, 0, blink.mojom.HitTestResponseSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_PerformAction_ParamsSpec, 'blink.mojom.RenderAccessibility_PerformAction_Params', [
      mojo.internal.StructField('action_data', 0, 0, ax.mojom.AXActionDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_Reset_ParamsSpec, 'blink.mojom.RenderAccessibility_Reset_Params', [
      mojo.internal.StructField('reset_token', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RenderAccessibilityPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderAccessibilityRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderAccessibility';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderAccessibilityPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderAccessibilityRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RenderAccessibilityRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMode(ax_mode, reset_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RenderAccessibility_SetMode_ParamsSpec,
      null,
      [ax_mode, reset_token]);
  }

  fatalError() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RenderAccessibility_FatalError_ParamsSpec,
      null,
      []);
  }

  hitTest(point, event_to_fire, request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RenderAccessibility_HitTest_ParamsSpec,
      blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec,
      [point, event_to_fire, request_id]);
  }

  performAction(action_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RenderAccessibility_PerformAction_ParamsSpec,
      null,
      [action_data]);
  }

  reset(reset_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.RenderAccessibility_Reset_ParamsSpec,
      null,
      [reset_token]);
  }

};

blink.mojom.RenderAccessibility.getRemote = function() {
  let remote = new blink.mojom.RenderAccessibilityRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderAccessibility',
    'context');
  return remote.$;
};

blink.mojom.RenderAccessibilityPtr = blink.mojom.RenderAccessibilityRemote;
blink.mojom.RenderAccessibilityRequest = blink.mojom.RenderAccessibilityPendingReceiver;

