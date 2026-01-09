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

// Struct: Image
tabs_api.mojom.ImageSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Image',
      packedSize: 16,
      fields: [
        { name: 'data_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Tab
tabs_api.mojom.TabSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Tab',
      packedSize: 64,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'favicon', packedOffset: 32, packedBitOffset: 0, type: tabs_api.mojom.ImageSpec, nullable: false },
        { name: 'alert_states', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'network_state', packedOffset: 48, packedBitOffset: 0, type: tabs_api.mojom.NetworkStateSpec, nullable: false },
        { name: 'is_active', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_selected', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_blocked', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: tabs_api.mojom.TabGroupVisualDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TabGroupVisualData
tabs_api.mojom.TabGroupVisualDataSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabGroupVisualData',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: tab_groups.mojom.ColorSpec, nullable: false },
        { name: 'is_collapsed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: tabs_api.mojom.SplitTabVisualDataSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'kVertical', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Container
tabs_api.mojom.ContainerSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.Container',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.DataSpec, nullable: false },
        { name: 'children', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'tab', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.TabSpec, nullable: false },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: tabs_api.mojom.PositionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
