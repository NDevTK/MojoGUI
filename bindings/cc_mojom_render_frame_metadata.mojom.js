// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_frame_metadata.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

cc.mojom.RootScrollOffsetUpdateFrequencySpec = { $: mojo.internal.Enum() };
cc.mojom.DelegatedInkBrowserMetadataSpec = { $: {} };
cc.mojom.RenderFrameMetadataSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserver = {};
cc.mojom.RenderFrameMetadataObserver.$interfaceName = 'cc.mojom.RenderFrameMetadataObserver';
cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient = {};
cc.mojom.RenderFrameMetadataObserverClient.$interfaceName = 'cc.mojom.RenderFrameMetadataObserverClient';
cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec = { $: {} };
cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec = { $: {} };

// Enum: RootScrollOffsetUpdateFrequency
cc.mojom.RootScrollOffsetUpdateFrequency = {
  kNone: 0,
  kOnScrollEnd: 1,
  kAllUpdates: 2,
};

// Struct: DelegatedInkBrowserMetadata
mojo.internal.Struct(
    cc.mojom.DelegatedInkBrowserMetadataSpec, 'cc.mojom.DelegatedInkBrowserMetadata', [
      mojo.internal.StructField('delegated_ink_is_hovering', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RenderFrameMetadata
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataSpec, 'cc.mojom.RenderFrameMetadata', [
      mojo.internal.StructField('root_background_color', 0, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('root_scroll_offset', 8, 0, gfx.mojom.PointFSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_scroll_offset_at_top', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('selection', 16, 0, viz.mojom.SelectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_mobile_optimized', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('delegated_ink_metadata', 24, 0, cc.mojom.DelegatedInkBrowserMetadataSpec, null, true, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('viewport_size_in_pixels', 32, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 40, 0, viz.mojom.LocalSurfaceIdSpec, null, true, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 76, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('external_page_scale_factor', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_height', 84, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_shown_ratio', 88, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('new_vertical_scroll_direction', 92, 0, viz.mojom.VerticalScrollDirectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('primary_main_frame_item_sequence_number', 48, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_height', 96, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_shown_ratio', 100, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('top_controls_min_height_offset', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_controls_min_height_offset', 108, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('min_page_scale_factor', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_page_scale_factor', 116, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('root_overflow_y_hidden', 120, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scrollable_viewport_size', 56, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('root_layer_size', 64, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('has_transparent_background', 120, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);

// Interface: RenderFrameMetadataObserver
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_Params', [
      mojo.internal.StructField('frequency', 0, 0, cc.mojom.RootScrollOffsetUpdateFrequencySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cc.mojom.RenderFrameMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cc.mojom.RenderFrameMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateRootScrollOffsetUpdateFrequency(frequency) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec,
      null,
      [frequency]);
  }

  reportAllFrameSubmissionsForTesting(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec,
      null,
      [enabled]);
  }

};

cc.mojom.RenderFrameMetadataObserver.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserver',
    'context');
  return remote.$;
};

cc.mojom.RenderFrameMetadataObserverPtr = cc.mojom.RenderFrameMetadataObserverRemote;
cc.mojom.RenderFrameMetadataObserverRequest = cc.mojom.RenderFrameMetadataObserverPendingReceiver;


// Interface: RenderFrameMetadataObserverClient
mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params', [
      mojo.internal.StructField('frame_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('metadata', 0, 0, cc.mojom.RenderFrameMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params', [
      mojo.internal.StructField('frame_token', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec, 'cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_Params', [
      mojo.internal.StructField('root_scroll_offset', 0, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

cc.mojom.RenderFrameMetadataObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemote = class {
  static get $interfaceName() {
    return 'cc.mojom.RenderFrameMetadataObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cc.mojom.RenderFrameMetadataObserverClientPendingReceiver,
      handle);
    this.$ = new cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cc.mojom.RenderFrameMetadataObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRenderFrameMetadataChanged(frame_token, metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec,
      null,
      [frame_token, metadata]);
  }

  onFrameSubmissionForTesting(frame_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec,
      null,
      [frame_token]);
  }

  onRootScrollOffsetChanged(root_scroll_offset) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec,
      null,
      [root_scroll_offset]);
  }

};

cc.mojom.RenderFrameMetadataObserverClient.getRemote = function() {
  let remote = new cc.mojom.RenderFrameMetadataObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cc.mojom.RenderFrameMetadataObserverClient',
    'context');
  return remote.$;
};

cc.mojom.RenderFrameMetadataObserverClientPtr = cc.mojom.RenderFrameMetadataObserverClientRemote;
cc.mojom.RenderFrameMetadataObserverClientRequest = cc.mojom.RenderFrameMetadataObserverClientPendingReceiver;

