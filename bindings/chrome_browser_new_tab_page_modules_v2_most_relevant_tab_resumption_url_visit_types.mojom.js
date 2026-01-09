// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/url_visit_types.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.mojom || {};


// Enum: FormFactor
ntp.most_relevant_tab_resumption.mojom.FormFactor = {
  kUnknown: 0,
  kDesktop: 1,
  kPhone: 2,
  kTablet: 3,
  kAutomotive: 4,
  kWearable: 5,
  kTv: 6,
};

// Enum: DecorationType
ntp.most_relevant_tab_resumption.mojom.DecorationType = {
  kVisitedXAgo: 0,
  kMostRecent: 1,
  kFrequentlyVisited: 2,
  kFrequentlyVisitedAtTime: 3,
};

// Enum: VisitSource
ntp.most_relevant_tab_resumption.mojom.VisitSource = {
  kTab: 0,
  kHistory: 1,
};

// Struct: Decoration
ntp.most_relevant_tab_resumption.mojom.DecorationSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.Decoration',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_string', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLVisit
ntp.most_relevant_tab_resumption.mojom.URLVisitSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.URLVisit',
      packedSize: 96,
      fields: [
        { name: 'form_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'session_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'title', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'decoration', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'relative_time', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timestamp', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'url_key', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'training_request_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'is_known_to_sync', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
