// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/render_accessibility.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: HitTestResponse
blink.mojom.HitTestResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HitTestResponse',
      packedSize: 40,
      fields: [
        { name: 'stitched_child_tree_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_frame_transformed_point', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_node_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: RenderAccessibilityHost
blink.mojom.RenderAccessibilityHost = {};

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
      null,
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

// ParamsSpec for HandleAXEvents
blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibilityHost.HandleAXEvents_Params',
      packedSize: 32,
      fields: [
        { name: 'events_and_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'location_and_scroll_updates', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reset_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleAXLocationChanges
blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibilityHost.HandleAXLocationChanges_Params',
      packedSize: 24,
      fields: [
        { name: 'changes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reset_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.RenderAccessibilityHostPtr = blink.mojom.RenderAccessibilityHostRemote;
blink.mojom.RenderAccessibilityHostRequest = blink.mojom.RenderAccessibilityHostPendingReceiver;


// Interface: RenderAccessibility
blink.mojom.RenderAccessibility = {};

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

// ParamsSpec for SetMode
blink.mojom.RenderAccessibility_SetMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.SetMode_Params',
      packedSize: 24,
      fields: [
        { name: 'ax_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reset_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FatalError
blink.mojom.RenderAccessibility_FatalError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.FatalError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HitTest
blink.mojom.RenderAccessibility_HitTest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.HitTest_Params',
      packedSize: 32,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'event_to_fire', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'request_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.HitTest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hit_test_response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PerformAction
blink.mojom.RenderAccessibility_PerformAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.PerformAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reset
blink.mojom.RenderAccessibility_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RenderAccessibility.Reset_Params',
      packedSize: 16,
      fields: [
        { name: 'reset_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.RenderAccessibilityPtr = blink.mojom.RenderAccessibilityRemote;
blink.mojom.RenderAccessibilityRequest = blink.mojom.RenderAccessibilityPendingReceiver;

