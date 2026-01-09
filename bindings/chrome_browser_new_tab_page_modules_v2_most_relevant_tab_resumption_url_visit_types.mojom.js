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
