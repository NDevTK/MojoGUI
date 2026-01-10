// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_api_data_model.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


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
tabs_api.mojom.AlertStateSpec = { $: mojo.internal.Enum() };

// Enum: NetworkState
tabs_api.mojom.NetworkState = {
  kNone: 0,
  kWaiting: 1,
  kLoading: 2,
  kError: 3,
};
tabs_api.mojom.NetworkStateSpec = { $: mojo.internal.Enum() };

// Enum: Layout
tabs_api.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};
tabs_api.mojom.LayoutSpec = { $: mojo.internal.Enum() };

// Union: Data
tabs_api.mojom.DataSpec = { $: mojo.internal.Union(
    'tabs_api.mojom.Data', {
      'tab': {
        'ordinal': 0,
        'type': tabs_api.mojom.TabSpec,
      }},
      'tab_strip': {
        'ordinal': 1,
        'type': tabs_api.mojom.TabStripSpec,
      }},
      'pinned_tabs': {
        'ordinal': 2,
        'type': tabs_api.mojom.PinnedTabsSpec,
      }},
      'unpinned_tabs': {
        'ordinal': 3,
        'type': tabs_api.mojom.UnpinnedTabsSpec,
      }},
      'tab_group': {
        'ordinal': 4,
        'type': tabs_api.mojom.TabGroupSpec,
      }},
      'split_tab': {
        'ordinal': 5,
        'type': tabs_api.mojom.SplitTabSpec,
      }},
    })
};

// Struct: Image
tabs_api.mojom.ImageSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Image',
      packedSize: 16,
      fields: [
        { name: 'data_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Tab
tabs_api.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Tab',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'favicon', packedOffset: 24, packedBitOffset: 0, type: tabs_api.mojom.ImageSpec, nullable: false, minVersion: 0 },
        { name: 'alert_states', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.AlertStateSpec, false), nullable: false, minVersion: 0 },
        { name: 'network_state', packedOffset: 40, packedBitOffset: 0, type: tabs_api.mojom.NetworkStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_active', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_selected', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_blocked', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TabStrip
tabs_api.mojom.TabStripSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStrip',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PinnedTabs
tabs_api.mojom.PinnedTabsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.PinnedTabs',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UnpinnedTabs
tabs_api.mojom.UnpinnedTabsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.UnpinnedTabs',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TabGroup
tabs_api.mojom.TabGroupSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabGroup',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.TabGroupVisualDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TabGroupVisualData
tabs_api.mojom.TabGroupVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabGroupVisualData',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false, minVersion: 0 },
        { name: 'is_collapsed', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SplitTab
tabs_api.mojom.SplitTabSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.SplitTab',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.SplitTabVisualDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SplitTabVisualData
tabs_api.mojom.SplitTabVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.SplitTabVisualData',
      packedSize: 16,
      fields: [
        { name: 'kVertical', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Container
tabs_api.mojom.ContainerSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Container',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.DataSpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(tabs_api.mojom.ContainerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TabCreatedContainer
tabs_api.mojom.TabCreatedContainerSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabCreatedContainer',
      packedSize: 24,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.TabSpec, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
