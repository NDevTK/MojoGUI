// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/browser/omnibox.mojom
// Module: omnibox.mojom

'use strict';

// Module namespace
var omnibox = omnibox || {};
omnibox.mojom = omnibox.mojom || {};


// Enum: NavigationPredictor
omnibox.mojom.mojom.NavigationPredictor = {
  kMouseDown: 0,
  kUpOrDownArrowButton: 1,
  kTouchDown: 2,
};
omnibox.mojom.mojom.NavigationPredictorSpec = { $: mojo.internal.Enum() };

// Enum: PageClassification
omnibox.mojom.mojom.PageClassification = {
  INVALID_SPEC: 0,
  NTP: 1,
  BLANK: 2,
  HOME_PAGE: 3,
  OTHER: 4,
  SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT: 5,
  INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS: 6,
  SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT: 7,
  APP_HOME: 8,
  APP_SEARCH: 9,
  APP_MAPS: 10,
  SEARCH_BUTTON_AS_STARTING_FOCUS: 11,
  CHROMEOS_APP_LIST: 12,
  NTP_REALBOX: 13,
  ANDROID_SEARCH_WIDGET: 14,
  ANDROID_SHORTCUTS_WIDGET: 15,
  NTP_ZPS_PREFETCH: 16,
  JOURNEYS: 17,
  SRP_ZPS_PREFETCH: 18,
  OTHER_ZPS_PREFETCH: 19,
  CONTEXTUAL_SEARCHBOX: 20,
  SEARCH_SIDE_PANEL_SEARCHBOX: 21,
  LENS_SIDE_PANEL_SEARCHBOX: 22,
  SEARCH_RESULT_PAGE_ON_CCT: 23,
  OTHER_ON_CCT: 24,
};
omnibox.mojom.mojom.PageClassificationSpec = { $: mojo.internal.Enum() };
