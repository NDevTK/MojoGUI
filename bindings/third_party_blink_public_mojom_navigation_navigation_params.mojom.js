// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: NavigationType
blink.mojom.NavigationType = {
  RELOAD: 0,
  RELOAD_BYPASSING_CACHE: 1,
  RESTORE: 2,
  RESTORE_WITH_POST: 3,
  HISTORY_SAME_DOCUMENT: 4,
  HISTORY_DIFFERENT_DOCUMENT: 5,
  SAME_DOCUMENT: 6,
  DIFFERENT_DOCUMENT: 7,
};

// Enum: NavigationTypeForNavigationApi
blink.mojom.NavigationTypeForNavigationApi = {
  kPush: 0,
  kTraverse: 1,
  kReplace: 2,
  kReload: 3,
};

// Enum: ForceHistoryPush
blink.mojom.ForceHistoryPush = {
  kYes: 0,
  kNo: 1,
};

// Enum: ParentResourceTimingAccess
blink.mojom.ParentResourceTimingAccess = {
  kDoNotReport: 0,
  kReportWithoutResponseDetails: 1,
  kReportWithResponseDetails: 2,
};

// Struct: BeginNavigationParams
blink.mojom.BeginNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BeginNavigationParams',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CommonNavigationParams
blink.mojom.CommonNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonNavigationParams',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NavigationTiming
blink.mojom.NavigationTimingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NavigationTiming',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: OldPageInfo
blink.mojom.OldPageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OldPageInfo',
      packedSize: 16,
      fields: [
        { name: 'new_lifecycle_state_for_old_page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CommitNavigationParams
blink.mojom.CommitNavigationParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommitNavigationParams',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageSwapEventParams
blink.mojom.PageSwapEventParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageSwapEventParams',
      packedSize: 16,
      fields: [
        { name: 'navigation_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
