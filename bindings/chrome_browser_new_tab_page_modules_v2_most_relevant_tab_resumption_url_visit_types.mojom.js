// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/url_visit_types.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom || {};
var url = url || {};


// Enum: FormFactor
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.FormFactor = {
  kUnknown: 0,
  kDesktop: 1,
  kPhone: 2,
  kTablet: 3,
  kAutomotive: 4,
  kWearable: 5,
  kTv: 6,
};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.FormFactorSpec = { $: mojo.internal.Enum() };

// Enum: DecorationType
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.DecorationType = {
  kVisitedXAgo: 0,
  kMostRecent: 1,
  kFrequentlyVisited: 2,
  kFrequentlyVisitedAtTime: 3,
};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.DecorationTypeSpec = { $: mojo.internal.Enum() };

// Enum: VisitSource
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.VisitSource = {
  kTab: 0,
  kHistory: 1,
};
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.VisitSourceSpec = { $: mojo.internal.Enum() };

// Struct: Decoration
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.DecorationSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.Decoration',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.DecorationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'display_string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: URLVisit
ntp.most_relevant_tab_resumption.most_relevant_tab_resumption.mojom.mojom.URLVisitSpec = {
  $: {
    structSpec: {
      name: 'ntp.most_relevant_tab_resumption.mojom.URLVisit',
      packedSize: 88,
      fields: [
        { name: 'form_factor', packedOffset: 64, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.FormFactorSpec, nullable: false, minVersion: 0 },
        { name: 'is_known_to_sync', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 68, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.VisitSourceSpec, nullable: false, minVersion: 0 },
        { name: 'session_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'decoration', packedOffset: 24, packedBitOffset: 0, type: ntp.most_relevant_tab_resumption.mojom.DecorationSpec, nullable: false, minVersion: 0 },
        { name: 'relative_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'url_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'training_request_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};
