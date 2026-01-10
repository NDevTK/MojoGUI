// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/most_relevant_tab_resumption/url_visit_types.mojom
// Module: ntp.most_relevant_tab_resumption.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.most_relevant_tab_resumption = ntp.most_relevant_tab_resumption || {};
ntp.most_relevant_tab_resumption.mojom = ntp.most_relevant_tab_resumption.mojom || {};
var url = url || {};

ntp.most_relevant_tab_resumption.mojom.FormFactorSpec = { $: mojo.internal.Enum() };
ntp.most_relevant_tab_resumption.mojom.DecorationTypeSpec = { $: mojo.internal.Enum() };
ntp.most_relevant_tab_resumption.mojom.VisitSourceSpec = { $: mojo.internal.Enum() };
ntp.most_relevant_tab_resumption.mojom.DecorationSpec = { $: {} };
ntp.most_relevant_tab_resumption.mojom.URLVisitSpec = { $: {} };

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
mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.DecorationSpec, 'ntp.most_relevant_tab_resumption.mojom.Decoration', [
      mojo.internal.StructField('type', 0, 0, ntp.most_relevant_tab_resumption.mojom.DecorationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URLVisit
mojo.internal.Struct(
    ntp.most_relevant_tab_resumption.mojom.URLVisitSpec, 'ntp.most_relevant_tab_resumption.mojom.URLVisit', [
      mojo.internal.StructField('form_factor', 0, 0, ntp.most_relevant_tab_resumption.mojom.FormFactorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_known_to_sync', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, ntp.most_relevant_tab_resumption.mojom.VisitSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('decoration', 48, 0, ntp.most_relevant_tab_resumption.mojom.DecorationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relative_time', 56, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 64, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('url_key', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('training_request_id', 80, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 96]]);
