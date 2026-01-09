// Auto-generated MojoJS binding
// Source: chromium_src/ui/events/mojom/motion_event_android.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: PointerCoordinates
ui.mojom.PointerCoordinatesSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.PointerCoordinates',
      packedSize: 16,
      fields: [
        { name: 'touch_major', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MotionEventAndroidCachedPointer
ui.mojom.MotionEventAndroidCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.MotionEventAndroidCachedPointer',
      packedSize: 16,
      fields: [
        { name: 'tool_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HistoricalCachedPointer
ui.mojom.HistoricalCachedPointerSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.HistoricalCachedPointer',
      packedSize: 16,
      fields: [
        { name: 'event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CachedMotionEventAndroid
ui.mojom.CachedMotionEventAndroidSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.CachedMotionEventAndroid',
      packedSize: 16,
      fields: [
        { name: 'historical_events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
