// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_data_model.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var components = components || {};
var components = components || {};
var url = url || {};

tabs_api.mojom.AlertStateSpec = { $: mojo.internal.Enum() };
tabs_api.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };
tabs_api.mojom.LayoutSpec = { $: mojo.internal.Enum() };
tabs_api.mojom.DataSpec = { $: {} };
tabs_api.mojom.ImageSpec = { $: {} };
tabs_api.mojom.TabSpec = { $: {} };
tabs_api.mojom.TabStripSpec = { $: {} };
tabs_api.mojom.PinnedTabsSpec = { $: {} };
tabs_api.mojom.UnpinnedTabsSpec = { $: {} };
tabs_api.mojom.TabGroupSpec = { $: {} };
tabs_api.mojom.TabGroupVisualDataSpec = { $: {} };
tabs_api.mojom.SplitTabSpec = { $: {} };
tabs_api.mojom.SplitTabVisualDataSpec = { $: {} };
tabs_api.mojom.ContainerSpec = { $: {} };
tabs_api.mojom.TabCreatedContainerSpec = { $: {} };

// Enum: AlertState
tabs_api.mojom.AlertState = {
  kAudioMuting: 0,
  kAudioRecording: 1,
  kAudioPlaying: 2,
  kBluetoothConnected: 3,
  kBluetoothScanActive: 4,
  kDesktopCapturing: 5,
  kActorAccessing: 6,
  kActorWaitingOnUser: 7,
  kGlicAccessing: 8,
  kGlicSharing: 9,
  kHidConnected: 10,
  kMediaRecording: 11,
  kPipPlaying: 12,
  kSerialConnected: 13,
  kTabCapturing: 14,
  kUsbConnected: 15,
  kVideoRecording: 16,
  kVrPresentingInHeadset: 17,
};

// Enum: NetworkState
tabs_api.mojom.NetworkState = {
  kNone: 0,
  kWaiting: 1,
  kLoading: 2,
  kError: 3,
};

// Enum: Layout
tabs_api.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};

// Union: Data
mojo.internal.Union(
    tabs_api.mojom.DataSpec, 'tabs_api.mojom.Data', {
      'tab': {
        'ordinal': 0,
        'type': tabs_api.mojom.TabSpec.$,
        'nullable': false,
      },
      'tab_strip': {
        'ordinal': 1,
        'type': tabs_api.mojom.TabStripSpec.$,
        'nullable': false,
      },
      'pinned_tabs': {
        'ordinal': 2,
        'type': tabs_api.mojom.PinnedTabsSpec.$,
        'nullable': false,
      },
      'unpinned_tabs': {
        'ordinal': 3,
        'type': tabs_api.mojom.UnpinnedTabsSpec.$,
        'nullable': false,
      },
      'tab_group': {
        'ordinal': 4,
        'type': tabs_api.mojom.TabGroupSpec.$,
        'nullable': false,
      },
      'split_tab': {
        'ordinal': 5,
        'type': tabs_api.mojom.SplitTabSpec.$,
        'nullable': false,
      },
    });

// Struct: Image
mojo.internal.Struct(
    tabs_api.mojom.ImageSpec, 'tabs_api.mojom.Image', [
      mojo.internal.StructField('data_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Tab
mojo.internal.Struct(
    tabs_api.mojom.TabSpec, 'tabs_api.mojom.Tab', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon', 24, 0, tabs_api.mojom.ImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alert_states', 32, 0, mojo.internal.Array(tabs_api.mojom.AlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('network_state', 40, 0, tabs_api.mojom.NetworkStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_active', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_selected', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_blocked', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: TabStrip
mojo.internal.Struct(
    tabs_api.mojom.TabStripSpec, 'tabs_api.mojom.TabStrip', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinnedTabs
mojo.internal.Struct(
    tabs_api.mojom.PinnedTabsSpec, 'tabs_api.mojom.PinnedTabs', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnpinnedTabs
mojo.internal.Struct(
    tabs_api.mojom.UnpinnedTabsSpec, 'tabs_api.mojom.UnpinnedTabs', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TabGroup
mojo.internal.Struct(
    tabs_api.mojom.TabGroupSpec, 'tabs_api.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, tabs_api.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabGroupVisualData
mojo.internal.Struct(
    tabs_api.mojom.TabGroupVisualDataSpec, 'tabs_api.mojom.TabGroupVisualData', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_collapsed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SplitTab
mojo.internal.Struct(
    tabs_api.mojom.SplitTabSpec, 'tabs_api.mojom.SplitTab', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, tabs_api.mojom.SplitTabVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SplitTabVisualData
mojo.internal.Struct(
    tabs_api.mojom.SplitTabVisualDataSpec, 'tabs_api.mojom.SplitTabVisualData', [
      mojo.internal.StructField('kVertical', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Container
mojo.internal.Struct(
    tabs_api.mojom.ContainerSpec, 'tabs_api.mojom.Container', [
      mojo.internal.StructField('data', 0, 0, tabs_api.mojom.DataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 8, 0, mojo.internal.Array(tabs_api.mojom.ContainerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabCreatedContainer
mojo.internal.Struct(
    tabs_api.mojom.TabCreatedContainerSpec, 'tabs_api.mojom.TabCreatedContainer', [
      mojo.internal.StructField('tab', 0, 0, tabs_api.mojom.TabSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, tabs_api.mojom.PositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
