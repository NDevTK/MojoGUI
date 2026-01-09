// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/console_message.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ConsoleMessageLevel
blink.mojom.ConsoleMessageLevel = {
  kVerbose: 0,
  kInfo: 1,
  kWarning: 2,
  kError: 3,
};
blink.mojom.ConsoleMessageLevelSpec = { $: mojo.internal.Enum() };

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
blink.mojom.ConsoleMessageSourceSpec = { $: mojo.internal.Enum() };

// Enum: ConsoleMessageCategory
blink.mojom.ConsoleMessageCategory = {
  Cors: 0,
};
blink.mojom.ConsoleMessageCategorySpec = { $: mojo.internal.Enum() };
