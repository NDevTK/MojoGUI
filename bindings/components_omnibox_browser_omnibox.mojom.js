// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/browser/omnibox.mojom
// Module: omnibox.mojom

'use strict';

// Module namespace
var omnibox = omnibox || {};
omnibox.mojom = omnibox.mojom || {};

omnibox.mojom.NavigationPredictorSpec = { $: mojo.internal.Enum() };
omnibox.mojom.PageClassificationSpec = { $: mojo.internal.Enum() };

// Enum: NavigationPredictor
omnibox.mojom.NavigationPredictor = {
  kMouseDown: 1,
  kUpOrDownArrowButton: 2,
  kTouchDown: 3,
};

// Enum: PageClassification
omnibox.mojom.PageClassification = {
  INVALID_SPEC: 0,
  NTP: 1,
  BLANK: 2,
  HOME_PAGE: 3,
  OTHER: 4,
  SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT: 6,
  INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS: 7,
  SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT: 9,
  APP_HOME: 10,
  APP_SEARCH: 11,
  APP_MAPS: 12,
  SEARCH_BUTTON_AS_STARTING_FOCUS: 13,
  CHROMEOS_APP_LIST: 14,
  NTP_REALBOX: 15,
  ANDROID_SEARCH_WIDGET: 16,
  ANDROID_SHORTCUTS_WIDGET: 19,
  NTP_ZPS_PREFETCH: 20,
  JOURNEYS: 21,
  SRP_ZPS_PREFETCH: 22,
  OTHER_ZPS_PREFETCH: 23,
  CONTEXTUAL_SEARCHBOX: 24,
  SEARCH_SIDE_PANEL_SEARCHBOX: 25,
  LENS_SIDE_PANEL_SEARCHBOX: 26,
  SEARCH_RESULT_PAGE_ON_CCT: 27,
  OTHER_ON_CCT: 28,
};
