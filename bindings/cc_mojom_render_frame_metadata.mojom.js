// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/render_frame_metadata.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: RootScrollOffsetUpdateFrequency
cc.mojom.RootScrollOffsetUpdateFrequency = {
  kNone: 0,
  kOnScrollEnd: 1,
  kAllUpdates: 2,
};
cc.mojom.RootScrollOffsetUpdateFrequencySpec = { $: mojo.internal.Enum() };

// Struct: DelegatedInkBrowserMetadata
cc.mojom.DelegatedInkBrowserMetadataSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.DelegatedInkBrowserMetadata',
      packedSize: 16,
      fields: [
        { name: 'delegated_ink_is_hovering', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RenderFrameMetadata
cc.mojom.RenderFrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadata',
      packedSize: 136,
      fields: [
        { name: 'root_background_color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'root_scroll_offset', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: true, minVersion: 0 },
        { name: 'is_scroll_offset_at_top', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selection', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.SelectionSpec, nullable: false, minVersion: 0 },
        { name: 'is_mobile_optimized', packedOffset: 120, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'delegated_ink_metadata', packedOffset: 24, packedBitOffset: 0, type: cc.mojom.DelegatedInkBrowserMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'viewport_size_in_pixels', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'local_surface_id', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'external_page_scale_factor', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_height', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_shown_ratio', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'new_vertical_scroll_direction', packedOffset: 92, packedBitOffset: 0, type: viz.mojom.VerticalScrollDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'primary_main_frame_item_sequence_number', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_height', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_shown_ratio', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_min_height_offset', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_min_height_offset', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'min_page_scale_factor', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'max_page_scale_factor', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'root_overflow_y_hidden', packedOffset: 120, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scrollable_viewport_size', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'root_layer_size', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'has_transparent_background', packedOffset: 120, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Interface: RenderFrameMetadataObserver
cc.mojom.RenderFrameMetadataObserver = {};

cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_Params',
      packedSize: 16,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.RootScrollOffsetUpdateFrequencySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for UpdateRootScrollOffsetUpdateFrequency
cc.mojom.RenderFrameMetadataObserver_UpdateRootScrollOffsetUpdateFrequency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver.UpdateRootScrollOffsetUpdateFrequency_Params',
      packedSize: 16,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.RootScrollOffsetUpdateFrequencySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAllFrameSubmissionsForTesting
cc.mojom.RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserver.ReportAllFrameSubmissionsForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cc.mojom.RenderFrameMetadataObserverPtr = cc.mojom.RenderFrameMetadataObserverRemote;
cc.mojom.RenderFrameMetadataObserverRequest = cc.mojom.RenderFrameMetadataObserverPendingReceiver;


// Interface: RenderFrameMetadataObserverClient
cc.mojom.RenderFrameMetadataObserverClient = {};

cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.RenderFrameMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'root_scroll_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

// ParamsSpec for OnRenderFrameMetadataChanged
cc.mojom.RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnRenderFrameMetadataChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.RenderFrameMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnFrameSubmissionForTesting
cc.mojom.RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnFrameSubmissionForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRootScrollOffsetChanged
cc.mojom.RenderFrameMetadataObserverClient_OnRootScrollOffsetChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.RenderFrameMetadataObserverClient.OnRootScrollOffsetChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'root_scroll_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cc.mojom.RenderFrameMetadataObserverClientPtr = cc.mojom.RenderFrameMetadataObserverClientRemote;
cc.mojom.RenderFrameMetadataObserverClientRequest = cc.mojom.RenderFrameMetadataObserverClientPendingReceiver;

