// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/console_message.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ConsoleMessageLevelSpec = { $: mojo.internal.Enum() };
blink.mojom.ConsoleMessageSourceSpec = { $: mojo.internal.Enum() };
blink.mojom.ConsoleMessageCategorySpec = { $: mojo.internal.Enum() };

// Enum: ConsoleMessageLevel
blink.mojom.ConsoleMessageLevel = {
  kVerbose: 0,
  kInfo: 1,
  kWarning: 2,
  kError: 3,
};

// Enum: ConsoleMessageSource
blink.mojom.ConsoleMessageSource = {
  kXml: 0,
  kJavaScript: 1,
  kNetwork: 2,
  kConsoleApi: 3,
  kStorage: 4,
  kRendering: 5,
  kSecurity: 6,
  kOther: 7,
  kDeprecation: 8,
  kWorker: 9,
  kViolation: 10,
  kIntervention: 11,
  kRecommendation: 12,
};

// Enum: ConsoleMessageCategory
blink.mojom.ConsoleMessageCategory = {
  Cors: 0,
};
